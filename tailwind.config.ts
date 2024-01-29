import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
       "customYellow": "#edb703",
       "customPurpleA": "#8A348E"
      },
      border: {
       "customYellow": "#edb703",
       "customPurpleA": "#8A348E"
      },
      colors: {
       "customYellow": "#edb703",
       "customPurpleA": "#8A348E"
      },
    },
  },
  plugins: [],
};
export default config;
    // --e-global-color-primary: #6EC1E4;
    // --e-global-color-secondary: #54595F;
    // --e-global-color-text: #7A7A7A;
    // --e-global-color-accent: #61CE70;
    // --e-global-color-abcc539: #25133A;
    // --e-global-color-1e5ec30: #EDB703;
    // --e-global-color-438ae08: #8A348E;
    // --e-global-color-25fe33c: #444444;
    // --e-global-color-6982c47: #76348E;