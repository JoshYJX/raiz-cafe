# Actividad 1 — Sitio web de Raíz (Café de origen guatemalteco)
### Framework: React

## 1. Selección del framework

Elegí **React** porque el requerimiento es un sitio de 4 páginas con catálogo
filtrable, una ruta con parámetro (`/productos/:id`) y un formulario con
validación — nada que exija la rigidez ni el TypeScript obligatorio de
Angular. Además, React es lo más solicitado en el mercado laboral, así que
practicar con él tiene valor más allá de esta entrega. Descarté **Angular**
porque exige TypeScript y trae más conceptos (inyección de dependencias,
decoradores) de los que este proyecto necesita. Descarté **Vue** porque,
aunque es más sencillo para empezar, el objetivo era practicar la
herramienta más demandada del mercado, y React con JSX es perfectamente
accesible viniendo de HTML/CSS/JS básico.

## 2. Software utilizado

| Software | Para qué | Dónde |
|---|---|---|
| Node.js (LTS) | Ejecuta las herramientas de compilación (Vite) e incluye npm | nodejs.org |
| npm | Instala las dependencias del proyecto (`react`, `react-router-dom`, `vite`) | incluido con Node.js |
| Vite | Servidor de desarrollo y empaquetador de producción | se instala vía npm |
| Editor de código (StackBlitz) | Escribir y depurar el código | stackblitz.com |
| Navegador moderno | Ejecutar y probar el sitio | Chrome / Edge / Firefox |

Para correr el proyecto localmente: `npm install` y luego `npm run dev`.
En StackBlitz, basta con arrastrar la carpeta o importar desde GitHub — las
dependencias se instalan automáticamente en la nube.

## 3. Requerimientos del sitio

### Requerimientos funcionales

| ID | Requerimiento | Cómo se comprueba |
|---|---|---|
| RF-01 | El sitio debe tener 4 páginas navegables: Inicio, Productos, Nosotros y Contacto | Clic en cada enlace del menú y llegar a la página correcta |
| RF-02 | La navegación no debe recargar la página completa | Al cambiar de sección no aparece la barra de carga del navegador |
| RF-03 | El menú debe resaltar la página activa | El enlace activo se ve en color terracota con subrayado |
| RF-04 | La página Productos debe listar todo el café desde una fuente de datos | Agregar un producto en `datos.js` hace aparecer una tarjeta nueva sin tocar el JSX |
| RF-05 | El usuario debe poder filtrar los productos por categoría | Elegir una categoría en los botones de filtro reduce las tarjetas mostradas |
| RF-06 | Al hacer clic en un producto se ve su detalle en su propia URL | La URL cambia a `/productos/3` y se puede compartir |
| RF-07 | Si se pide un producto que no existe, se muestra un mensaje, no un error | Entrar a `/productos/999` muestra "Producto no encontrado" |
| RF-08 | El formulario de contacto debe validar los datos antes de enviarlos | No deja enviar con el nombre vacío, el mensaje muy corto o un correo mal escrito |
| RF-09 | Al enviar el formulario se muestra una confirmación con los datos recibidos | Aparece un mensaje de éxito con el nombre de quien escribió |
| RF-10 | El encabezado y el pie deben aparecer en todas las páginas | Se ven igual en las 5 rutas, sin duplicar código (viven en `App.jsx`) |
| RF-11 *(propio)* | El sitio debe mostrar el año actual en el pie de página automáticamente | El footer nunca queda desactualizado, se calcula con `new Date()` |
| RF-12 *(propio)* | Los productos sin notas de cata no deben mostrar una sección vacía | Al ver "Prensa francesa" o "Taza de barro" no aparece el bloque "Notas de cata" |

### Requerimientos no funcionales

| ID | Requerimiento |
|---|---|
| RNF-01 | El sitio debe adaptarse a pantallas de teléfono, tableta y computadora |
| RNF-02 | Los estilos deben estar centralizados y usar variables CSS para los colores |
| RNF-03 | Cada componente debe estar en su propio archivo y tener una sola responsabilidad |
| RNF-04 | Los datos de los productos deben estar separados de los componentes que los muestran |
| RNF-05 | Las imágenes y botones deben tener texto accesible (`alt`, `aria-label`) |

## 4. Estructura del sitio

### Mapa del sitio

| Página | Ruta | Contenido |
|---|---|---|
| Inicio | `/` | Portada, 3 beneficios, 2 productos destacados |
| Productos | `/productos` | Catálogo con filtro por categoría |
| Detalle | `/productos/:id` | Un producto con descripción, precio y notas de cata |
| Nosotros | `/nosotros` | Historia y equipo |
| Contacto | `/contacto` | Formulario con validación |

### Árbol de componentes

```
App (contenedor + rutas)
├── NavBar               (fijo en todas las páginas)
├── <Routes>
│   ├── Inicio
│   │   ├── Beneficio ×3
│   │   └── TarjetaProducto ×2 (destacados)
│   ├── Productos
│   │   └── TarjetaProducto ×N (filtrados por categoría)
│   ├── Detalle           (ruta con parámetro :id)
│   ├── Nosotros
│   │   └── MiembroEquipo ×3
│   └── Contacto           (formulario propio, con estado)
└── SiteFooter            (fijo en todas las páginas)
```

`TarjetaProducto` se escribe una sola vez y se reutiliza en Inicio (destacados)
y en Productos (catálogo completo) — la razón de ser de los componentes.

### Carpetas del proyecto

```
src/
├─ main.jsx
├─ App.jsx
├─ styles.css
├─ datos.js
├─ components/
│  ├─ NavBar.jsx
│  ├─ SiteFooter.jsx
│  ├─ TarjetaProducto.jsx
│  ├─ Beneficio.jsx
│  └─ MiembroEquipo.jsx
└─ pages/
   ├─ Inicio.jsx
   ├─ Productos.jsx
   ├─ Detalle.jsx
   ├─ Nosotros.jsx
   └─ Contacto.jsx
```

## Verificación antes de entregar

- [x] Las 4 páginas + detalle navegan sin recargar la página (SPA con React Router)
- [x] El enlace activo del menú se resalta
- [x] El catálogo se genera desde `datos.js`, no está escrito a mano
- [x] El filtro por categoría funciona
- [x] `/productos/3` muestra el detalle correcto; `/productos/999` muestra "no encontrado"
- [x] El formulario valida nombre, correo y mensaje antes de enviar
- [x] Al enviar, se muestra una confirmación personalizada
- [x] NavBar y Footer están escritos una sola vez y se reutilizan
- [x] El sitio es responsivo (probado en 375px, 768px y 1200px de ancho)
- [x] `npm run build` compila sin errores
