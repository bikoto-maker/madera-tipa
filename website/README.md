# Tipa - Madera de Bolivia Website

## ¿Cómo usar este website?

### 📁 Estructura del Proyecto

```
/home/jerry/website/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript para interactividad
├── images/             # Carpeta para imágenes
│   ├── madera1.jpg     # Primera foto de madera
│   ├── madera2.jpg     # Segunda foto de madera
│   ├── madera3.jpg     # Tercera foto de madera
└── README.md           # Este archivo
```

### 📸 Imágenes del Website

El website utiliza imágenes hospedadas en ibb.co (servicio de hosting de imágenes):
- Galería: 3 fotos de madera Tipa
- Las imágenes se cargan desde URLs externas directas

### 🎨 Colores Personalizables

Los colores principales están definidos en `style.css` en la sección `:root`:

- **Color Principal:** `#2D7A3E` (Verde profesional)
- **Color Oscuro:** `#1B5E2E` (Verde oscuro)
- **Color Claro:** `#3BA550` (Verde claro)
- **Color Acento:** `#D4944C` (Dorado/bronce)

Si quieres cambiar los colores, modifica estos valores en `style.css`.

### 📧 Configurar Contacto

1. Abre `index.html`
2. Busca la sección "Contacto"
3. Reemplaza los números de teléfono y emails con los reales:
   - Teléfono: `+591 3-XXXXXXX` y `+591 2-XXXXXXX`
   - Email: `ventas@maderasbolivianas.com` y `info@maderasbolivianas.com`

### 🚀 Características del Website

- ✅ **Responsive Design** - Se adapta a todos los dispositivos (móvil, tablet, desktop)
- ✅ **Menú Hamburguesa** - Menú mobile automático
- ✅ **Galería de Imágenes** - Efecto hover en imágenes
- **Catálogo de Productos:**
  - Trozas Tipa
  - Tipa Aserrada
  - Tipa para Muebles
  - Maderas Sostenibles
- ✅ **Información Clara:**
  - Enfoque en exportaciones FOB
  - Estadísticas de empresa
  - Información de contacto
  - WhatsApp directo

### 💻 Cómo Abrir el Website

#### Opción 1: Doble clic
- Haz doble clic en `index.html` para abrirlo en tu navegador predeterminado

#### Opción 2: Con servidor local (Recomendado)
```bash
# Si tienes Python 3 instalado:
cd /home/jerry/website
python -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

#### Opción 3: Con Node.js
```bash
# Si tienes Node.js instalado, puedes usar http-server:
npx http-server
```

### 🔧 Ediciones Adicionales

**Para cambiar el nombre de la empresa:**
1. Busca "Maderas Bolivianas" en `index.html`
2. Reemplaza con tu nombre de empresa
3. Busca en `style.css` y `script.js` también si es necesario

**Para agregar más secciones:**
- Copia la estructura de una sección existente
- Ajusta el HTML y CSS según necesites
- Los colores están definidos como variables, así que se aplicarán automáticamente

**Para personalizar el contenido:**
- Todos los textos están en `index.html` en español
- Puedes editarlos directamente sin afectar el diseño

### 📱 Secciones Principales

1. **Navegación** - Menú sticky con links internos
2. **Hero** - Banner principal con CTA
3. **Galería** - Muestra tus 3 fotos de madera
4. **Productos** - 4 categorías de productos
5. **Características** - Ventajas del negocio
6. **Nosotros** - Información de la empresa + estadísticas
7. **Contacto** - Formulario + información de contacto
8. **Footer** - Enlaces rápidos + redes sociales

### 🎯 Tips para Mejorar

- Añade tus logos en la navegación (reemplaza el ícono de árbol)
- Sube el website a un hosting web para compartir online
- Configura Google Analytics para trackear visitantes
- Añade más imágenes de producto en la galería
- Considera agregar testimonios de clientes
- Implementa un sistema de carrito si vendes online

### 📞 Soporte

Para cambios en el diseño, colores o funcionalidad, puedes:
- Modificar directamente los archivos CSS/HTML/JS
- Usar un editor de código como VS Code
- Buscar tutoriales de HTML/CSS en línea para aprender más

---

## Estructura HTML General

El sitio está construido con:
- **HTML5** - Semántica y estructura
- **CSS3** - Styling moderno con gradientes y flexbox
- **JavaScript Vanilla** - Interactividad sin dependencias
- **Font Awesome** - Iconos profesionales
- **Google Fonts** - Tipografías modernas

¡Disfruta tu nuevo website de Tipa - Madera de Bolivia!
