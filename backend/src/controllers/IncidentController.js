const crypto = require("crypto");
const conn = require("../database/connection");

module.exports = {
  async store(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await conn("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await conn("incidents").select("*");

    return response.json({ ongs });
  }
};
