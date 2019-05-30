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
        t.integer('str');
        t.integer('dex');
        t.integer('con');
        t.integer('int');
        t.integer('wis');
        t.integer('cha');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
