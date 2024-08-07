import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default {
    base: '/dobewerk/',
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
    },
    plugins: [vue()],
    resolve: {
        alias: { '@': resolve(__dirname, './src') }
    },
    server: {
        watch: {
            ignored: [
                '**/.github',
                '**/dist',
                '**/scratch',
                '**/scripts',
                '**/.gitignore',
                '**/LICENSE',
                '**/README.md',
                '**/NOTES.md'
            ]
        }
    }
}
