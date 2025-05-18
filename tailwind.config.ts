import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: '15px'
  		},
  		colors: {
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			blackish: '#1B1B1B',
  			theme_1: '#B17155',
  			theme_2: '#F4DDCB',
  			theme_3: '#A77E62',
  			theme_4: '#3A2417',
  			theme_5: '#311F13',
  			MidnightBlue: '#2C3E50',
  			WarmWhite: '#FDFDFD',
  			AntiqueGold: '#C19A6B',
  			MutedSand: '#E4DCCF',
  			CharcoalBlack: '#333333',
  			Terracotta: '#A0522D',
  			PaleMint: '#F5FBEF',
  			ForestGreen: '#617A55',
  			WarmBeige: '#EFE1CE',
  			DeepMahogany: '#4A2F26',
  			RusticGray: '#D3CBC3',
  			DustyBlue: '#7A8A92',
  			LightPastelPeach: '#FFE5D9',
  			CocoaBrown: '#6F4E37',
  			Goldenrod: '#DAA520',
  			CoffeeBrown: '#3C2F2F',
  			SoftCream: '#F5F5F5',
  			BurnishedBronze: '#8E735B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
