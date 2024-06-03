import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#21563c',
        secondary: '#575757',
      }
    }
  },
  plugins: []
}
