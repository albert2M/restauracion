'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('restauracion', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      signatura: {
        type: Sequelize.STRING
      },
      denominaci_comercial: {
        type: Sequelize.STRING
      },
      grup: {
        type: Sequelize.STRING
      },
      subgrup: {
        type: Sequelize.STRING
      },
      inici_d_activitat: {
        type: Sequelize.DATEONLY
      },
      estat: {
        type: Sequelize.STRING
      },
      municipi: {
        type: Sequelize.STRING
      },
      localitat: {
        type: Sequelize.STRING
      },
      direcci: {
        type: Sequelize.TEXT
      },
      utm_x: {
        type: Sequelize.DECIMAL
      },
      utm_y: {
        type: Sequelize.DECIMAL
      },
      categoria_gold: {
        type: Sequelize.STRING
      },
      activitat_secund_ria: {
        type: Sequelize.STRING
      },
      aforament_m_xim: {
        type: Sequelize.INTEGER
      },
      explotador_s: {
        type: Sequelize.TEXT
      },
      geocode_type: {
        type: Sequelize.STRING
      },
      latitud: {
        type: Sequelize.DOUBLE
      },
      longitud: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('restauracion')
  }
}
