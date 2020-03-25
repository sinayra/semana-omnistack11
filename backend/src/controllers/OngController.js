const crypto = require("crypto");
const conn = require("../database/connection");

module.exports = {
  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await conn("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await conn("ongs").select("*");

    return response.json({ ongs });
  }
};
