const players = require('./controllers/players');
const passport = require('passport');
const passportService = require('./services/passport');
const auth = require('./controllers/auth');
const characters = require('./controllers/characters');
const races = require('./controllers/races');
const alignments = require('./controllers/alignments');
const classes = require('./controllers/classes');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
    // app.get('/', (req, res) => res.send({ hi: 'there' }));
    // AUTH
    app.post('/signup', auth.signup);
    app.post('/signin', requireSignin, auth.signin);

    // PLAYER_ADMIN
    app.get('/api/players', requireAuth, players.fetchPlayers);
    app.get('/api/players/:playerId', players.fetchPlayer);
    app.patch('/api/players/:playerId', players.editPlayer);
    app.delete('/api/players/:playerId', players.deletePlayer);

    // CHARACTER_ADMIN
    app.get('/api/characters', characters.fetchCharacters);
    app.post('/api/characters', characters.createCharacter);
    app.get('/api/characters/:characterId', characters.fetchCharacter);
    app.patch('/api/characters/:characterId', characters.editCharacter);
    app.delete('/api/characters/:characterId', characters.deleteCharacter);

    // MISC CHARACTER OPTIONS
    app.get('/api/alignments', alignments.fetchAlignments);
    app.get('/api/classes', classes.fetchClasses);
    app.get('/api/races', races.fetchRaces);
}