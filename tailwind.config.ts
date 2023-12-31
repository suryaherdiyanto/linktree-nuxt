import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  content: ["./**/*.vue"],
  theme: {
    extend: {
      minHeight: {
        '1/2': '280px'
      },
      fontFamily: {
        sans: ["DM Sans, sans-serif"]
      },
      height: {
        '128': '32rem'
      },
      width: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

