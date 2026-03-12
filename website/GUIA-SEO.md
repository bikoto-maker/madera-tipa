# Guía de SEO y Publicación Online

## 🔍 SEO - Optimización para Buscadores

### 1. Meta Tags Importantes

Abre `index.html` y edita la sección `<head>`:

```html
<meta name="description" content="Maderas nobles de Bolivia - Exportación de madera premium, trozas y madera aserrada de alta calidad con certificación internacional.">
<meta name="keywords" content="madera Bolivia, madera noble, exportación madera, trozas, madera aserrada, maderas tropicales">
<meta name="author" content="Maderas Bolivianas">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Maderas Bolivianas - Madera Premium">
<meta property="og:description" content="Distribuidor de maderas nobles de Bolivia">
<meta property="og:image" content="images/madera1.jpg">
<meta property="og:url" content="tu-dominio.com">
<link rel="canonical" href="tu-dominio.com">
```

### 2. Estructura de Sitemap

Crea un archivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-dominio.com/</loc>
    <lastmod>2026-03-11</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/#galeria</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/#productos</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/#contacto</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 3. Archivo robots.txt

Crea un archivo `robots.txt` en la raíz:

```
User-agent: *
Allow: /
Sitemap: https://tu-dominio.com/sitemap.xml
```

### 4. Palabras Clave Recomendadas

- Madera Bolivia
- Madera noble tropical
- Exportación madera boliviana
- Trozas de madera
- Madera aserrada premium
- Maderas amazónicas
- Madera para muebles
- Distribuidor madera Bolivia

## 🌐 Publicar Online

### Opción 1: Hosting Gratis (Netlify)

1. Crea cuenta en [netlify.com](https://www.netlify.com)
2. Arrastra tu carpeta `/website` al área de upload
3. Tu sitio estará online en segundos
4. Obtén un dominio gratuito (tiendonivelador.netlify.app)

**Ventajas:** Fácil, gratis, automático

### Opción 2: Hosting con Dominio Personalizado (Recomendado)

#### Providers recomendados:
- **Hostinger** - Barato, buen soporte
- **Bluehost** - Wordpress-friendly
- **GoDaddy** - Dominios + hosting
- **SiteGround** - Premium pero confiable

**Pasos:**
1. Compra un dominio (ej: maderasbolivianas.com)
2. Contrata un plan de hosting
3. Sube los archivos via FTP/SFTP
4. Configura el dominio con los DNS del hosting

### Opción 3: Usar GitHub Pages (Gratis)

1. Crea cuenta en [github.com](https://www.github.com)
2. Crea un repositorio llamado `tu-usuario.github.io`
3. Sube los archivos del website
4. Tu sitio estará en `https://tu-usuario.github.io`

## 📱 Optimizaciones Adicionales

### Comprimir Imágenes

Las imágenes no deben ser muy grandes. Usa:
- **TinyPNG** (tinypng.com) - Comprime JPG/PNG
- **ImageOptim** (si usas Mac)
- **FileOptimizer** (si usas Windows)

Tamaño recomendado por imagen: 300-500KB máximo

### Velocidad de Carga

1. Minify CSS y JS (puedes usar [minifier.org](https://www.minifier.org))
2. Habilita caché en el servidor
3. Usa CDN para imágenes (Cloudinary, imgix)
4. Testea velocidad en [PageSpeed Insights](https://pagespeed.web.dev)

### Analytics

Añade Google Analytics para trackear visitantes:

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una propiedad
3. Copia el código de seguimiento
4. Pégalo antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXXXX');
</script>
```

## 📧 Formulario de Contacto Funcional

### Opción 1: Email Simple (sin backend)

Usa Formspree.io:
1. Ve a [formspree.io](https://formspree.io)
2. Registrate
3. Crea un nuevo formulario
4. Reemplaza la acción del formulario en HTML:

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" class="contacto-form">
    <!-- ...resto del formulario -->
</form>
```

### Opción 2: Con EmailJS (JavaScript)

Instala EmailJS y configúralo en `script.js` para enviar emails directamente.

## 🎯 Checklist de Publicación

- [ ] Imágenes comprimidas y en la carpeta `/images`
- [ ] Meta tags actualizados
- [ ] Información de contacto real (teléfono, email)
- [ ] Dominio registrado
- [ ] Hosting contratado
- [ ] Archivos subidos via FTP
- [ ] DNS configurados
- [ ] Sitio accesible en navegador
- [ ] Formulario de contacto funcional
- [ ] Google Analytics instalado
- [ ] SEO meta tags en place
- [ ] Sitemap.xml creado
- [ ] Robots.txt creado
- [ ] HTTPS habilitado

## 📊 Mantenimiento

### Mensual:
- Revisa analíticas
- Responde consultas de contacto
- Actualiza contenido si es necesario

### Trimestral:
- Backup del sitio
- Chequea links rotos
- Actualiza imágenes

### Anualmente:
- Renueva dominio
- Renueva hosting
- Auditoría de SEO

## 🆘 Troubleshooting

**Las imágenes no cargan:**
- Verifica que estén en `/images/`
- Chequea la ruta: `images/madera1.jpg`

**El sitio se ve mal en móvil:**
- Abre DevTools (F12) → Toggle device toolbar
- Ajusta viewport en CSS si es necesario

**El formulario no envía:**
- Usa Formspree o EmailJS
- Prueba en consola (F12)

**El sitio es lento:**
- Comprime imágenes más
- Elimina efectos CSS innecesarios
- Usa un CDN

---

**¡Éxito con tu website de Maderas Bolivianas!**

Para más ayuda, consulta la documentación de:
- CSS: [MDN Web Docs](https://developer.mozilla.org)
- HTML: [W3Schools](https://www.w3schools.com)
- Hosting: [Documentación del proveedor]
