import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_G3S5vQGt.mjs';
import { g as getCollection } from '../chunks/_astro_content_hi4VP1Zk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const tipos = posts.filter((p) => p.data.category === "Tipos de plantas").sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tipos de plantas de interior \u2014 VerdeEnCasa", "description": "Descubre qu\xE9 planta de interior es perfecta para ti. Comparativas, caracter\xEDsticas y recomendaciones seg\xFAn luz, espacio y nivel de cuidado." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container--wide" style="padding-top:2.5rem;"> <h1 style="font-size:2rem; font-weight:800; color:#111827; margin-bottom:0.5rem;">🪴 Tipos de plantas</h1> <p style="color:#6b7280; margin-bottom:0.5rem;">Encuentra la planta perfecta para tu hogar según tus condiciones y nivel de experiencia.</p> <p style="color:#737373; font-size:0.95rem; margin-bottom:2rem;"><strong>${tipos.length} guías especializadas</strong> — Plantas por ubicación, tamaño, facilidad y más</p> <div class="cards-grid"> ${tipos.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id.replace(/\.md$/, "")}/`, "href")} style="text-decoration:none;"> <div class="card"> <div class="card-body"> <span class="card-tag">Tipo de planta</span> <p class="card-title">${post.data.title}</p> <p class="card-excerpt">${post.data.description}</p> </div> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/tipos/index.astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/tipos/index.astro";
const $$url = "/tipos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
