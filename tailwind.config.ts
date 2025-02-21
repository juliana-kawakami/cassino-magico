import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#764b36",
        golden: "#fdac00",
        darkbrown: "#37190a",
        beige: "#efe7dd",
      },
    },
  },
  plugins: [],
} satisfies Config;
