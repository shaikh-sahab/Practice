/**
 * @param { import("knex").Knex } knex
 * 
 * @returns { Promise<void> } 
 */
export async function seed(knex) {

  return knex('users').del()

   .then(function () {
  
      return knex('users').insert([

        {
          id: 1, name: 'Zayan ali khan',
          email: 'zayanalikhan.developer@gmail.com'
        },

        {
          id: 2, name: 'Khanwar Muzzammil',
          email: 'muzzammil606@gmail.com'

        },

        {
          id: 3, name: 'Noor-ul-huda Sheikh',
          email: 'sheikhsahab@gmail.com'

        }

      ]);

    });

};

