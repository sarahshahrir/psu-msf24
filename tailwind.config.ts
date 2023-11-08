/** @type {import('tailwindcss').Config} */
import React, { Any } from "react";

const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/src/util/flattenColorPalette");
const toColorValue = require("tailwindcss/src/util/toColorValue");

interface Props {
  matchUtilities?: Any;
  e?: Any;
  config?: Any;
  theme?: Any;
  // any props that come into the component
}

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, e, config, theme }: Props) {
      const textBorderSize = `--tw${config("prefix")}-text-border-size`;

      matchUtilities(
        {
          "text-border": (value) => ({
            "text-shadow": `0 0 var(${textBorderSize},1px) ${toColorValue(
              value
            )}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme("borderColor"))
          ),
          type: "color",
        }
      );

      matchUtilities(
        {
          "text-border-size": (value) => ({
            [textBorderSize]: value,
          }),
        },
        { values: theme("borderWidth") }
      );
    }),
  ],
};
