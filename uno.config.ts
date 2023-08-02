import { defineConfig, presetUno, presetWebFonts, transformerCompileClass } from 'unocss'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']
export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto:300,400,500,600,700,800,900'
      }
    })
  ],
  safelist: [
    ...Array.from(sizes, (size) => `rounded-${size}`),
    ...Array.from({ length: 20 }, (_, i) => `top-${i + 1}`),
    ...Array.from({ length: 20 }, (_, i) => `bottom-${i + 1}`)
  ],
  theme: {
    colors: {
      primary: '#B9FF66',
      secondary: '#F3F3F3',
      dark: '#191A23',
      'dark-gray': '#292A32',
      stoke: '#3A3A3A'
    }
  },
  transformers: [
    transformerCompileClass({
      classPrefix: ':husl:'
    })
  ]
})
