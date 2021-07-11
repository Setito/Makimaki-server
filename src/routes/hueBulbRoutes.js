const express = require("express");
//const HueBulb = mongoose.model("HueBulb");

const router = express.Router();

router.post("/turnOn", async (req, res) => {
  //const { bleDeviceID } = req.body;

  try {
    /*const hueBulb = new HueBulb({
      bleDeviceID: bleDeviceID,
    });*/

    //await hueBulb.save();

    //res.send({ token: token });

    console.log("SERVER SIDE REACHED!");
    
    res.send();
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
