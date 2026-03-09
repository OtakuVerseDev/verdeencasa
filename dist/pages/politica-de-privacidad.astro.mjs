import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ivnVcXUC.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_G3S5vQGt.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pol\xEDtica de privacidad \u2014 VerdeEnCasa", "description": "Pol\xEDtica de privacidad de VerdeEnCasa. Informaci\xF3n sobre el tratamiento de datos personales." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding:3rem 0;"> <h1 style="font-size:2rem; font-weight:800; color:#111827; margin-bottom:1.5rem;">Política de privacidad</h1> <div class="article-content"> <p><strong>Última actualización:</strong> febrero de 2026</p> <h2>Responsable del tratamiento</h2> <p>VerdeEnCasa (en adelante, "el sitio") es responsable del tratamiento de los datos personales que pueda recabar a través de este sitio web.</p> <h2>Datos que recopilamos</h2> <p>Este sitio puede recopilar datos de navegación a través de herramientas de análisis (Google Analytics) con el fin de mejorar la experiencia del usuario. Estos datos son anónimos y agregados.</p> <h2>Cookies</h2> <p>Utilizamos cookies propias y de terceros (Google Analytics, Google AdSense) para analizar el tráfico y mostrar publicidad relevante. Puedes desactivar las cookies en la configuración de tu navegador.</p> <h2>Publicidad</h2> <p>Este sitio utiliza Google AdSense para mostrar anuncios. Google puede usar cookies para mostrar anuncios basados en visitas anteriores. Puedes optar por no recibir publicidad personalizada en <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Configuración de anuncios de Google</a>.</p> <h2>Afiliados</h2> <p>VerdeEnCasa participa en el Programa de Afiliados de Amazon EU. Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables.</p> <h2>Derechos del usuario</h2> <p>Tienes derecho a acceder, rectificar y suprimir tus datos. Para ejercer estos derechos, puedes contactarnos a través de nuestra página de contacto.</p> </div> </div> ` })}`;
}, "C:/Users/danie/Documents/AI/verdeencasa/src/pages/politica-de-privacidad/index.astro", void 0);

const $$file = "C:/Users/danie/Documents/AI/verdeencasa/src/pages/politica-de-privacidad/index.astro";
const $$url = "/politica-de-privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
