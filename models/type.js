const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the post schema and model
const vehiclesTypeScheme = new Schema({
  type: {
    type: String,
    required: [true, "type field is requires"],
  },
});

const Type = mongoose.model("vehiclesType", vehiclesTypeScheme);
module.exports = Type;
