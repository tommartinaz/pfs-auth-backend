exports.up = knex => {
    return knex.schema.createTable('player_2_scenarios', t => {
        t.uuid('id');
        t.uuid('player_id');
        t.uuid('scenario_id');
        t.uuid('character_id');
        t.timestamps(true, true);
    })
};

exports.down = knex => {
    return knex.schema.dropTable('player_2_scenarios');
};
