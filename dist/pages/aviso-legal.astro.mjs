import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_G3S5vQGt.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Aviso legal \u2014 VerdeEnCasa", "description": "Aviso legal de VerdeEnCasa." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding:3rem 0;"> <h1 style="font-size:2rem; font-weight:800; color:#111827; margin-bottom:1.5rem;">Aviso legal</h1> <div class="article-content"> <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p> <h2>Titular del sitio</h2> <p><strong>Nombre del sitio:</strong> VerdeEnCasa<br> <strong>Dominio:</strong> verdeencasa.es</p> <h2>Objeto</h2> <p>Este sitio web tiene como objetivo proporcionar información y guías sobre el cuidado de plantas de interior. La información publicada tiene carácter orientativo y no sustituye el asesoramiento de un experto en horticultura.</p> <h2>Propiedad intelectual</h2> <p>Los contenidos de este sitio (textos, imágenes, diseño) son propiedad de VerdeEnCasa y están protegidos por la legislación española e internacional sobre propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.</p> <h2>Limitación de responsabilidad</h2> <p>VerdeEnCasa no se hace responsable de los daños derivados del uso de la información publicada en este sitio.</p> </div> </div> ` })}`;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/aviso-legal/index.astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/aviso-legal/index.astro";
const $$url = "/aviso-legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
