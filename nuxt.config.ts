import { defineNuxtConfig } from 'nuxt'
import graphql from "@rollup/plugin-graphql";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
 module:['@oruga-ui/oruga/nuxt'],
 build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
      "graphql", 
      "@urql/vue",
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ],
    
  },
  

  css: [
    '@/assets/css/main.css',
    ],

    vite: {
      plugins: [graphql()],
    },

})

