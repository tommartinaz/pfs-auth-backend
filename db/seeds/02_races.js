const uuidv4 = require('uuid');

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(() => {
      // Inserts seed entries
      return knex('races').insert([
        {
          id: uuidv4(),
          name: 'Dwarf'
        },
        {
          id: uuidv4(),
          name: 'Elf'
        },
        {
          id: uuidv4(),
          name: 'Gnome'
        },
        {
          id: uuidv4(),
          name: 'Half-Elf'
        },
        {
          id: uuidv4(),
          name: 'Half-Orc'
        },
        {
          id: uuidv4(),
          name: 'Halfling'
        },
        {
          id: uuidv4(),
          name: 'Human'
        },
        {
          id: uuidv4(),
          name: 'Ifrit'
        },
        {
          id: uuidv4(),
          name: 'Kitsune'
        },
        {
          id: uuidv4(),
          name: 'Nagaji'
        },
        {
          id: uuidv4(),
          name: 'Oread'
        },
        {
          id: uuidv4(),
          name: 'Sylph'
        },
        {
          id: uuidv4(),
          name: 'Tengu'
        },
        {
          id: uuidv4(),
          name: 'Undine'
        },
        {
          id: uuidv4(),
          name: 'Wayang'
        },
      ]);
    });
};
