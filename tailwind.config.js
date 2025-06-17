import { heroui } from "@heroui/theme";

const srcGlob = "./src/**/*.{js,ts,jsx,tsx,mdx}";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    srcGlob,
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-red-600",
    "text-sky-500",
    "text-blue-500",
    "text-purple-500",
    "text-slate-50",
    "text-4xl",
    "hover:shadow-red-500/40",
    "hover:shadow-sky-400/40",
    "hover:shadow-blue-500/40",
    "hover:shadow-sky-600/40",
    "hover:shadow-purple-500/40",
    "hover:shadow-slate-50/40",
    "hover:shadow-amber-500/40",
    "hover:shadow-cyan-500/40",
    "hover:shadow-pink-500/40",
    "hover:shadow-orange-600/40",
    "hover:shadow-gray-600/40",
    "hover:shadow-lime-500/40",
    "hover:shadow-blue-600/40",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
