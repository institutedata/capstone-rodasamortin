const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require('./user')

class Library extends Model { }
Library.init(
  {
    library_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    watching_status: { // Works as library name. Expected values: "Watching", "Completed", "On Hold", "Dropped", "Plan to Watch"
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "libraries",
    freezeTableName: true,
  }
);

// Define many-to-one relationship between Libraries and User
Library.belongsTo(User, {
  foreignKey: "user_id", 
  as: "user", 
});
User.hasMany(Library, {
  foreignKey: "user_id",
});

module.exports = Library;

