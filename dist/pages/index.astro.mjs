import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_G3S5vQGt.mjs';
import { g as getCollection } from '../chunks/_astro_content_hi4VP1Zk.mjs';
import { g as getArticleImage } from '../chunks/images_DeaHdvUx.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const recentPosts = allPosts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()).slice(0, 6);
  const categories = [
    { name: "Gu\xEDas de cuidado", slug: "guias", icon: "\u{1F4D8}", desc: "Aprende paso a paso a cuidar cada tipo de planta" },
    { name: "Problemas y enfermedades", slug: "problemas", icon: "\u{1F50D}", desc: "Diagnostica y resuelve los problemas m\xE1s comunes" },
    { name: "Tipos de plantas", slug: "tipos", icon: "\u{1FAB4}", desc: "Descubre la planta perfecta para tu hogar" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "VerdeEnCasa \u2014 Gu\xEDa completa de cuidado de plantas de interior 2026", "description": "Aprende a cuidar plantas de interior con +30 gu\xEDas completas. Soluciones a hojas amarillas, riego, luz, plagas. Todo en espa\xF1ol. Consejos pr\xE1cticos para principiantes y expertos." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" \n---\n  import Hero from '../components/Hero.astro';\n  ---\n", "  ", '<section style="padding: 4rem 0 2rem; background: #fff;"> <div class="container--wide"> <h2 style="font-size:1.8rem; font-weight:800; text-align:center; margin-bottom:3rem; color:#0a0a0a;">\xBFPor qu\xE9 VerdeEnCasa?</h2> <div class="features-grid"> <div class="feature-box"> <div class="feature-icon">\u2705</div> <h3>Gu\xEDas verificadas</h3> <p>Cada art\xEDculo est\xE1 respaldado por investigaci\xF3n y experiencia real con plantas de interior.</p> </div> <div class="feature-box"> <div class="feature-icon">\u{1F1EA}\u{1F1F8}</div> <h3>100% en espa\xF1ol</h3> <p>Adaptado al clima, las condiciones y las plantas disponibles en Espa\xF1a y Latinoam\xE9rica.</p> </div> <div class="feature-box"> <div class="feature-icon">\u{1F4A1}</div> <h3>Soluciones pr\xE1cticas</h3> <p>Sin tecnicismos innecesarios. Te decimos qu\xE9 hacer y c\xF3mo hacerlo, paso a paso.</p> </div> </div> </div> </section>  <section style="padding: 3rem 0; background: #fafafa;"> <div class="container--wide"> <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.75rem; color:#0a0a0a;">Explora por categor\xEDa</h2> <p style="color:#737373; margin-bottom:2.5rem; font-size:1.05rem;">Encuentra exactamente lo que necesitas para tus plantas</p> <div class="cards-grid"> ', ' </div> </div> </section>  <section style="padding: 4rem 0; background: #fff;"> <div class="container--wide"> <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.75rem; color:#0a0a0a;">Art\xEDculos recientes</h2> <p style="color:#737373; margin-bottom:2.5rem; font-size:1.05rem;">Las \xFAltimas gu\xEDas y soluciones para tus plantas</p> <div class="cards-grid"> ', ` </div> </div> </section>  <section style="padding: 4rem 1.5rem; background: linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%); text-align: center;"> <div style="max-width: 700px; margin: 0 auto;"> <h2 style="font-size:2rem; font-weight:800; color:#064e3b; margin-bottom:1rem;">\xBFTu planta tiene un problema?</h2> <p style="font-size:1.1rem; color:#065f46; margin-bottom:2rem;">M\xE1s de 30 gu\xEDas detalladas con soluciones paso a paso para los problemas m\xE1s comunes.</p> <a href="/problemas/" class="btn btn-primary">Ver problemas y soluciones</a> </div> </section>  <section style="padding: 4rem 0; background: #fff;"> <div class="container"> <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.75rem; color:#0a0a0a; text-align:center;">Problemas m\xE1s frecuentes en plantas de interior</h2> <p style="color:#737373; margin-bottom:3rem; font-size:1.05rem; text-align:center;">Encuentra la soluci\xF3n r\xE1pida a los problemas que m\xE1s afectan a tus plantas</p> <div style="max-width:900px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;"> <a href="/blog/hojas-amarillas-pothos/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F7E1} Hojas amarillas</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">Por qu\xE9 aparecen y c\xF3mo solucionarlo \u2192</p> </a> <a href="/blog/por-que-se-caen-hojas-planta/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F342} Hojas que se caen</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">7 causas comunes y soluciones \u2192</p> </a> <a href="/blog/manchas-marrones-hojas-plantas/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F7E4} Manchas marrones</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">Diagn\xF3stico y tratamiento \u2192</p> </a> <a href="/blog/eliminar-plagas-plantas-interior/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F41B} Plagas</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">C\xF3mo identificar y eliminar \u2192</p> </a> <a href="/blog/hojas-secas-puntas-marrones/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F525} Puntas secas</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">Causas y prevenci\xF3n \u2192</p> </a> <a href="/blog/planta-no-crece-causas/" style="padding:1.5rem; background:#f9fafb; border-radius:12px; border:2px solid #e5e7eb; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.borderColor='#059669'" onmouseout="this.style.borderColor='#e5e7eb'"> <h3 style="font-size:1.1rem; font-weight:700; color:#0a0a0a; margin-bottom:0.5rem;">\u{1F4C9} No crece</h3> <p style="color:#6b7280; font-size:0.9rem; margin:0;">10 razones y soluciones \u2192</p> </a> </div> </div> </section>  <section style="padding: 4rem 0; background: #fff;"> <div class="container"> <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.75rem; color:#0a0a0a; text-align:center;">Preguntas frecuentes</h2> <p style="color:#737373; margin-bottom:3rem; font-size:1.05rem; text-align:center;">Las respuestas a las dudas m\xE1s comunes sobre plantas de interior</p> <div style="max-width:800px; margin:0 auto;"> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFCu\xE1ntas veces a la semana debo regar mis plantas?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">No existe una frecuencia universal. Depende del tipo de planta, la \xE9poca del a\xF1o, la humedad y la luz. La regla de oro es tocar la tierra: riega solo cuando los primeros 3-5 cm est\xE9n secos. En verano puede ser cada 4-7 d\xEDas, en invierno cada 10-14 d\xEDas.</p> </div> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFPor qu\xE9 las hojas de mi planta se ponen amarillas?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">Las hojas amarillas suelen indicar riego excesivo (causa #1), falta de luz, o falta de nutrientes. Si caen hojas amarillas desde abajo, probablemente est\xE1s regando demasiado. Lee nuestra gu\xEDa sobre <a href="/blog/hojas-amarillas-pothos/" style="color:#059669; font-weight:600;">hojas amarillas en plantas</a> para diagnosticar la causa exacta.</p> </div> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFQu\xE9 planta es buena para principiantes?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">Las mejores plantas para empezar son pothos, sansevieria (lengua de suegra), cactus, zamioculca y cinta. Todas toleran descuidos, poca luz y riegos irregulares. Consulta nuestra lista completa de <a href="/blog/plantas-interior-faciles-principiantes/" style="color:#059669; font-weight:600;">plantas f\xE1ciles para principiantes</a>.</p> </div> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFLas plantas necesitan sol directo?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">La mayor\xEDa de plantas de interior prefieren luz indirecta brillante, no sol directo. El sol directo puede quemar las hojas. Excepciones: cactus, suculentas y algunas plantas tropicales s\xED toleran sol directo. Si ves manchas marrones en las hojas, probablemente hay demasiado sol.</p> </div> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFCu\xE1ndo debo trasplantar mi planta?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">Trasplanta cuando veas ra\xEDces saliendo por los agujeros de drenaje, cuando la tierra se seque muy r\xE1pido despu\xE9s de regar, o cuando la planta deje de crecer. La mejor \xE9poca es primavera (marzo-mayo). Usa una maceta solo 2-3 cm m\xE1s grande que la anterior. Lee nuestra <a href="/blog/como-trasplantar-plantas-interior/" style="color:#059669; font-weight:600;">gu\xEDa completa de trasplante</a>.</p> </div> <div class="faq-item"> <h3 style="font-size:1.15rem; font-weight:700; color:#0a0a0a; margin-bottom:0.75rem;">\xBFC\xF3mo elimino plagas de forma natural?</h3> <p style="color:#525252; line-height:1.7; margin-bottom:2rem;">La mayor\xEDa de plagas se eliminan con jab\xF3n pot\xE1sico diluido en agua (1 cucharada por litro) pulverizado cada 3-4 d\xEDas. Para cochinillas, usa alcohol isoprop\xEDlico con un bastoncillo. El aceite de neem es efectivo contra casi todas las plagas. Act\xFAa r\xE1pido cuando detectes la primera plaga. Consulta nuestra <a href="/blog/eliminar-plagas-plantas-interior/" style="color:#059669; font-weight:600;">gu\xEDa de eliminaci\xF3n de plagas</a>.</p> </div> </div> </div> </section> <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas veces a la semana debo regar mis plantas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No existe una frecuencia universal. Depende del tipo de planta, la \xE9poca del a\xF1o, la humedad y la luz. La regla de oro es tocar la tierra: riega solo cuando los primeros 3-5 cm est\xE9n secos. En verano puede ser cada 4-7 d\xEDas, en invierno cada 10-14 d\xEDas."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFPor qu\xE9 las hojas de mi planta se ponen amarillas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las hojas amarillas suelen indicar riego excesivo (causa #1), falta de luz, o falta de nutrientes. Si caen hojas amarillas desde abajo, probablemente est\xE1s regando demasiado."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFQu\xE9 planta es buena para principiantes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las mejores plantas para empezar son pothos, sansevieria (lengua de suegra), cactus, zamioculca y cinta. Todas toleran descuidos, poca luz y riegos irregulares."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFLas plantas necesitan sol directo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La mayor\xEDa de plantas de interior prefieren luz indirecta brillante, no sol directo. El sol directo puede quemar las hojas. Excepciones: cactus, suculentas y algunas plantas tropicales s\xED toleran sol directo."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ndo debo trasplantar mi planta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trasplanta cuando veas ra\xEDces saliendo por los agujeros de drenaje, cuando la tierra se seque muy r\xE1pido despu\xE9s de regar, o cuando la planta deje de crecer. La mejor \xE9poca es primavera (marzo-mayo). Usa una maceta solo 2-3 cm m\xE1s grande que la anterior."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFC\xF3mo elimino plagas de forma natural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La mayor\xEDa de plagas se eliminan con jab\xF3n pot\xE1sico diluido en agua (1 cucharada por litro) pulverizado cada 3-4 d\xEDas. Para cochinillas, usa alcohol isoprop\xEDlico con un bastoncillo. El aceite de neem es efectivo contra casi todas las plagas."
        }
      }
    ]
  }
  <\/script> <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VerdeEnCasa",
    "url": "https://verdeencasa.es",
    "description": "Gu\xEDa completa de cuidado de plantas de interior en espa\xF1ol. M\xE1s de 30 art\xEDculos con soluciones pr\xE1cticas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://verdeencasa.es/blog/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  <\/script> `])), renderComponent($$result2, "Hero", Hero, { "title": "\u{1F33F} C\xF3mo cuidar plantas de interior: gu\xEDa completa 2026", "lead": "M\xE1s de 30 gu\xEDas paso a paso para cuidar plantas de interior. Aprende a resolver hojas amarillas, riego correcto, trasplante, plagas y mucho m\xE1s. Todo en espa\xF1ol y gratis." }), maybeRenderHead(), categories.map((cat) => renderTemplate`<a${addAttribute(`/${cat.slug}/`, "href")} style="text-decoration:none;"> <div class="card"> <div class="card-image">${cat.icon}</div> <div class="card-body"> <h3 class="card-title">${cat.name}</h3> <p class="card-excerpt">${cat.desc}</p> </div> </div> </a>`), recentPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}/`, "href")} style="text-decoration:none;"> <div class="card"> <div class="card-image"${addAttribute(`background-image: url('${getArticleImage(post.id)}'); background-size: cover; background-position: center; height: 200px; border-radius: 12px 12px 0 0;`, "style")}></div> <div class="card-body"> <span class="card-tag">${post.data.category}</span> <p class="card-title">${post.data.title}</p> <p class="card-excerpt">${post.data.description}</p> </div> </div> </a>`)) })}`;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/index.astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
