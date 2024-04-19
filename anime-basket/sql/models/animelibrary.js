const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Library = require('./library')
const Anime = require('./anime') 

// Joins the Library and Anime tables in a many-to-many relationship
class AnimeLibrary extends Model {}

AnimeLibrary.init({
    // Empty, as we only need to define the relationship
}, {
  sequelize: sequelizeInstance,
  modelName: "animelibraries",
});

// Define many-to-many relationship between Library and Anime
Anime.belongsToMany(Library, {
  through: AnimeLibrary,
  foreignKey: "anime_id",
  otherKey: "library_id",
});

Library.belongsToMany(Anime, {
  through: AnimeLibrary,
  foreignKey: "library_id",
  otherKey: "anime_id",
});

module.exports = AnimeLibrary;