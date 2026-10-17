/** Dados fixos do perfil (links, e-mail, datas). Textos ficam em `src/i18n`. */
export const profile = {
  name: "Gabriel Mundt",
  fullName: "Gabriel Arthur Mundt",
  brand: "Munardt",
  email: "munardt@hotmail.com",
  birthDate: "2002-08-19",
  brandSince: 2018,
  links: {
    github: "https://github.com/Munardt",
    linkedin: "https://linkedin.com/in/munardt",
    instagram: "https://www.instagram.com/munardt/",
    discord: "https://discord.gg/enrxQYAagR",
    source: "https://github.com/Munardt/site",
  },
};

/**
 * Calcula a idade a partir da data de nascimento do perfil.
 * @returns {number} Idade em anos completos
 */
export function getAge(): number {
  const birth = new Date(`${profile.birthDate}T00:00:00`);
  const now = new Date();
  const age = now.getFullYear() - birth.getFullYear();
  const hadBirthday =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  return hadBirthday ? age : age - 1;
}
