// // Dependencies
// // =============================================================
module.exports = function (sequelize, DataTypes) {
  // Creates a "Character" model that matches up with DB
  const Match = sequelize.define(
    "match",
    {
      // The routeName gets saved as a string
      routeName: DataTypes.STRING,
      // The type of cat breed (a string)
      name: DataTypes.STRING,
      // First cat trait (a string)
      temperamentOne: DataTypes.STRING,
      // Second cat trait (a string)
      temperatmentTwo: DataTypes.INTEGER,
      // Third cat trait (a string)
      temperatmentThree: DataTypes.INTEGER,
      // Breed's maximum life expectancy
      lifeSpan: DataTypes.INTEGER,
      // Breed's general size rating
      size: DataTypes.STRING,
      // Wikipedia link for more information
      wikipediaLink: DataTypes.STRING,
    },
    {
      // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
      freezeTableName: true,
    }
  );

  // Syncs with DB
  Match.sync();
  return Match;
};
// // DataTypes (capital) references the standard library
// const DataTypes = require("sequelize");
// // DataTypes (lowercase) references our connection to the DB.
// const sequelize = require("../config/catmarketconnection.js");

// // Creates a "name" model that matches up with breed in DB
// const Match = sequelize.define(
//   "match",
//   {
//     // The routeName gets saved as a string
//     routeName: DataTypes.STRING,
//     // The type of cat breed (a string)
//     name: DataTypes.STRING,
//     // First cat trait (a string)
//     temperamentOne: DataTypes.STRING,
//     // Second cat trait (a string)
//     temperatmentTwo: DataTypes.INTEGER,
//     // Third cat trait (a string)
//     temperatmentThree: DataTypes.INTEGER,
//     // Breed's maximum life expectancy
//     lifeSpan: DataTypes.INTEGER,
//     // Breed's general size rating
//     size: DataTypes.STRING,
//     // Wikipedia link for more information
//     wikipediaLink: DataTypes.STRING,
//   },
//   {
//     // Disable the modification of tablenames; By default, sequelize will automatically
//     // Transform all passed model names (first parameter of define) into plural. If not set:
//     freezeTableName: true,
//   }
// );

// // Syncs with DB
// Match.sync();

// // Makes the Character Model available for other files (will also create a table)
// module.exports = Match;
