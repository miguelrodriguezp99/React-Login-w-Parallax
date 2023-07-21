Para el servidor instalar las dependencias que usamos

npm install express mongoose bcrypt jsonwebtoken
npm install express-jwt@6.1.0

mongoose es la conexión a la BD de mongoDB online
bcrypt y jsonwebtoken para la autenticación con la BD
express para el servidor REST

Para crear el proyecto react:
npx create-react-app mi-app
npm init -y

creamos carpeta server y cliente:
cd server
npm i express
npm i nodemon -D

en package.json del server poner esto:
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server",
"dev": "nodemon server"
},

cd client
npx create-react-app

en el package.json del cliente
"version": "0.1.0",
"proxy": "http://localhost:5000",

LANZAMIENTO:
server: npm run dev
client: npm start



Para hacer un proyecto con vite:
npm create vite@latest