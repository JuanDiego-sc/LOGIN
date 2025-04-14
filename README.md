🔐 LOGIN
Tarea: Implementación de LOGIN con MVC

📋 CRUD + Autenticación - Aplicación Full Stack con .NET 9 y React

Este repositorio contiene una aplicación web completa que permite a los usuarios realizar operaciones básicas de Crear, Leer, Actualizar y Eliminar (CRUD) junto con un sistema de autenticación (login).
Cada usuario tiene los siguientes campos: ID, nombre, email, contraseña y rol (admin o user).

Este proyecto está desarrollado con un backend en .NET 9 y un frontend en React + Vite. El diseño visual está implementado con Bootstrap y se utiliza una base de datos local en PostgreSQL.

🚀 Funcionalidades
✅ Crear nuevos usuarios
🔍 Ver listado de usuarios
✏️ Editar usuarios existentes
🗑️ Eliminar usuarios
🔐 Iniciar sesión (Login con validación de credenciales y persistencia de sesión)
👤 Redirección basada en roles (admin/user)
🔓 Logout para cerrar sesión

🧰 Tecnologías Usadas
.NET 9

React

Vite

Bootstrap

PostgreSQL

Yarn

Axios

React Router


⚙️ Instalación
1️⃣ Clona el repositorio
bash
Copiar
Editar
git clone https://github.com/JuanDiego-sc/LOGIN.git
2️⃣ Backend (.NET 9)
Asegúrate de tener instalado el SDK de .NET 9 y PostgreSQL.

bash
Copiar
Editar
cd API
dotnet run
El servidor se ejecutará en http://localhost:5002 o el puerto configurado en launchSettings.json.

3️⃣ Frontend (React + Vite)
bash
Copiar
Editar
cd CrudUI
yarn install
yarn run dev
El cliente se ejecutará por defecto en http://localhost:3001.

🗃️ Base de Datos
El proyecto utiliza PostgreSQL como base de datos local.
Asegúrate de tener una base de datos creada con la siguiente estructura:

Campo	Tipo	Restricciones
id	UUID	PRIMARY KEY
nombre	VARCHAR	NOT NULL
email	VARCHAR	UNIQUE, NOT NULL
contraseña	VARCHAR	NOT NULL
rol	VARCHAR	NOT NULL (admin/user)
Ejemplo de inserción para probar login:

sql
Copiar
Editar
INSERT INTO usuarios (id, nombre, email, contraseña, rol)
VALUES ('de7d9a4a-2ea2-4197-b100-5eb7eb15fad7', 'Daniel', 'DanielOrtiz@gmail.com', 'daniel123', 'admin');
🔄 Funcionamiento del Login
El formulario de login recibe email y contraseña.

Se realiza una petición al backend para validar las credenciales.

Si son correctas:

Se guarda la sesión del usuario en el Context.

Se redirige al dashboard correspondiente según el rol.

Si se recarga la página, se mantienen los valores del contexto.

El logout limpia el contexto y redirige al formulario de login.

📌 Por Hacer

Manejo de errores más robusto

Recuperación de contraseña

Registro de nuevos usuarios desde la interfaz

Gestión avanzada de permisos por rol

🤝 Créditos
Este proyecto fue desarrollado por Juan Diego Silva como práctica de desarrollo para la tarea de MVC en el contexto de una aplicación web full stack.

