import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(290,100%,60%)",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(120,100%,50%)",
          foreground: "hsl(var(--accent-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(180,100%,50%)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neonPink: "#ff00cc",
        neonCyan: "#00fff7",
        neonYellow: "#fff600",
        neonGreen: "#39ff14",
        neonBlue: "#00aaff",
        darkBg: "#0a001a",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        neonGlow: {
          "0%, 100%": {
            filter:
              "drop-shadow(0 0 8px #ff00cc) drop-shadow(0 0 16px #00fff7)",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 16px #fff600) drop-shadow(0 0 32px #39ff14)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        neonGlow: "neonGlow 2s infinite alternate",
      },
      boxShadow: {
        neon: "0 0 8px #ff00cc, 0 0 16px #00fff7",
        neonCyan: "0 0 8px #00fff7, 0 0 16px #00fff7",
        neonPink: "0 0 8px #ff00cc, 0 0 16px #ff00cc",
        neonGreen: "0 0 8px #39ff14, 0 0 16px #39ff14",
      },
      backgroundImage: {
        "cyberpunk-gradient":
          "linear-gradient(90deg, #ff00cc 0%, #00fff7 100%)",
        "cyberpunk-radial": "radial-gradient(circle, #ff00cc 0%, #00fff7 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
