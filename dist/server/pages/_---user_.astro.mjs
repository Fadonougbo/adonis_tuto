/* empty css                                 */
import { e as createComponent, r as renderTemplate, l as renderScript, j as renderHead } from '../chunks/astro/server_C60Hc5iY.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><!-- <script src="/index.js" type="module" defer ><\/script> -->', "</head> <body> ", "\nokok  user\n</body> </html>"])), renderHead(), renderScript($$result, "/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro?astro&type=script&index=0&lang.ts"));
}, "/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro", undefined);

const $$file = "/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/[...user]/index.astro";
const $$url = "/[...user]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
