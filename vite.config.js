// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { defineConfig, loadEnv } from 'vite'

// const env = loadEnv(mode, process.cwd(), '');

// return {
//   define: {
//     'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//   },
//   plugins: [react()],
// }

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "SOME_KEY_IN_YOUR_ENV_FILE",
  "SOME_OTHER_KEY_IN_YOUR_ENV_FILE",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})

