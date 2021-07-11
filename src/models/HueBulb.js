const mongoose = require("mongoose");

const hueBulbSchema = new mongoose.Schema({
  bleDeviceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bleDeviceID",
  },
  name: {
    type: String,
    default: "",
  },
});

mongoose.model("HueBulb", hueBulbSchema);
