const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Anime extends Model { }

// Sequelize will create this table if it doesn't exist on startup
Anime.init({
    anime_id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    mal_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    title: {
        type: DataTypes.STRING, allowNull: false
    }},
    {
    sequelize: sequelizeInstance,
    modelName: 'anime',
    freezeTableName: true
    }
)

module.exports = Anime;