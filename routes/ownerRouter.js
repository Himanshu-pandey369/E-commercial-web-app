const express = require("express");
const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(505).send("Unauthorised access");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.send("Created a new owner");
  });
}

router.get("/", (req, res) => {
  res.send("hey its working");
});
module.exports = router;
