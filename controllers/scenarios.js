const knex = require('../db/knex');
const uuidv4 = require('uuid');
const moment = require('moment');

module.exports = {
    fetchScenarios(req, res) {
        knex('scenarios')
            .select()
            .then(scenarios => res.json(scenarios));
    },
    fetchScenario(req, res) {
        knex('scenarios')
            .select()
            .where('id', req.params.scenarioId)
            .then(scenarios => res.json(scenarios[0]));
    },
    createScenario(req, res) {
        knex('scenarios')
            .insert({ ...req.body, id: uuidv4() }, '*')
            .then(scenarios => res.status(201).json(scenarios[0]));
    },
    editScenario(req, res) {
        knex('scenarios')
            .update({ ...req.body, updated_at: moment() }, '*')
            .where('id', req.params.scenarioId)
            .then(scenarios => res.status(203).json(scenarios[0]));
    },
    deleteScenario(req, res) {
        knex('scenarios')
            .delete()
            .where('id', req.params.scenarioId)
            .then(res.sendStatus(204));
    }
};
