const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ONG de Aracaju",
                email: "avosos@hotmail.com",
                whatsapp: "7991109402",
                city: "Aracaju",
                uf: "SE"
            });

        console.log(response.body);
    });
});