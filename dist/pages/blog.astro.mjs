import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_G3S5vQGt.mjs';
import { g as getCollection } from '../chunks/_astro_content_hi4VP1Zk.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  const categories = {
    "Gu\xEDas de cuidado": sortedPosts.filter((p) => p.data.category === "Gu\xEDas de cuidado"),
    "Problemas y enfermedades": sortedPosts.filter((p) => p.data.category === "Problemas y enfermedades"),
    "Tipos de plantas": sortedPosts.filter((p) => p.data.category === "Tipos de plantas")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog \u2014 Todas las gu\xEDas de plantas de interior \u2014 VerdeEnCasa", "description": "Explora todas nuestras gu\xEDas completas sobre el cuidado de plantas de interior. M\xE1s de 30 art\xEDculos con informaci\xF3n detallada y consejos pr\xE1cticos.", "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding:4rem 0;" data-astro-cid-ijnerlr2> <h1 style="font-size:2.5rem; font-weight:800; color:#0a0a0a; margin-bottom:1rem;" data-astro-cid-ijnerlr2>📚 Todas nuestras guías</h1> <p style="font-size:1.1rem; color:#737373; margin-bottom:3rem;" data-astro-cid-ijnerlr2> ${sortedPosts.length} artículos completos para ayudarte a cuidar tus plantas de interior como un experto
</p> ${Object.entries(categories).map(([categoryName, categoryPosts]) => renderTemplate`<section style="margin-bottom:4rem;" data-astro-cid-ijnerlr2> <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem;" data-astro-cid-ijnerlr2> <h2 style="font-size:1.75rem; font-weight:700; color:#0a0a0a; margin:0;" data-astro-cid-ijnerlr2> ${categoryName === "Gu\xEDas de cuidado" && "\u{1F331} "} ${categoryName === "Problemas y enfermedades" && "\u{1F50D} "} ${categoryName === "Tipos de plantas" && "\u{1FAB4} "} ${categoryName} </h2> <span style="color:#737373; font-size:0.95rem;" data-astro-cid-ijnerlr2>${categoryPosts.length} artículos</span> </div> <div class="cards-grid" data-astro-cid-ijnerlr2> ${categoryPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id.replace(/\.md$/, "")}/`, "href")} style="text-decoration:none;" data-astro-cid-ijnerlr2> <div class="card" data-astro-cid-ijnerlr2> <div class="card-body" data-astro-cid-ijnerlr2> <span class="card-tag" data-astro-cid-ijnerlr2>${post.data.category}</span> <p class="card-title" data-astro-cid-ijnerlr2>${post.data.title}</p> <p class="card-excerpt" data-astro-cid-ijnerlr2>${post.data.description}</p> </div> </div> </a>`)} </div> </section>`)} <div style="margin-top:4rem; padding:2rem; background:linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%); border-radius:12px; text-align:center;" data-astro-cid-ijnerlr2> <h3 style="font-size:1.5rem; font-weight:700; color:#065f46; margin-bottom:1rem;" data-astro-cid-ijnerlr2>¿No encuentras lo que buscas?</h3> <p style="color:#047857; margin-bottom:1.5rem;" data-astro-cid-ijnerlr2>Escríbenos y lo añadiremos a nuestra lista de próximas guías</p> <a href="/contacto/" class="btn btn-primary" data-astro-cid-ijnerlr2>Contáctanos</a> </div> </div> ` })}  `;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/blog.astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
