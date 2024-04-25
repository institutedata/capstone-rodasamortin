const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Blog = require("./blog");
const User = require("./user");

class Comment extends Model { }

Comment.init({
    comment_id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    blog_id: {
        type: DataTypes.INTEGER, allowNull: false
    },
    body: {
        type: DataTypes.STRING(4000), allowNull: false
    },
    is_spoiler: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'comments',
    freezeTableName: true
})

// Define many-to-one relationship between Comments and Blog
Comment.belongsTo(Blog, {
    foreignKey: "blog_id",
    as: "blog",
});
Blog.hasMany(Comment, {
    foreignKey: "blog_id",
});

// Define the many-to-one relationship between Comments and User
Comment.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});
User.hasMany(Comment, {
    foreignKey: "user_id",
});

module.exports = Comment;