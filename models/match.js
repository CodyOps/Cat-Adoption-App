// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// Sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/catmarketconnection.js");

// Creates a "name" model that matches up with breed in DB
const Match = sequelize.define(
  "match",
  {
    // The routeName gets saved as a string
    routeName: Sequelize.STRING,
    // The type of cat breed (a string)
    name: Sequelize.STRING,
    // First cat trait (a string)
    temperamentOne: Sequelize.STRING,
    // Second cat trait (a string)
    temperamentTwo: Sequelize.INTEGER,
    // Third cat trait (a string)
    temperamentThree: Sequelize.INTEGER,
    // Breed's maximum life expectancy
    lifeSpan: Sequelize.INTEGER,
    // Breed's general size rating
    size: Sequelize.STRING,
    // Wikipedia link for more information
    wikipediaLink: Sequelize.STRING,
  },
  {
    // Disable the modification of tablenames; By default, sequelize will automatically
    // Transform all passed model names (first parameter of define) into plural. If not set:
    freezeTableName: true,
  }
);

// Syncs with DB
Match.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Match;
