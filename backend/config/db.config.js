module.exports={
    HOST: "localhost",
    USER: "gnagna",
    PASSWORD: "reussite",
    DB: "db_app",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }


};