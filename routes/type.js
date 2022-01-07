const express = require("express");
const router = express.Router();
const Type = require("../models/type");
//setting the 4 crud operations for bod1(get,post,update,delete)
//get
//We would get the bot1 in our database and would send them all as a response
router.get("", function (req, res, next) {
  Type.find({})
    .then(function (type) {
      res.send(type);
    })
    .catch(next);
});
//post for bot1
//We create a new bot1 in the database and then return the created bot as a response
router.post("", function (req, res, next) {
  Type.create(req.body)
    .then(function (type) {
      res.send(type);
      res.status(200);
    })
    .catch(next);
});
//put for bot1
//find the same bot with the help of its Id and return the updated bot as a response.
router.put("/:id", function (req, res, next) {
  Type.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (type) {
      res.send(type);
    })
    .catch(next);
});
//delete for bot1
router.delete("/:id", function (req, res, next) {
  Type.findOneAndDelete({ _id: req.params.id })
    .then(function (type) {
      res.send(bot1);
    })
    .catch(next);
});
module.exports = router;
