// Dependencies
const db = require("../models");
// const catMarket = require("../models/marketusers.js");

// Routes
module.exports = (app) => {
  // app.get("/api/marketp", (req, res) => {
  //   db.all("/marketplace", (data) => {
  //     const hbsObject = {
  //         catMarket: data,
  //     };
  //     res.render('marketplace', hbsObject);
  // });
    
    // if (req.params.allpets) {
    //   db.allpets.findOne({
    //     where: {
    //       catName: req.params.catName,
    //     },
    //   }).then((result) => res.json(result));
    // } else {
    //   db.allpets.findAll().then((result) => res.json(result));
    // }
  // });

  app.post("/api/new", (req, res) => {
    const user = req.body;
    console.log(user);
    // const routeName = user.name.replace(/\s+/g, "").toLowerCase();
    // console.log(db);
    db.allpets
      .create({
        // routeName,
        ownerName: user.ownerName,
        catName: user.catName,
        breed: user.breed,
        age: user.age,
        zipcode: user.zipcode,
      })
      .then(function () {
        res.redirect("/marketplace");
      })
      .catch(function () {
        res.status(401).json(err);
      });
    // res.sendStatus(200);
  });
};
