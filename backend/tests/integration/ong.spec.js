const request = require("supertest");
const app = require("../../src/app");
const conn = require("../../src/database/connection");

describe("ONG", () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterAll(async () => {
        await conn.destroy();
    });
    it("should be able to create a new ONG", async () => {
        const response = await request(app).post("/ongs").send({
            name : "ONG DEF",
            email: "ong@email.com",
            whatsapp: "00123456789",
            city: "Brasília",
            uf: "DF"
        });

        expect(response.body).toHaveProperty("id");
        expect(response.body.id).toHaveLength(8);
    })
})