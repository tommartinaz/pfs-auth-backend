exports.up = knex => {
    return knex.schema.createTable('alignments', t => {
        t.uuid('id');
        t.string('name');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('alignments');
};
