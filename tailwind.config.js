import { heroui } from "@heroui/theme";

const srcGlob = "./src/**/*.{js,ts,jsx,tsx,mdx}";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    srcGlob,
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/popover.js",
  ],
  // safelist: [
  //   "text-red-600",
  //   "text-sky-500",
  //   "text-blue-500",
  //   "text-purple-500",
  //   "text-slate-50",
  //   "text-4xl",
  //   "hover:shadow-red-500/40",
  //   "hover:shadow-sky-400/40",
  //   "hover:shadow-blue-500/40",
  //   "hover:shadow-sky-600/40",
  //   "hover:shadow-purple-500/40",
  //   "hover:shadow-slate-50/40",
  //   "hover:shadow-amber-500/40",
  //   "hover:shadow-cyan-500/40",
  //   "hover:shadow-pink-500/40",
  //   "hover:shadow-orange-600/40",
  //   "hover:shadow-gray-600/40",
  //   "hover:shadow-lime-500/40",
  //   "hover:shadow-blue-600/40",
  // ],
  safelist: [
    // text-* (cores dos ícones)
    "text-red-700",
    "text-sky-500",
    "text-blue-600",
    "text-yellow-500",
    "text-lime-600",
    "text-orange-700",
    "text-fuchsia-400",
    "text-pink-500",
    "text-purple-500",
    "text-blue-500",
    "text-red-500",
    "text-blue-700",
    "text-gray-800",
    "text-gray-200",
    "text-gray-600",

    // dark:text-* (para modo escuro)
    "dark:text-white",

    // from-* (gradiente de glow)
    "from-red-700/10",
    "from-sky-500/10",
    "from-blue-600/10",
    "from-yellow-500/10",
    "from-lime-600/10",
    "from-orange-700/10",
    "from-fuchsia-400/10",
    "from-pink-500/10",
    "from-purple-500/10",
    "from-blue-500/10",
    "from-red-500/10",
    "from-blue-700/10",
    "from-gray-500/10",
    "from-orange-600/10",

    // hover:from-* (gradiente de glow ao passar o mouse)
    "from-red-700/50",
    "from-sky-500/50",
    "from-blue-600/50",
    "from-yellow-500/50",
    "from-lime-600/50",
    "from-orange-700/50",
    "from-fuchsia-400/50",
    "from-pink-500/50",
    "from-purple-500/50",
    "from-blue-500/50",
    "from-red-500/50",
    "from-blue-700/50",
    "from-gray-500/50",
    "from-orange-600/50",
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
