import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cxg4lnHt.mjs';
import { manifest } from './manifest_DuHEqF-g.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/author/_color_/_page_.astro.mjs');
const _page2 = () => import('./pages/author.astro.mjs');
const _page3 = () => import('./pages/author/_---author_.astro.mjs');
const _page4 = () => import('./pages/home.astro.mjs');
const _page5 = () => import('./pages/users/_user_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.2.3_jiti@1.21.7_rollup@4.34.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/author/[color]/[page]/index.astro", _page1],
    ["src/pages/author/index.astro", _page2],
    ["src/pages/author/[...author]/index.astro", _page3],
    ["src/pages/home.astro", _page4],
    ["src/pages/users/[user]/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///home/gautier/perso/tutolaravelastro/frontendastro/dist/client/",
    "server": "file:///home/gautier/perso/tutolaravelastro/frontendastro/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
