
exports.up = knex => {
    return knex.schema.createTable('players', t => {
        t.uuid('id');
        t.string('name');
        t.string('email');
        t.string('password');
        t.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('players');
};
