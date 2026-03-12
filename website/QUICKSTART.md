# ⚡ Inicio Rápido - Maderas Bolivianas Website

## 🚀 3 Pasos para Empezar

### Paso 1️⃣ - Añade tus Imágenes (IMPORTANTE)

1. Descarga o copia las 3 fotos de madera
2. Colócalas en la carpeta `/images/` con estos nombres exactos:
   - `madera1.jpg`
   - `madera2.jpg`
   - `madera3.jpg`

### Paso 2️⃣ - Abre el Website Localmente

**Opción A - Doble clic (La más fácil):**
→ Haz doble clic en el archivo `index.html`

**Opción B - Terminal (Recomendado):**
```bash
cd /home/jerry/website
bash start-server.sh
```

El navegador se abrirá automáticamente en `http://localhost:8000`

**Opción C - Con Node.js:**
```bash
cd /home/jerry/website
npm install
npm start
```

### Paso 3️⃣ - Personaliza tu Contenido

Edita estos archivos según tus necesidades:

#### `index.html` - El contenido
- Línea ~22: Cambiar nombre de empresa
- Línea ~27: Cambiar teléfono y email
- Línea ~370: Actualizar dirección y horarios
- Toda la página está en español - ¡edita como necesites!

#### `style.css` - Los colores
- Línea 5-12: Variables de color
- Cambia `--primary-color`, etc. si quieres otros colores

#### `script.js` - La interactividad
- Cambios menores si es necesario
- Generalmente no necesita editar

## 🎨 Cambios Recomendados Rápidos

### 1. Cambiar Colores Principales

En `style.css` (línea ~5):
```css
:root {
    --primary-color: #8B4513;        /* Marrón actual */
    --primary-light: #D2691E;        /* Marrón claro */
    --secondary-color: #2C5F2D;      /* Verde actual */
}
```

**Paletas alternativas:**
- Más verde: `#1B5E20` (oscuro) y `#4CAF50` (claro)
- Más rojo: `#8B0000` (oscuro) y `#CD5C5C` (claro)
- Más gris: `#5A5A5A` (oscuro) y `#BDBDBD` (claro)

### 2. Cambiar Textos

En `index.html` busca:
- "Maderas Bolivianas" → Tu nombre de empresa
- "+591 3-XXXXXXX" → Tu teléfono real
- "ventas@maderasbolivianas.com" → Tu email real
- "Riberalta, Bolivia" → Tu ubicación

### 3. Cambiar Productos

En `index.html` (~línea 180-200):
- Puedes editar los nombres de productos
- Cambiar descripciones
- Agregar/quitar items (copia el patrón de un `<div class="producto-card">`)

## 📁 Estructura de Archivos

```
/home/jerry/website/
├── index.html              ← EDITA AQUÍ: Contenido principal
├── style.css               ← EDITA AQUÍ: Colores y estilos
├── script.js               ← Script (normalmente no necesita)
├── images/                 ← CARPETA: Coloca tus imágenes aquí
│   ├── madera1.jpg         ← Tu primera foto
│   ├── madera2.jpg         ← Tu segunda foto
│   └── madera3.jpg         ← Tu tercera foto
├── personalizacion.css     ← Estilos adicionales (opcional)
├── package.json            ← Para Node.js (opcional)
├── start-server.sh         ← Script para iniciar servidor
├── README.md               ← Documentación completa
├── GUIA-SEO.md            ← Guía SEO y publicación online
├── .gitignore             ← Para Git (opcional)
└── QUICKSTART.md          ← Este archivo
```

## ✅ Checklist Mínimo

- [ ] Copié las 3 fotos a `/images/`
- [ ] Edité el nombre de empresa en `index.html`
- [ ] Edité teléfono y email reales
- [ ] Probé abriendo `index.html` en navegador
- [ ] Se ve bien en desktop y móvil

## 🔗 Próximos Pasos (Opcional)

1. **Ver en tu teléfono:**
   - En la misma red WiFi
   - Averigua tu IP local: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
   - Abre `http://tu-ip:8000` en el móvil

2. **Publicar online:**
   - Lee `GUIA-SEO.md` para instrucciones detalladas
   - Usa Netlify (gratuito): [netlify.com](https://netlify.com)
   - Compra dominio: [godaddy.com](https://godaddy.com)

3. **Agregar más contenido:**
   - Más imágenes en galería
   - Testimonios de clientes
   - Precios y cotizaciones
   - FAQs

## 🆘 Problemas Comunes

**"Las imágenes no aparecen"**
→ Verifica que estén en `/images/` y con nombres exactos

**"El sitio se ve feo en móvil"**
→ Es normal a veces - abre en navegador móvil
→ El CSS ya es responsive

**"El servidor no inicia"**
→ Prueba con: `python3 -m http.server 8000`
→ O abre `index.html` directamente con doble clic

**"¿Cómo cambio el logo?"**
→ En `index.html` línea ~19, cambia el ícono Font Awesome
→ Busca en: [fontawesome.com/icons](https://fontawesome.com/icons)

---

## 🎓 Recursos de Aprendizaje

Si quieres aprender a personalizar más:
- **HTML**: [w3schools.com/html](https://w3schools.com/html)
- **CSS**: [w3schools.com/css](https://w3schools.com/css)
- **Colores**: [colorhexa.com](https://www.colorhexa.com)
- **Iconos**: [fontawesome.com/icons](https://fontawesome.com/icons)

---

## 💡 Tips Profesionales

✓ Mantén las líneas de código limpias
✓ Usa nombres descriptivos para archivos
✓ Haz backup periódicamente
✓ Testea en múltiples navegadores
✓ Comprime imágenes para velocidad
✓ Usa HTTPS cuando publiques

---

**¡Tu website está listo! Ahora solo personalízalo y disfruta.** 🎉

Si tienes dudas, consulta `README.md` para documentación completa.
