//se establecen los endpoints del proyecto

let router = require("express").Router();

let uCount = require("../../app/controllers/userController");

//establecer las rutas del proyecto
router.get("/", function (req, res) {
  res.json({
    status: true,
    message: "Welcome to API v1",
  });
});

router.get("/users", function (req, res) {
  res.json({
    status: true,
    message: "list of users",
  });
});

router.get("/users/getAll/:status", (req, res) => uCount.getAll(req, res));

router.get("/users/getById/:status", (req, res) => uCount.getById(req, res));

router.get("/users/getByStatus/:status", (req, res) =>
  uCount.getByStatus(req, res)
);

module.exports = router;
