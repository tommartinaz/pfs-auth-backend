exports.up = knex => {
    return knex.schema.createTable('characters', t => {
        t.uuid('id');
        t.string('name');
        t.string('gender');
        t.integer('level');
        t.uuid('player_id');
        t.uuid('class_id');
        t.uuid('race_id');
        t.uuid('alignment_id');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
