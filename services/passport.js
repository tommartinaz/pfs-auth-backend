const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
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
        .asCallback((err, user) => {
            if(user.length < 1) {
                return done(null, false, {message: 'User not found'});
            }
            if(!bcrypt.compareSync(password, user[0].password)) {
                return done(null, false, { message: 'Invalid credentials' });
            }
            return done(null, user[0])
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