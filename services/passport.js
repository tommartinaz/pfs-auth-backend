const passport = require('passport');
const knex = require('../db/knex');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const config = require('../config');

const localOptions = {
    usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    knex('players')
        .where('email', email)
        .then(players => {
            const [ player ] = players
            if(player.password !== password) {
                return done(null, false);
            } else {
                return done(null, player.id);
            }
        })
        .catch(err => done(err));
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    knex('players')
        .select()
        .where('id', payload.sub)
        .then(players => done(null, players[0]))
        .catch(err => done(err, false));
});

passport.use(jwtLogin);
passport.use(localLogin);