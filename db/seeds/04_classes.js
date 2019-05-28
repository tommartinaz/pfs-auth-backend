const uuidv4 = require('uuid');
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(() => {
      // Inserts seed entries
      return knex('classes').insert([
        {
          id: uuidv4(),
          name: "Alchemist"
        },
        {
          id: uuidv4(),
          name: "Arcanist"
        },
        {
          id: uuidv4(),
          name: "Barbarian"
        },
        {
          id: uuidv4(),
          name: "Barbarian (Unchained)"
        },
        {
          id: uuidv4(),
          name: "Bard"
        },
        {
          id: uuidv4(),
          name: "Bloodrager"
        },
        {
          id: uuidv4(),
          name: "Brawler"
        },
        {
          id: uuidv4(),
          name: "Cavalier"
        },
        {
          id: uuidv4(),
          name: "Cleric"
        },
        {
          id: uuidv4(),
          name: "Druid"
        },
        {
          id: uuidv4(),
          name: "Fighter"
        },
        {
          id: uuidv4(),
          name: "Gunslinger"
        },
        {
          id: uuidv4(),
          name: "Hunter"
        },
        {
          id: uuidv4(),
          name: "Inquisitor"
        },
        {
          id: uuidv4(),
          name: "Investigator"
        },
        {
          id: uuidv4(),
          name: "Kineticist"
        },
        {
          id: uuidv4(),
          name: "Magus"
        },
        {
          id: uuidv4(),
          name: "Medium"
        },
        {
          id: uuidv4(),
          name: "Mesmerist"
        },
        {
          id: uuidv4(),
          name: "Monk"
        },
        {
          id: uuidv4(),
          name: "Monk (Unchained)"
        },
        {
          id: uuidv4(),
          name: "Ninja"
        },
        {
          id: uuidv4(),
          name: "Occultist"
        },
        {
          id: uuidv4(),
          name: "Oracle"
        },
        {
          id: uuidv4(),
          name: "Paladin"
        },
        {
          id: uuidv4(),
          name: "Psychic"
        },
        {
          id: uuidv4(),
          name: "Ranger"
        },
        {
          id: uuidv4(),
          name: "Rogue"
        },
        {
          id: uuidv4(),
          name: "Rogue (Unchained)"
        },
        {
          id: uuidv4(),
          name: "Samurai"
        },
        {
          id: uuidv4(),
          name: "Shaman"
        },
        {
          id: uuidv4(),
          name: "Skald"
        },
        {
          id: uuidv4(),
          name: "Slayer"
        },
        {
          id: uuidv4(),
          name: "Sorcerer"
        },
        {
          id: uuidv4(),
          name: "Summoner (Unchained)"
        },
        {
          id: uuidv4(),
          name: "Swashbuckler"
        },
        {
          id: uuidv4(),
          name: "Warpriest"
        },
        {
          id: uuidv4(),
          name: "Witch"
        },
        {
          id: uuidv4(),
          name: "Wizard"
        },
        {
          id: uuidv4(),
          name: "Spiritualist"
        },
      ]);
    });
};
