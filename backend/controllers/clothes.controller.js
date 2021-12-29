const db = require("../models");
const Clothes = db.clothes;
const Op = db.Sequelize.Op;
exports.create=  (req, res) => {
    if(!req.body.brand) {
         res.status(400).send({
             message:"content can not be empty"
         });
         return;
    }
    const clothes = {
        brand: req.body.brand,
        article: req.body.article
    };

    Clothes.create(clothes)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "somme errors occured while creation the car."
        });
    });
};
exports.findAll =(req,res) =>{

    Clothes.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "somme errors occured while creation the clothe."
        });
    });
    };
    
  // Find a single Clothe with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Clothe.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Clothe with id=" + id
        });
      });
  };
  
  // Update a Clothe by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Clothes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Clothe was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Clothe with id=${id}. Maybe Clothe was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Clothe with id=" + id
        });
      });
  };
  
  // Delete a Clothe with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Clothe.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Clothe was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Clothe with id=${id}. Maybe Clothe was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Clothe with id=" + id
        });
      });
  };