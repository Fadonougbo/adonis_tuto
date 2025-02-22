/* empty css                                    */
import { e as createComponent, f as createAstro, r as renderTemplate, m as maybeRenderHead, j as renderSlot, i as renderComponent, h as addAttribute, k as Fragment } from '../../chunks/astro/server_SwlxhsEd.mjs';
import { $ as $$Base } from '../../chunks/Base_DMYjt-Ma.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { content } = Astro2.props;
  return renderTemplate`<!-- <style is:global define:vars={{color}}>
    .essai {
        background: #000;
        color:var(--color);
        padding: 0.8rem;
        border-radius: 3px;
        margin-inline: 3px;
    }
</style> -->${maybeRenderHead()}<button class="essai">${content}</button>`;
}, "/home/gautier/perso/tutolaravelastro/frontendastro/src/components/Button.astro", undefined);

const $$List = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul> ${renderSlot($$result, $$slots["start"])} <li><mark>=></mark> Doe</li> ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["end"])} ${renderSlot($$result, $$slots["li-list"], renderTemplate` <strong>please add super heros list</strong> `)} </ul>`;
}, "/home/gautier/perso/tutolaravelastro/frontendastro/src/components/List.astro", undefined);

const getHexColor = () => {
  const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    const index = Math.floor(Math.random() * 15);
    color += hexValue[index];
  }
  return color;
};
const Color = ({ defaultcolor }) => {
  const [color, setColor] = useState(defaultcolor);
  useEffect(() => {
    console.log("mount");
  });
  const handleClick = () => {
    const newColor = getHexColor();
    setColor(() => newColor);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { onClick: handleClick, type: "button", children: "change" }),
    /* @__PURE__ */ jsx("span", { style: { width: "100px", height: "100px", display: "inline-block", background: color } })
  ] });
};
const Country = ({ children, first, second }) => {
  return /* @__PURE__ */ jsxs("ol", { children: [
    first,
    second,
    /* @__PURE__ */ jsx("li", { children: "Benin" }),
    children
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { user } = Astro2.params;
  const data = ["hulk", "stark", "sandman"];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`
page ${user}${maybeRenderHead()}<br> ${renderComponent($$result2, "Button", $$Button, { "content": "bouton de test" })} <button${addAttribute(["essai", { yellow: true }], "class:list")}>test</button> ${renderComponent($$result2, "List", $$List, {}, { "default": ($$result3) => renderTemplate`   <li><mark>=></mark> gaut</li> <li><mark>=></mark> jhi</li> <li><mark>=></mark> kokolo</li>  `, "end": ($$result3) => renderTemplate`<li> END <mark> >= </mark> </li>`, "li-list": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "li-list" }, { "default": ($$result4) => renderTemplate`${data.map((d) => {
    return renderTemplate`<li><mark>=></mark> ${d}</li>`;
  })}` })}`, "start": ($$result3) => renderTemplate`<li> START <mark> >= </mark> </li>` })}  ${renderComponent($$result2, "Color", Color, { "client:visible": true, "defaultcolor": "green", "client:component-hydration": "visible", "client:component-path": "/home/gautier/perso/tutolaravelastro/frontendastro/src/components/frontend/Color", "client:component-export": "Color" })} ${renderComponent($$result2, "Country", Country, {}, { "default": ($$result3) => renderTemplate` <li>Chine</li> <li>Japon</li>   `, "first": ($$result3) => renderTemplate`<li>Brésile</li>`, "second": ($$result3) => renderTemplate`<li>USA</li>` })} ` })}`;
}, "/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/users/[user]/index.astro", undefined);

const $$file = "/home/gautier/perso/tutolaravelastro/frontendastro/src/pages/users/[user]/index.astro";
const $$url = "/users/[user]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
