/**
 * Realiza um scroll suave para um elemento especifico
 * @param {HTMLElement} target Elemento alvo
 * @param {number} duration Tempo de animação
 */
export function ScrollToElementWithEase(target: HTMLElement, duration = 1000) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now();

  /**
   * Função de interpolação cúbica que mapeia um valor entre 0 e 1 para um
   * valor entre 0 e 1, criando uma curva suave de aceleração e desaceleração
   * @param {number} t Valor entre 0 e 1
   * @returns {number} Valor interpolado
   */
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Função que atualiza a posicao do scroll durante a animacao
   * @param {number} currentTime Tempo atual
   */
  function scroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
