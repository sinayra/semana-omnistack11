const knex = require("knex");
const config = require("../../knexfile");

const db_config = process.env.NODE_ENV === "test" ? config.test : config.development;
const conn = knex(db_config);

module.exports = conn;