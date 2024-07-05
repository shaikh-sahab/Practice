export async function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Noor', email: 'n.sheikh0101@example.com'},
        {id: 2, username: 'Muzammil', email: 'muzz@example.com'},
        {id: 3, username: 'Zayaan', email: 'Zayan@example.com'}
      ]);
    });
};
