import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    build: {
        lib: {
          entry: {
            "ua-check": resolve(__dirname, 'lib/main.ts'),
            "helper": resolve(__dirname, 'lib/helper/index.ts'),
            "matcher": resolve(__dirname, 'lib/matcher.ts'),
          },
          name: '[name]',
          fileName: '[name]',
        },
    },
})