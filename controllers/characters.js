const knex = require('../db/knex');
const uuidv4 = require('uuid');
const moment = require('moment');

module.exports = {
    fetchCharacters(req, res, next) {
        knex('characters')
            .select()
            .then(characters => res.json(characters));
    },
    fetchCharacter(req, res) {
        knex('characters')
            .select()
            .where('id', req.params.characterId)
            .then(characters => res.json(characters[0]));
    },
    createCharacter(req, res) {
        console.log(req.body);
        knex('characters')
            .insert({ ...req.body, id: uuidv4() }, '*')
            .then(characters => res.status(201).json(characters[0]));
    },
    editCharacter(req, res) {
        knex('characters')
            .update({ ...req.body, updated_at: moment() }, '*')
            .where('id', req.params.characterId)
            .then(characters => res.status(203).json(characters[0]));
    },
    deleteCharacter(req, res) {
        knex('characters')
            .delete()
            .where('id', req.params.characterId)
            .then(res.sendStatus(204));
    }
}