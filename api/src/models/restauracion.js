module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Restauracion = sequelize.define('Restauracion',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      signatura: {
        type: DataTypes.STRING
      },
      denominaci_comercial: {
        type: DataTypes.STRING
      },
      grup: {
        type: DataTypes.STRING
      },
      subgrup: {
        type: DataTypes.STRING
      },
      inici_d_activitat: {
        type: DataTypes.DATEONLY
      },
      estat: {
        type: DataTypes.STRING
      },
      municipi: {
        type: DataTypes.STRING
      },
      localitat: {
        type: DataTypes.STRING
      },
      direcci: {
        type: DataTypes.TEXT
      },
      utm_x: {
        type: DataTypes.DECIMAL
      },
      utm_y: {
        type: DataTypes.DECIMAL
      },
      categoria_gold: {
        type: DataTypes.STRING
      },
      activitat_secund_ria: {
        type: DataTypes.STRING
      },
      aforament_m_xim: {
        type: DataTypes.INTEGER
      },
      explotador_s: {
        type: DataTypes.TEXT
      },
      geocode_type: {
        type: DataTypes.STRING
      },
      latitud: {
        type: DataTypes.DOUBLE
      },
      longitud: {
        type: DataTypes.DOUBLE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
    sequelize,
    tableName: 'restauracion',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  }
  )

  Restauracion.associate = function (models) {
    // Restauracion.hasMany(models.SentEmail, { as: 'sentEmail', foreignKey: 'RestauracionId' })
    // Restauracion.hasMany(models.RestauracionActivationToken, { as: 'RestauracionActivationTokens', foreignKey: 'RestauracionId' })
    // Restauracion.hasMany(models.RestauracionCredential, { as: 'RestauracionCredentials', foreignKey: 'RestauracionId' })
    // Restauracion.hasMany(models.RestauracionResetPasswordToken, { as: 'RestauracionResetPasswordTokens', foreignKey: 'RestauracionId' })
  }

  return Restauracion
}
