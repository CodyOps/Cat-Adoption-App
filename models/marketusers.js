// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// Sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/catmarketconnection.js");

// Creates a "Character" model that matches up with DB
const User = sequelize.define(
  "user",
  {
    // The routeName gets saved as a string
    routeName: Sequelize.STRING,
    // The name of the character (a string)
    catName: Sequelize.STRING,
    // The character's role (a string)
    breed: Sequelize.STRING,
    // The character's age (a string)
    age: Sequelize.INTEGER,
    // The cat owner's zip code
    zipcode: Sequelize.INTEGER,
    // The cat's owner's name
    ownerName: Sequelize.STRING,
  },
  {
    // Disable the modification of tablenames; By default, sequelize will automatically
    // Transform all passed model names (first parameter of define) into plural. If not set:
    freezeTableName: true,
  }
);

// Syncs with DB
User.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = User;
