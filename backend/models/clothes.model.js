const { sequelize, Sequelize } = require(".")

module.exports=(sequelize, Sequelize) => {
    const Clothes =sequelize.define("clothes",{
        brand:{
            type:Sequelize.STRING
        },
        article:{
            type:Sequelize.STRING
        }
    });
    return Clothes;
}