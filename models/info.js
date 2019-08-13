const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const finSchema = new Schema({
  sbu: { type: String, required: true },
  region: { type: String, required: true },
  period: { type: String, required: true },
  pl: { type: Number },
  py: { type: Number },
  rfc: { type: Number }
});

const FinInfo = mongoose.model("finInfo", finSchema);

module.exports = FinInfo;
