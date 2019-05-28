
exports.up = knex => {
    return knex.schema.createTable('races', t => {
        t.uuid('id');
        t.string('name');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('races');
};
