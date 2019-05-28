const knex = require('knex');
const moment = require('moment');
const uuidv4 = require('uuid');

module.exports = {
    fetchAlignments(req, res) {
        knex('alignments')
            .select()
            .then(alignments => res.json(alignments));
    },
}