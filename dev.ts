#!/usr/bin/env -S node --no-warnings --loader ts-paths-esm-loader
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
//@ts-ignore
import { sveltekit } from './node_modules/@sveltejs/kit/src/exports/vite/index.js';
import tailwindcss from 'tailwindcss';

import { test } from "$lib/test"
console.log(test)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

    ; (async () => {
        const server = await createServer({
            // any valid user config options, plus `mode` and `configFile`

            plugins: [sveltekit()],
            css: {
                postcss: {
                    plugins: [tailwindcss]
                }
            },
            root: __dirname,
            server: {
                port: 3000,
            },
        });
        await server.listen();

        server.printUrls();
    })();