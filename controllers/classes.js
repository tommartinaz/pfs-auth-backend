const knex = require('knex');
const moment = require('moment');
const uuidv4 = require('uuid');

module.exports = {
    fetchClasses(req, res) {
        knex('classes')
            .select()
            .then(classes => res.json(classes));
    },
}