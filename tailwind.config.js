module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Tailwindがスタイルを適用するファイルを指定
  theme: {
    extend: {
      colors: {
        indigo: {
          500: "#4c51bf",
        },
        purple: {
          500: "#6b46c1",
        },
        pink: {
          500: "#ed64a6",
        },
      },
    },
  },
  plugins: [],
};
