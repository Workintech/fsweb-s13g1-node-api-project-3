const express = require("express"); //express import edildi.

const server = express(); //express instance yarattık
const { logger } = require("./middleware/middleware");
// ekspres'in varsayılan olarak istek gövdelerinde JSON'u ayrıştıramayacağını unutmayın
server.use(express.json());
require("dotenv").config();
const userRouter = require("./users/users-router");
// global ara yazılımlar ve kullanıcı routelarının buraya bağlanması gerekir

server.use(logger);
server.use("/api/users", userRouter);
server.get("/", (req, res) => {
  res.json({
    message: process.env.MESSAGE || "Hey, server is up and running...",
  });
});

module.exports = server;
