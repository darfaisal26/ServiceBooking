'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('users', 'gender_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addConstraint('users', {
      fields: ['gender_id'],
      type: 'foreign key',
      name: 'fk_users_gender_id', // Custom constraint name
      references: {
        table: 'gender_master',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('users', 'fk_users_gender_id');
  }
};
