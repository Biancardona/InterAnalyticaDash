# Interactive Analytics Dashboard

## Introduccion
Este dashboard analítico interactivo proporciona una visión integral del rendimiento de diversas campañas de marketing, combinando datos de Analytics. 
Utilizando React, el dashboard ofrece una interfaz de usuario intuitiva y personalizable que permite a los usuarios explorar los datos de manera visual y extraer insights valiosos.

## Características Clave
- **Visualizaciones interactivas:** Gráficos de barras, líneas y pastel para visualizar métricas clave como impresiones, clics, conversiones, vistas de página, sesiones y demografía.
- **Diseño responsivo:** El dashboard se adapta a diferentes tamaños de pantalla, garantizando una experiencia de usuario óptima en dispositivos de escritorio y móviles.
- **Personalización:** Los usuarios pueden filtrar y segmentar los datos para obtener insights más específicos.
- **Fuente de Datos:** 
  - Google Analytics: Datos simulados proporcionados en un archivo JSON.

## Tecnologías Utilizadas
- **React:** Framework de JavaScript para construir interfaces de usuario.
- **Biblioteca de gráficos:** Chart.js, Recharts, para crear visualizaciones.
- **Biblioteca de estilos:** Tailwind CSS, para diseñar la interfaz de usuario.
- **Axios:** Para realizar las solicitudes a las APIs.
- **Gestor de estado:** Context para manejar el estado de la aplicación.


## Configuración
1. Clonar el repositorio:
   
### `git clone https://[tu_repositorio].git`

2. Instalar dependencias:

### `npm install`

3. Configurar credenciales de API:

- Crear una cuenta de desarrollador en Google Ads API y obtener las credenciales OAuth2.
- Configurar las credenciales en el archivo de configuración de la aplicación.

4. Iniciar el servidor de desarrollo:

### `npm start`

## Estructura del Proyecto
analytica/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GoogleAdsData.jsx
│   │   ├── Header.jsx
│   │   └── MetricsDisplay.jsx
│   │   └── Summary.jsx
│   ├── config/
│   │   └── OAuth.jsx
│   ├── context/
│   │   ├── DataLoaderProvider.jsx
│   ├── hooks/
│   │   └── UseDataLoader.jsx
│   ├── layout/
│   │   └── Layout.jsx
│   ├── pages/
│   │   └── Home.jsx
│   └── App.css
│   └── App.jsx
│   └── App.test.js
│   └── index.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md

## Consideraciones de Diseño
- **Esquema de color:** Se utilizó una paleta de colores pasteles para crear conrastes a la combinacio y lograr una estetica agradable a la vista.
- **Tipografía:** Se seleccionaron fuentes basicas para mejorar la legibilidad y la jerarquía visual.
- **Diseño responsivo:** Se utilizó Tailwind y para las graficas Chart.js, y Recharts, para garantizar que el dashboard se adapte a diferentes tamaños de pantalla.

