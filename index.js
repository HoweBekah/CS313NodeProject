const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/getRate", function calculateRate(req, res) {
    console.log("Function called!");
    let weight = Number(req.query.weight);
    var mailType = req.query.mailType;
    console.log(mailType);
    var result = 0;
    switch (mailType) {
      case "stamped":
        console.log("stamped!");
        if (weight == 1) {
          result = 0.55;
        } else if (weight == 2) {
          result = 0.7;
        } else if (weight == 3) {
          result = 0.85;
        } else {
          result = 1.0;
        }
        result.toFixed(2);
        break;
      case "metered":
        console.log("metered");
        if (weight == 1) {
          result = 0.5;
        } else if (weight == 2) {
          result = 0.65;
        } else if (weight == 3) {
          result = 0.8;
        } else {
          result = 0.95;
        }
        result.toFixed(2);
        break;
      case "envelope":
        console.log("envelope");
        result = 1.0;
        for (i = 1; i < weight; i++) {
          result += 0.15;
        }
        result.toFixed(2);
        break;
      case "package":
        console.log("package");
        if (weight < 5) {
          result = 3.66;
        } else if (weight < 9) {
          result = 4.39;
        } else if (weight < 13) {
          result = 5.19;
        } else {
          result = 5.71;
        }
        result.toFixed(2);
        break;
      default:
        console.log("Broken!");
        break;
    }
    console.log(result);
    res.render("pages/results", {
      result: result.toFixed(2)
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
