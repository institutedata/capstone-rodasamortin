const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const User = require("./user");

class Blog extends Model {}
Blog.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(4000),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "blogs",
    freezeTableName: true,
  }
);

// Define many-to-one relationship between Blogs and User
Blog.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
User.hasMany(Blog, {
  foreignKey: "user_id",
});

module.exports = Blog;
