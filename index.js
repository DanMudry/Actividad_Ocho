//levantar el server
const http = require("node:http"); //nos traemos la libreria de node

const app = require("./src/app");

//configurar .env
require("dotenv").config();

//configurar database
require("./src/config/db");

const server = http.createServer(app);
//todas las peticiones que entre al servidor las gestionara app

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on("listening", () => {
  console.log(`Escuchando en ${PORT}`);
});
