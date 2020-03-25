const conn = require("../database/connection");

module.exports = {
  
  async store(request, response) {
    const { id } = request.body;
    const ong = await conn("ongs").where("id", id).select("name").first();

    if(!ong){
        return response.status(400).json({error: "No ONG found"});
    }
    return response.json({ ong });
  }
};
