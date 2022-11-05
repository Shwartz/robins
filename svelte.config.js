import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import * as dotenv from 'dotenv';

dotenv.config();

// Result is pushed as is from public folder to github pages
const dev = process.env.APP_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	prerender: {
		entries: ['*'],
	},
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: 'null'
		}),
		paths: {
			base: dev ?  '' : '/robins',
		}
	}
};

export default config;
