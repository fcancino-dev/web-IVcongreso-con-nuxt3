// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path"
export default defineNuxtConfig({
  // devtools: { enabled: true }
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'III Congreso Regional',
      meta: [
        { hid: 'description', name: 'description', content: 'III Congreso Regional de Ingeniería de Sistemas' },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' },
        {rel:'icon', type:'image/png', sizes:'12x16', href:'/logo3-3.png'},
      ],

      
      
    }
  },
  
  css: ["@/assets/css/tailwind.css",
        "@/assets/css/main.css",
        '@fortawesome/fontawesome-svg-core/styles.css'  
      ],
  modules:['nuxt-icon'],
      
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
