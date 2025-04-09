import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const plugins = [tailwindcss()];
