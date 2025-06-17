/**
 * Realiza o cálculo da idade com base na data de nascimento.
 * A data de nascimento é fixa em 19 de agosto de 2002.
 * @returns {number} Retorna a idade em anos
 */
export function CalculateAge(): number {
  const birthDate: number = new Date("2002-08-19").getTime();
  const now: number = Date.now();
  const age: number = Math.floor(
    (now - birthDate) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return age;
}
