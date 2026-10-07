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
