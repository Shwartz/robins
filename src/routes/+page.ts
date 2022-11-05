// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

// Allows client side routing. Necessary for page transitions and link prefetching; change to false if you prefer ordinary routing without JS
export const csr = true
