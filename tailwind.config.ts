import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FF8F9C",
        blackish: "#1B1B1B",
        theme_1: "#B17155",
        theme_2: "#F4DDCB",
        theme_3: "#A77E62",
        theme_4: "#3A2417",
        theme_5: "#311F13",
        MidnightBlue: "#2C3E50",
        WarmWhite: "#FDFDFD",
        AntiqueGold: "#C19A6B",
        MutedSand: "#E4DCCF",
        CharcoalBlack: "#333333",
        Terracotta: "#A0522D",
        PaleMint: "#F5FBEF",
        ForestGreen: "#617A55",
        WarmBeige: "#EFE1CE",
        DeepMahogany: "#4A2F26",
        RusticGray: "#D3CBC3",
        DustyBlue: "#7A8A92",
        LightPastelPeach: "#FFE5D9",
        CocoaBrown: "#6F4E37",
        Goldenrod: "#DAA520",
        CoffeeBrown: "#3C2F2F",
        SoftCream: "#F5F5F5",
        BurnishedBronze: "#8E735B",
      },
    },
  },
  plugins: [],
} satisfies Config;
