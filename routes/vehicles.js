const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicles");
//setting the 4 crud operations for bod2(get,post,update,delete)
//get
//We would get all the vehicles in our database and would send them all as a response
//if we want to get the vehicle by licence number will give the licence number as a parameter in the url
//example: {url}?licenceNumber='the specific vehicle licence number'
router.get("", function (req, res, next) {
  var query = {};
  if (req.query.licenceNumber) {
    query.licenceNumber = req.query.licenceNumber;
  }
  Vehicle.find(query)
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
//post new vehicke
//We create a new vehicle in the database and then return the created vehicle as a response
router.post("", function (req, res, next) {
  Vehicle.create(req.body)
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
//put for vehicle
//find the same vehicle with the help of its Id and return the updated vehicle as a response.
router.put("/:id", function (req, res, next) {
  Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
//delete vehicle from the garage database
router.delete("/:id", function (req, res, next) {
  Vehicle.findOneAndDelete({ _id: req.params.id })
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
//inflate tires pressure by providing the vehicle's id and the maximum tire pressure in the url
//example:{url}/'wanted vehicle id'/'maximum tire pressure'/inflateTire
router.put("/:id/:maxPressure/inflateTire", function (req, res, next) {
  Vehicle.findOneAndUpdate(
    { _id: req.params.id },
    { currentTirePressure: req.params.maxPressure }
  )
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
//uptade vehicle's energy to 100% by providing the vehicle's licence number
//example:{url}/'vehicles licence number'/addEnergy
router.put("/:licenceNumber/addEnergy", function (req, res, next) {
  Vehicle.findOneAndUpdate(
    { licenceNumber: req.params.licenceNumber },
    { availableEnergyPercentage: 100 }
  )
    .then(function (vehicle) {
      res.send(vehicle);
    })
    .catch(next);
});
module.exports = router;
