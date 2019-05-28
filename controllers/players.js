const knex = require('../db/knex');
const uuidv4 = require('uuid');
const moment = require('moment');

module.exports = {
    fetchPlayers(req, res, next) {
        knex('players')
            .select()
            .then(players => res.json(players));
    },
    fetchPlayer(req, res, next) {
        knex('players')
            .select()
            .where('id', req.params.playerId)
            .then(players => res.json(players[0]));
    },
    editPlayer(req, res, next) {
        knex('players')
            .update({
                ...req.body,
                updated_at: moment()
            }, '*')
            .where('id', req.params.playerId)
            .then(players => res.status(203).json(players[0]));
    },
    deletePlayer(req, res, next) {
        knex('players')
            .delete()
            .where('id', req.params.playerId)
            .then(res.sendStatus(204));
    }
}