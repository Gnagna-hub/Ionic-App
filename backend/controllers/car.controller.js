const db = require("../models");
const Car = db.cars;
const Op = db.Sequelize.Op;
exports.create=  (req, res) => {
    if(!req.body.brand) {
         res.status(400).send({
             message:"content can not be empty"
         });
         return;
    }
    const car = {
        brand: req.body.brand,
        model: req.body.model
    };

    Car.create(car)
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

Car.findAll()
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
  
  // Find a single car with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Car.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving car with id=" + id
        });
      });
  };
  
  // Update a car by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Car.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "car was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update car with id=${id}. Maybe car was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Car with id=" + id
        });
      });
  };
  
  // Delete a Car with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Car.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Car was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Car with id=${id}. Maybe car was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Car with id=" + id
        });
      });
  };