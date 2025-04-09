📋 CRUD - Aplicación Full Stack con .NET 9 y React
CRUD es una aplicación web sencilla que implementa las operaciones básicas de Crear, Leer, Actualizar y Eliminar usuarios. Cada usuario tiene los campos: ID, nombre, email, contraseña y rol.

Este proyecto utiliza un backend en .NET 9 y un frontend en React con Vite. Para el diseño visual se emplea Bootstrap, y los datos se almacenan en una base de datos local en PostgreSQL.

🚀 Funcionalidades
✅ Crear nuevos usuarios

🔍 Ver listado de usuarios

✏️ Editar usuarios existentes

🗑️ Eliminar usuarios

🔐 Se implementará autenticación (login) en una próxima versión

🧰 Tecnologías Usadas
.NET 9

React

Vite

Bootstrap

PostgreSQL

Yarn

⚙️ Instalación
1. Clona el repositorio
bash
Copiar
Editar
git clone https://github.com/JuanDiego-sc/CRUD.git
cd nombre-del-repo
2. Backend (.NET 9)
Asegúrate de tener instalado el SDK de .NET 9 y PostgreSQL.

bash
Copiar
Editar
cd backend
dotnet run
El servidor se ejecutará en http://localhost:5001 o el puerto configurado en launchSettings.json.

3. Frontend (React + Vite)
bash
Copiar
Editar
cd frontend
yarn install
yarn run dev
El cliente se ejecutará por defecto en http://localhost:3001.

🗃️ Base de Datos
El proyecto usa PostgreSQL como base de datos local. Asegúrate de tener una base creada con los campos necesarios para usuarios:

id (INT, PRIMARY KEY)

nombre (VARCHAR)

email (VARCHAR)

contraseña (VARCHAR)

rol (VARCHAR)

📌 Por Hacer
 Sistema de login (autenticación)

 Validaciones de formularios

 Gestión avanzada de roles

🤝 Créditos
Este proyecto fue desarrollado por Juan Diego Silva como una práctica de desarrollo para la tarea de MVC

