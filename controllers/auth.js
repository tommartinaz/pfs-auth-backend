const jwt = require('jwt-simple');
const config = require('../config');
const knex = require('../db/knex');
const uuidv4 = require('uuid');

const tokenForUser = user => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

module.exports = {
    signup(req, res, next) {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(422).send({ error: 'An email and password is required' });
        }
        knex('players')
            .where('email', email)
            .then(players => {
                if(players.length) {
                    return res.status(422).send({ error: 'Email is already in use' });
                } else {
                    knex('players')
                        .insert({ ...req.body, id: uuidv4() }, '*')
                        .then(players => {
                            res.status(201).json({ id: players[0].id, token: tokenForUser(players[0]) })
                        });
                }
            });
    },
    signin(req, res, next) {
        res.send({ id: req.user, token: tokenForUser(req.body) })
    }
}