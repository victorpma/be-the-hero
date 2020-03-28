const connection = require('../database/connection');

module.exports = {
    async signIn(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong)
            return response.status(401).json({ error: 'Não foi encontrada ONG com este ID!' });

        return response.json({ name: ong.name });
    }
}