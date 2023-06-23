// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path"
export default defineNuxtConfig({
  // devtools: { enabled: true }
  
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
