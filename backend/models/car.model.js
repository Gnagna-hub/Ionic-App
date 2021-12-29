const { sequelize, Sequelize } = require(".")

module.exports=(sequelize, Sequelize) => {
    const Car =sequelize.define("car",{
        brand:{
            type:Sequelize.STRING
        },
        model:{
            type:Sequelize.STRING
        }
    });
    return Car;
}