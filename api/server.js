const express = require("express");
const knex = require("knex");
const cors = require("cors");
const helmet = require("helmet");

//const configureRoutes = require('../config/routes.js')

//const usersRouter = './Users/usersRouter.js'
//const membersRouter = './Members/MembersRouter.js'

const db = require("../data/dbConfig.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
//server.use('/api/users', usersRouter)
//server.use('/api/members', membersRouter)

//configureRoutes(server)

server.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: `It's Working!` });
  } catch (err) {
    res.status(500).json({ message: `Internal Error, ${err}` });
  }
});

module.exports = server;
