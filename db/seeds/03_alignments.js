const uuidv4 = require('uuid');

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('alignments').del()
    .then(() => {
      // Inserts seed entries
      return knex('alignments').insert([
        {
          id: uuidv4(),
          name: 'LG'
        },
        {
          id: uuidv4(),
          name: 'LN'
        },
        {
          id: uuidv4(),
          name: 'NG'
        },
        {
          id: uuidv4(),
          name: 'N'
        },
        {
          id: uuidv4(),
          name: 'CG'
        },
        {
          id: uuidv4(),
          name: 'CN'
        },
      ]);
    });
};
