import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        strictPort: true,
    },
    build: {
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                redirect: resolve(import.meta.dirname, 'redirect.html'),
            },
        },
    },
});
