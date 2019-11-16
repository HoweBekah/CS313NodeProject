const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/postal", function(req, res) {
    console.log("Function called!");
    let weight = Number(req.query.weight);
    var mailType = req.query.mailType;
    console.log(mailType);
    var result = 0;
    switch (mailType) {
      case "stamped":
        console.log("stamped!");
        //result = op1 + op2;
        break;
      case "metered":
        console.log("metered");
        // result = op1 - op2;
        break;
      case "envelope":
        console.log("envelope");
        //result = op1 / op2;
        break;
      case "package":
        console.log("package");
        //result = op1 * op2;
        break;
      default:
        console.log("Broken!");
        break;
    }
    // console.log(result);
    // res.render("pages/results", {
    //   result: result
    // });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
