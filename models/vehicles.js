const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bot1 schema and model
const vehicleScheme = new Schema({
  modelName: {
    type: String,
    required: [true, "vehicle model name is requaired"],
  },
  licenceNumber: {
    type: Number,
    required: [true, "licence number is required"],
  },
  availableEnergyPercentage: {
    type: Number,
    default: 50,
  },
  maxTirePressure: {
    type: Number,
    required: [true, "tire max pressure must be provided"],
  },
  currentTirePressure: {
    type: Number,
    default: 0,
  },
  type: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "type",
  },
});

const Vehicle = mongoose.model("vehicle", vehicleScheme);
module.exports = Vehicle;
