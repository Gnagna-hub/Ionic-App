const { urlencoded } = require('express');
const express=require('express');
const cors= require('cors');

const app=express();

var corsOptions={
    origin: "http://localhost:8101",
    origin: "http://localhost:8200" //for the lab

};
 app.use(cors(corsOptions));

app.use(express.json());

app.use(urlencoded({extented:true}));

const db= require("./models");

db.sequelize.sync({ force:true}).then(()=> {
    console.log("Drop and re-synd db.");
});

app.get("/",(req,res) =>{
    res.json({message:"welcome to your buy and sell apllication"});
});
require("./routes/car.routes") (app);
require("./routes/clothes.routes") (app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}.');
});