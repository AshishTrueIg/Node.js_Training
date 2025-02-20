'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tasks", [
      {
        title: "Setup Project",
        description: "Initialize Express and Sequelize",
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Create API Endpoints",
        description: "Build RESTful API",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks" , null, {})
  }
};
