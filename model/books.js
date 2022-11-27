dbConnection = require("./../config/db.config");
let sequelize = require("sequelize");

let books = new dbConnection.define("books", {
    id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: sequelize.DataTypes.INTEGER
    },
    name: {
        notNull: true,
        type: sequelize.DataTypes.STRING
    },
    rent: {
        notNull: true,
        type: sequelize.DataTypes.STRING
    },
},
    {
        timestamps: false
    });


module.exports = books;