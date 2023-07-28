/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      themes: ["light", "dark"],
      screens: {
        // Define el breakpoint sm como 320px
        'sm': '320px',
        'lg': '1100px',
        'xl': '1350px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#2969E3',
        'background': '#2A155C',
        'Secondary': '#FEA50A',
        'tipografia': '#2A2A2A',
        'tipografiaalter': 'white',
        'salida': '#EDF8EA',
        'editar': '#EAF0FC',
        'eliminar': '#FCECEC',
        'hover-linea': '#F4F7FF',
        'contorno': '#E3E3E3'
      }
    },
  },
  plugins: [require("daisyui")],
}
