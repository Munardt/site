/** Cores usadas para desenhar a esfera. */
export type SphereColors = {
  /** Início do gradiente das partículas. */
  a1: string;

  /** Fim do gradiente das partículas. */
  a2: string;

  /** Cor de realce na borda iluminada. */
  hi: string;
};

type Particle = {
  /** Direção unitária do ponto na esfera. */
  x: number;
  y: number;
  z: number;

  /** Semente aleatória (0..1) para variação individual. */
  seed: number;

  /** Raio relativo: 1 = superfície, > 1 = poeira ao redor. */
  shell: number;

  /** Deslocamento atual causado pelo cursor (0..1) e sua direção. */
  push: number;
  dx: number;
  dy: number;
};

type Bucket = { style: string; xs: number[]; ys: number[]; sizes: number[] };

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const COLOR_STEPS = 20;
const ALPHA_STEPS = 10;
const PERSPECTIVE = 3.2;

/** Luz vinda do alto à esquerda, levemente à frente. */
const LIGHT = (() => {
  const v = [-0.75, -0.45, -0.5];
  const m = Math.hypot(...v);

  return v.map((n) => n / m);
})();

/**
 * Converte uma cor hexadecimal (#rrggbb) em RGB.
 * @param {string} hex Cor hexadecimal
 * @returns {number[]} Componentes [r, g, b]
 */
function hexToRgb(hex: string): number[] {
  const n = parseInt(hex.trim().replace("#", ""), 16);

  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Esfera de partículas desenhada em canvas 2D.
 *
 * Os pontos ficam numa espiral de Fibonacci (distribuição uniforme) e uma
 * camada de poeira os envolve. A esfera respira, gira devagar, inclina na
 * direção do cursor e abre espaço onde ele passa. Para desempenho, os pontos
 * são agrupados por cor/opacidade e cada grupo é desenhado com um único
 * `fillStyle`.
 */
export class SphereEngine {
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private buckets: Bucket[] = [];
  private width = 0;
  private height = 0;
  private cx = 0;
  private cy = 0;
  private radius = 0;
  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private pointerX = -9999;
  private pointerY = -9999;
  private pointerInside = false;
  private scatter = 0;
  private isLight = false;
  private running = false;
  private frame = 0;

  constructor(
    private canvas: HTMLCanvasElement,
    private reducedMotion: boolean,
  ) {
    const ctx = canvas.getContext("2d");

    if (!ctx) throw new Error("Canvas 2D indisponível");
    this.ctx = ctx;
  }

  /**
   * Cria as partículas. Menos pontos em telas pequenas.
   * @param {number} count Quantidade de pontos na superfície
   */
  private build(count: number) {
    const dust = Math.round(count * 0.26);

    this.particles = [];
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * GOLDEN_ANGLE;

      this.particles.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        seed: Math.random(),
        shell: 1,
        push: 0,
        dx: 0,
        dy: 0,
      });
    }
    for (let i = 0; i < dust; i++) {
      const u = Math.random() * 2 - 1;
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);

      this.particles.push({
        x: Math.cos(a) * r,
        y: u,
        z: Math.sin(a) * r,
        seed: Math.random(),
        shell: 1.12 + Math.pow(Math.random(), 1.6) * 0.85,
        push: 0,
        dx: 0,
        dy: 0,
      });
    }
  }

  /**
   * Define as cores e se o fundo é claro.
   * @param {SphereColors} colors Cores da esfera
   * @param {boolean} isLight Se o tema é claro
   */
  setColors(colors: SphereColors, isLight: boolean) {
    const c1 = hexToRgb(colors.a1);
    const c2 = hexToRgb(colors.a2);
    const hi = hexToRgb(colors.hi);

    this.isLight = isLight;
    this.buckets = [];
    for (let c = 0; c < COLOR_STEPS; c++) {
      let rgb: number[];

      // Os dois últimos tons misturam a1 com a cor de realce (borda iluminada)
      if (c < COLOR_STEPS - 2) {
        const k = c / (COLOR_STEPS - 3);

        rgb = c1.map((v, i) => Math.round(v + (c2[i] - v) * k));
      } else {
        const k = c === COLOR_STEPS - 1 ? 0.75 : 0.4;

        rgb = c1.map((v, i) => Math.round(v + (hi[i] - v) * k));
      }
      for (let a = 0; a < ALPHA_STEPS; a++) {
        const alpha = ((a + 1) / ALPHA_STEPS) * (isLight ? 0.95 : 1);

        this.buckets.push({
          style: `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha.toFixed(3)})`,
          xs: [],
          ys: [],
          sizes: [],
        });
      }
    }
    if (!this.running) this.draw(performance.now());
  }

  /** Ajusta o canvas ao tamanho do elemento e reposiciona a esfera. */
  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const narrow = rect.width < 768;
    const count = narrow ? 2600 : 4200;

    if (this.particles.length === 0 || this.width < 768 !== narrow) {
      this.build(count);
    }

    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.radius = narrow
      ? Math.min(rect.width * 0.34, rect.height * 0.16)
      : Math.min(rect.width, rect.height) * 0.34;
    this.cx = rect.width * (narrow ? 0.5 : 0.64);
    this.cy = narrow ? this.radius + 76 : rect.height * 0.44;

    if (!this.running) this.draw(performance.now());
  }

  /**
   * Atualiza a posição do cursor em coordenadas do canvas.
   * @param {number} x Posição horizontal
   * @param {number} y Posição vertical
   */
  setPointer(x: number, y: number) {
    this.pointerInside =
      x >= 0 && y >= 0 && x <= this.width && y <= this.height;
    this.pointerX = x;
    this.pointerY = y;
    this.targetX = this.pointerInside ? (x / this.width) * 2 - 1 : 0;
    this.targetY = this.pointerInside ? (y / this.height) * 2 - 1 : 0;
  }

  /** Indica que o cursor saiu da área. */
  clearPointer() {
    this.pointerInside = false;
    this.targetX = 0;
    this.targetY = 0;
  }

  /**
   * Dispersa a esfera (0 = intacta, 1 = espalhada). Usado no scroll.
   * @param {number} value Quantidade de dispersão
   */
  setScatter(value: number) {
    this.scatter = Math.max(0, Math.min(1, value));
    if (!this.running) this.draw(performance.now());
  }

  start() {
    if (this.running || this.reducedMotion) return;
    this.running = true;
    const loop = (now: number) => {
      if (!this.running) return;
      this.draw(now);
      this.frame = requestAnimationFrame(loop);
    };

    this.frame = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.frame);
  }

  /**
   * Desenha um quadro.
   * @param {number} now Tempo atual em milissegundos
   */
  private draw(now: number) {
    if (!this.buckets.length || !this.width) return;

    const t = this.reducedMotion ? 0 : now;
    const { ctx, cx, cy, radius: R } = this;

    this.mouseX += (this.targetX - this.mouseX) * 0.04;
    this.mouseY += (this.targetY - this.mouseY) * 0.04;

    const ay = t * 0.00011 + this.mouseX * 0.45;
    const ax = -0.28 + this.mouseY * 0.3;
    const cosY = Math.cos(ay);
    const sinY = Math.sin(ay);
    const cosX = Math.cos(ax);
    const sinX = Math.sin(ax);
    const pushDistance = R * 0.32;
    const pushRadius = R * 0.55;
    const scatter = this.scatter;
    const usePointer = this.pointerInside && !this.reducedMotion;

    for (const bucket of this.buckets) {
      bucket.xs.length = 0;
      bucket.ys.length = 0;
      bucket.sizes.length = 0;
    }
    ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      const surface = p.shell === 1;
      const breathe = surface
        ? 1 + 0.03 * Math.sin(p.seed * 6.28 + t * 0.0011 + p.y * 3.2)
        : p.shell + 0.04 * Math.sin(t * 0.0006 + p.seed * 9);
      const spread = breathe * (1 + scatter * (0.4 + p.seed * 1.4));

      // Rotação em Y e depois em X
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const persp = PERSPECTIVE / (PERSPECTIVE + z2);
      let sx = cx + x1 * spread * R * persp;
      let sy = cy + y2 * spread * R * persp;

      // O cursor empurra os pontos próximos para fora
      let target = 0;

      if (usePointer) {
        const dx = sx - this.pointerX;
        const dy = sy - this.pointerY;
        const dist = Math.hypot(dx, dy);

        if (dist < pushRadius && dist > 0.01) {
          target = Math.pow(1 - dist / pushRadius, 2);
          p.dx = dx / dist;
          p.dy = dy / dist;
        }
      }
      p.push += (target - p.push) * 0.09;
      if (p.push > 0.001) {
        sx += p.dx * p.push * pushDistance;
        sy += p.dy * p.push * pushDistance;
      }

      const front = z2 < 0;
      const light = -(x1 * LIGHT[0] + y2 * LIGHT[1] + z2 * LIGHT[2]);
      const rim = 1 - Math.abs(z2);
      let alpha: number;
      let size: number;
      let colorIndex: number;

      if (surface) {
        alpha = front
          ? 0.5 + 0.5 * Math.max(0, light) + rim * 0.35
          : 0.2 + rim * 0.25;
        size = (front ? 1.7 : 1.15) * persp;
        const k = Math.min(
          1,
          Math.max(0, ((x1 + 1) / 2) * 0.8 + ((y2 + 1) / 2) * 0.35),
        );

        colorIndex = Math.round(k * (COLOR_STEPS - 3));
        if (front && light > 0.55 && rim > 0.55) {
          colorIndex = light > 0.75 ? COLOR_STEPS - 1 : COLOR_STEPS - 2;
        }
      } else {
        alpha = 0.12 + 0.4 * Math.max(0, 1 - (p.shell - 1)) * (front ? 1 : 0.5);
        size = 1.1 * persp;
        colorIndex = Math.round(Math.min(1, (x1 + 1) / 2) * (COLOR_STEPS - 3));
      }

      alpha *= (1 - p.push * 0.5) * (1 - scatter * 0.75);
      if (this.isLight) alpha = Math.min(1, alpha * 1.15);

      const alphaIndex = Math.max(
        0,
        Math.min(ALPHA_STEPS - 1, Math.round(alpha * ALPHA_STEPS) - 1),
      );
      const bucket = this.buckets[colorIndex * ALPHA_STEPS + alphaIndex];

      bucket.xs.push(sx);
      bucket.ys.push(sy);
      bucket.sizes.push(size);
    }

    for (const bucket of this.buckets) {
      if (!bucket.xs.length) continue;
      ctx.fillStyle = bucket.style;
      for (let i = 0; i < bucket.xs.length; i++) {
        const s = bucket.sizes[i];

        ctx.fillRect(bucket.xs[i] - s / 2, bucket.ys[i] - s / 2, s, s);
      }
    }
  }
}
