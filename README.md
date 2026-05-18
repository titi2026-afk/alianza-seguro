# Alianza Seguro

Sitio web institucional para **Alianza Seguro** — asesoría profesional en seguros de salud, Medicare, vida, dental y suplementarios para la comunidad hispana en EE.UU.

**Asesora principal:** Ana María Martínez · Licensed Health Insurance Advisor
**Cobertura:** Georgia · Florida · Texas · Alabama · Tennessee · Carolina del Norte · Carolina del Sur · Indiana · Missouri · Utah
**Contacto:** info@alianzaseguro.com · (678) 335-1307 · Woodstock, GA 30188

## Estructura

```
website/
├── index.html                # Homepage
├── servicios.html
├── sobre-ana.html
├── estados.html
├── preguntas-frecuentes.html
├── contacto.html
├── politica-privacidad.html
├── terminos-consentimiento.html
├── blog/
│   ├── index.html
│   ├── que-pasa-si-no-tengo-seguro-medico.html
│   ├── seguro-medico-para-embarazadas.html
│   └── condiciones-preexistentes-cancer.html
├── assets/
│   ├── styles.css            # Estilos compartidos
│   ├── shared.js             # JS compartido (menú móvil, animaciones)
│   ├── logo.png
│   ├── us-map.svg            # Mapa de USA con 10 estados resaltados
│   ├── ana-*.png             # Fotos de Ana María
│   ├── services/             # Fotos de las cards de servicios
│   └── carriers/             # Logos de aseguradoras (pendiente)
├── sitemap.xml
├── robots.txt
└── manifest.json
```

## Tecnologías

- HTML5 semántico
- Tailwind CSS (vía CDN)
- Vanilla JavaScript
- Schema.org structured data (InsuranceAgency, Person, FAQPage, Article, BreadcrumbList)
- Open Graph + Twitter Cards
- Hreflang `es-US`

## SEO

- Titles 37-66 chars · Meta descriptions 132-156 chars
- Canonical URLs en todas las páginas
- Sitemap.xml + robots.txt
- Schema.org en homepage, sobre-ana, FAQ, blog
- Imágenes con `alt` en español + `loading="lazy"`

## Mobile-friendly

- Viewport meta + `text-size-adjust`
- Inputs >= 16px en mobile para evitar zoom iOS
- Tap targets >= 44px
- Focus indicators accesibles
- `prefers-reduced-motion` respetado

## Cumplimiento

- Disclaimer de agencia independiente (no parte de CMS ni del gobierno)
- Aviso de eligibility / no garantía de primas
- TCPA-compliant en formulario de contacto
- Política de Privacidad + Términos & Consentimiento

## Despliegue

Estático, sin build. Puede servirse desde GitHub Pages, Netlify, Vercel o cualquier servidor web.

---
© Alianza Seguro™. Todos los derechos reservados.
