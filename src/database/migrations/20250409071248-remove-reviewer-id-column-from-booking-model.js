"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("bookings", "reviewer_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("bookings", "reviewer_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "bookings", // replace with actual table name if different
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
};
