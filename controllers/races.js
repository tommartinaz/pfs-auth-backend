const knex = require('../db/knex');
const moment = require('moment');
const uuidv4 = require('uuid');

module.exports = {
    fetchRaces(req, res) {
        knex('races')
            .select()
            .then(races => res.json(races));
    }
}