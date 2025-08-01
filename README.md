# E-TechStore: Tu Tienda de Tecnología

Este es un proyecto de e-commerce Full-Stack desarrollado con React y Firebase. La aplicación permite a los usuarios explorar un catálogo de productos tecnológicos, agregarlos al carrito y simular un proceso de compra.

## Características Principales

- **Catálogo de Productos:** Muestra una lista de productos tecnológicos con imágenes, descripciones y precios.
- **Detalle de Producto:** Permite ver información detallada de cada producto.
- **Carrito de Compras:** Funcionalidad completa para agregar, eliminar y modificar la cantidad de productos en el carrito.
- **Navegación por Categorías:** Filtra productos por categorías para una búsqueda más sencilla.
- **Checkout Simulado:** Proceso de compra simulado con formulario de datos del cliente.
- **Integración con Firebase:** Utiliza Firestore como base de datos para gestionar productos y órdenes de compra.

## Tecnologías Utilizadas

### Frontend

- **Librería:** [React](https://reactjs.org/)
- **Enrutamiento:** [React Router](https://reactrouter.com/)
- **Estilos:** [Bootstrap](https://getbootstrap.com/) y CSS personalizado
- **Componentes:** [React-Bootstrap](https://react-bootstrap.github.io/)
- **Notificaciones:** [Notiflix](https://notiflix.github.io/)

### Backend y Base de Datos

- **Servicios de Backend:** [Firebase](https://firebase.google.com/)
- **Base de Datos:** [Firestore](https://firebase.google.com/docs/firestore)

## Prerrequisitos

- [Node.js](https://nodejs.org/en/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una cuenta de [Firebase](https://firebase.google.com/) con un proyecto configurado.

## Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/EmanuelRigo/E-TechStore.git
    cd E-TechStore
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

## Configuración

1.  **Variables de Entorno de Firebase:**
    - Crea un archivo `.env` en la raíz del proyecto.
    - Añade las credenciales de tu proyecto de Firebase. Puedes encontrarlas en la configuración de tu proyecto en la consola de Firebase (`Configuración del proyecto > Tus apps > Configuración de Firebase`).
      ```env
      REACT_APP_FIREBASE_API_KEY="tu_api_key"
      REACT_APP_FIREBASE_AUTH_DOMAIN="tu_auth_domain"
      REACT_APP_FIREBASE_PROJECT_ID="tu_project_id"
      REACT_APP_FIREBASE_STORAGE_BUCKET="tu_storage_bucket"
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID="tu_messaging_sender_id"
      REACT_APP_FIREBASE_APP_ID="tu_app_id"
      ```

## Cómo Ejecutar la Aplicación

1.  **Iniciar la aplicación Frontend:**
    Desde el directorio raíz del proyecto:

    ```bash
    npm start
    ```

    La aplicación React se ejecutará en `http://localhost:3000`.

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

## Estructura del Proyecto

```
.
├── public/             # Archivos estáticos y HTML principal
├── src/                # Código fuente de la aplicación React
│   ├── components/     # Componentes reutilizables de React
│   ├── context/        # Contexto de React para el estado global
│   ├── stylesheets/    # Hojas de estilo CSS
│   ├── App.js          # Componente principal de la aplicación
│   ├── firebase.js     # Configuración de la conexión con Firebase
│   └── index.js        # Punto de entrada de la aplicación
├── .gitignore
├── package.json
└── README.md
```

- **`/public`**: Contiene el archivo `index.html` principal y otros recursos estáticos como imágenes y manifiestos.
- **`/src`**: Contiene toda la lógica de la aplicación React, incluyendo componentes, contexto, estilos y la configuración de Firebase.
