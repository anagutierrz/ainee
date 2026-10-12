# Ainee Pimentel — Demo web

Landing page demo preparada para GitHub y Vercel.

## Estructura
Todos los archivos y recursos están directamente en la raíz del proyecto. No existe carpeta `assets`.

## Imágenes principales
- `wedding-hero.webp` — pareja caminando al atardecer (hero)
- `wedding-reception-wide.webp` — recepción / vista general
- `wedding-table-blue.webp` — mesa con cristalería azul
- `wedding-table-sunset.webp` — detalle de mesa con luz cálida
- `wedding-detail-menu.webp` — detalle de menú y place setting
- `ainee-pimentel.webp` — retrato de Ainee
- `logo-ainee.png` — logo principal
- `contact-reference.png` — referencia visual para Contact
- `typography-reference.png` — referencia tipográfica

## Publicación
Sube todo el contenido de esta carpeta a la raíz del repositorio de GitHub. En Vercel, importa el repositorio como sitio estático, sin build command.


## Dirección tipográfica recibida
Se recibieron tres paquetes de tipografía para orientar la identidad:

- **Stolen Love** — propuesta para titulares editoriales principales.
- **New Icon Font Duo** — serif/condensed como apoyo editorial de alto contraste.
- **Sloop Script Three** — acento caligráfico para usos muy puntuales.

El código ya incluye estos nombres dentro de los `font-family` de reserva y mantiene `Italiana` / `DM Sans` como fallback web para que el demo funcione sin errores.

### Licencias
- El paquete **New Icon Font Duo** incluye un `info.txt` que indica **“Free for Personal Use”**. Antes de usarlo en el sitio comercial final debe adquirirse o confirmarse una licencia comercial/web válida.
- Los paquetes recibidos de **Stolen Love** y **Sloop Script Three** no incluyen en sus ZIP un archivo de licencia visible. Debe confirmarse el permiso de uso web/comercial antes de self-hosting.
- Por esa razón, los archivos binarios de las tipografías no se redistribuyen dentro de este paquete de entrega.

Cuando las licencias web estén confirmadas, basta con añadir los webfonts autorizados y sus reglas `@font-face` en `styles.css`; las variables tipográficas ya están preparadas.

## Mobile header fix
The mobile navigation now stays fully hidden (including the “Plan your wedding” CTA) until the Menu button is opened, preventing the CTA from overlapping the logo or page content.


## October 2026 portfolio update
- Weddings is the primary service; Events is a secondary service.
- Added an Events page without inventing event project details.
- Wedding portfolio is organized into carousel project blocks. Couple names, locations and final photo grouping remain pending confirmation.
- Added static Instagram preview linked to @aineeplanner. Live recent posts and individual post links require an authorized Instagram integration/API.
- Inquiry form adds free-text Budget and makes Partner’s Full Name optional.
- The Claire Duran public contact page was reviewed, but its actual form fields are embedded via HoneyBook and were not available to inspect through the public page source. No unverified fields were copied.
- Inquiry delivery remains unconnected in this demo. A real submission service/endpoint or Aisle Planner integration credentials/instructions are still required before delivery can be verified.

## Mobile menu scroll visibility fix
The mobile hamburger control is now fixed independently to the viewport, including iPhone safe-area support. It remains visible while scrolling and while the full-screen navigation is open.

## Instagram update
The Home page now embeds these three real @aineeplanner posts supplied by the client:
- https://www.instagram.com/p/Dc_uLw1lBR4/
- https://www.instagram.com/p/Db4JOHOlKYL/
- https://www.instagram.com/p/DXMlw2Jjbvr/
Instagram serves the post content directly in the browser. If Instagram blocks third-party embeds, the direct "View post" links remain available.
