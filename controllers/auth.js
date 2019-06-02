const jwt = require('jwt-simple');
const uuidv4 = require('uuid');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config');
const knex = require('../db/knex');

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
                }
            }).asCallback(() => {
                bcrypt.genSalt(10, (err, salt) => {
                    if(err) {
                        return next(err);
                    }

                    bcrypt.hash(req.body.password, salt, null, (err, hash) => {
                        if(err) {
                            return next(err);
                        }
                        knex('players')
                            .insert({ ...req.body, password: hash, id: uuidv4() }, '*')
                            .then(
                                players => {
                                    const [ player ] = players
                                    res.status(201).json({ id: player.id, token: tokenForUser(player) });
                                    return null;
                                }
                            );
                        // next();
                    });
                });
            })
    },
    signin(req, res, next) {
        res.send({ id: req.user.id, token: tokenForUser(req.body) })
    }
}