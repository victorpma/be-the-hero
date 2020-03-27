const knex = require('knex');
const connection = require('../database/connection');

module.exports = {
    async list(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.id_ong')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json({ incidents });
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const id_ong = request.headers.authorization;

        const [id_incident] = await connection('incidents').insert({
            title,
            description,
            value,
            id_ong
        });

        return response.json({ id_incident });
    },

    async delete(request, response) {
        const { id } = request.params;
        const id_ong = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('id_ong')
            .first();

        if (incident.id_ong !== id_ong)
            return response.status(401).json({ error: 'Operação não permitida!' });

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};