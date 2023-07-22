const router = require("express").Router();
const Thought = require("../model/thought");

router.post("/inspiration", async (req, res) => {
  try {
    const newInspiration = new Thought({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      Email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      inspiration: req.body.description,
    });
    const inspiration = await newInspiration.save();
    res.status(200).send(inspiration);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.get("/getInspirations", async (req, res) => {
  try {
    const inspirations = await Thought.find();
    res.status(200).json(inspirations);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
