
exports.up = knex => {
    return knex.schema.createTable('scenarios', t => {
        t.uuid('id');
        t.string('name');
        t.integer('season_number');
        t.integer('scenario_number');
        t.integer('low_level');
        t.integer('high_level');
        t.text('description');
        t.timestamps(true, true);
    })
};

exports.down = knex => {
    return knex.schema.dropTable('scenarios');
};
