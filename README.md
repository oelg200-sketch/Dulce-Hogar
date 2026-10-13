# Dulce Hogar — Repostería, Postres y Bebidas

Sitio web de repostería artesanal en HTML, CSS y JavaScript puro. Sin frameworks, sin npm, sin compilación.

## Como usar

1. Abre la carpeta `reposteria/` en Visual Studio Code.
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
3. La página se abrira en tu navegador.

## Estructura

```
reposteria/
├── index.html        ← Estructura de la página
├── css/
│   └── styles.css    ← Todos los estilos (colores cálido: melocotón, rosa, caramelo)
├── js/
│   └── main.js       ← Datos de productos, opiniones e interactividad
├── img/
│   └── favicon.svg   ← Logo que aparece en la pestaña del navegador
└── README.md
```

## Secciones del sitio

1. **Inicio** — Imagen de pastel de chocolate con mensaje y estadísticas
2. **Menú** — 9 productos en 3 categorías: Postres, Repostería y Bebidas, con filtro
3. **Nosotros** — Historia de la marca con imagen de pastelera y lista de características
4. **Opiniones** — 3 testimonios de clientes con estrellas y avatares
5. **Contacto** — Datos de contacto, horario, redes sociales y formulario de pedido
6. **Footer** — Navegación y redes sociales

## Como editar

### Información de contacto y redes sociales

Abre `js/main.js` y busca `CONFIG` al inicio:

```javascript
const CONFIG = {
  email: 'pedidos@dulcehogar.com',
  phone: '+503 7700 0000',
  address: 'Col. Escalón, San Salvador, El Salvador',
  hours: 'Lun-Sáb: 8:00 AM - 7:00 PM',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
    whatsapp: 'https://wa.me/50377000000',
  },
};
```

### Productos

En el mismo archivo busca `PRODUCTS`. Cada producto tiene:

```javascript
{
  name: 'Pastel de Chocolate Triple',
  description: 'Descripción del producto...',
  price: '$18.50',
  image: 'https://...',
  tag: 'Bestseller',        // opcional
  tagType: 'bestseller',    // 'bestseller' o 'new' (opcional)
  category: 'Postres',      // Postres, Repostería o Bebidas
}
```

### Opiniones

Busca `TESTIMONIALS` en `js/main.js`.

### Colores

Abre `css/styles.css` y busca `:root` al inicio. Los colores están como variables:

```css
--peach-500: #F07A4D;
--rose-400: #E87B8B;
--caramel-500: #B87D48;
```

### Logo de la pestaña (favicon)

El logo está en `img/favicon.svg`. Es un cupcake dibujado en SVG.

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube el contenido de la carpeta `reposteria/`.
3. Si activas **GitHub Pages** en Settings > Pages, la página se publicara automaticamente.

No necesitas instalar nada ni ejecutar comandos. Solo abrir `index.html` con Live Server.
