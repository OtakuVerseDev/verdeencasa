import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_G3S5vQGt.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_hi4VP1Zk.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.verdeencasa.es");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.id.replace(/\.md$/, "") },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const categorySlugMap = {
    "Gu\xEDas de cuidado": "guias",
    "Problemas y enfermedades": "problemas",
    "Tipos de plantas": "tipos"
  };
  const catSlug = categorySlugMap[post.data.category] ?? "guias";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.data.title,
    "description": post.data.description,
    "datePublished": post.data.pubDate.toISOString(),
    "author": { "@type": "Organization", "name": "VerdeEnCasa" },
    "publisher": { "@type": "Organization", "name": "VerdeEnCasa", "url": "https://www.verdeencasa.es" }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.data.title} \u2014 VerdeEnCasa`, "description": post.data.description }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<div class="container"> <div class="article-header"> <nav class="breadcrumb" aria-label="Ruta de navegaci\xF3n"> <a href="/">Inicio</a> \u203A <a', ">", "</a> \u203A ", " </nav> <h1>", '</h1> <p class="article-meta">\nPor ', " \xB7 <time", "> ", ' </time> </p> </div> <div class="article-content"> ', ' </div> <div style="margin-top:2rem; padding:1.5rem; background:#f0fdf4; border-radius:12px; border:1px solid #86efac;"> <p style="font-size:0.9rem; color:#065f46;">\n\xBFTe ha sido \xFAtil este art\xEDculo? Comp\xE1rtelo con alguien que tambi\xE9n tenga plantas en casa \u{1F33F}\n</p> </div> </div> '])), unescapeHTML(JSON.stringify(jsonLd)), maybeRenderHead(), addAttribute(`/${catSlug}/`, "href"), post.data.category, post.data.title, post.data.title, post.data.author, addAttribute(post.data.pubDate.toISOString(), "datetime"), post.data.pubDate.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }), renderComponent($$result2, "Content", Content, {})) })}`;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/blog/[id].astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
