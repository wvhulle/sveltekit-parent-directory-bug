// import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
//@ts-ignore
import tailwindcss from 'tailwindcss';
import { test } from "$lib/test"

console.log(test)
const config: UserConfig = {
	// plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [tailwindcss()]
		}
	}
}

export default config;
