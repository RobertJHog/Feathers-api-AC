// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cats = sequelizeClient.define('cats', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false
    },
    breed: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    },
    profilephoto: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  cats.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cats;
};
