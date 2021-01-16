// Dependencies
const User = require("../models/marketusers.js");

// Routes
module.exports = (app) => {
  app.get("/api/:users?", (req, res) => {
    if (req.params.users) {
      User.findOne({
        where: {
          routeName: req.params.users,
        },
      }).then((result) => res.json(result));
    } else {
      User.findAll().then((result) => res.json(result));
    }
  });

  app.post("/api/new", (req, res) => {
    const user = req.body;
    const routeName = user.name.replace(/\s+/g, "").toLowerCase();

    User.create({
      routeName,
      catName: user.name,
      breed: user.role,
      age: user.age,
      zipcode: user.zipcode,
      ownerName: user.ownerName,
    });
    res.status(200).json(user);
  });
};
