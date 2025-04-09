/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.slate[300]"),
            "--tw-prose-headings": theme("colors.sky[200]"),
            "--tw-prose-links": theme("colors.sky[400]"),
            "--tw-prose-bold": theme("colors.slate[200]"),
            "--tw-prose-counters": theme("colors.slate[400]"),
            "--tw-prose-bullets": theme("colors.slate[600]"),
            "--tw-prose-hr": theme("colors.slate[700]"),
            "--tw-prose-quotes": theme("colors.slate[100]"),
            "--tw-prose-quote-borders": theme("colors.sky[500]"),
            "--tw-prose-captions": theme("colors.slate[400]"),
            "--tw-prose-code": theme("colors.slate[200]"),
            "--tw-prose-pre-code": theme("colors.slate[300]"),
            "--tw-prose-pre-bg": theme("colors.slate[900]"),
            "--tw-prose-th-borders": theme("colors.slate[600]"),
            "--tw-prose-td-borders": theme("colors.slate[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
