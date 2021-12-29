module.exports= app =>{
    const clothes =require('../controllers/clothes.controller.js');

    var router = require("express").Router();

    router.post("/", clothes.create);
    router.get("/", clothes.findAll);
    router.get("/:id", clothes.findOne);

    router.put("/:id",clothes.update);
    router.delete("/:id",clothes.delete);
    app.use('/api/clothes', router);
};