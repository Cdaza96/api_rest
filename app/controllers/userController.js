const mUser = require("../models/usersModel");

module.exports.getAll = function (req, res) {
  return mUser.getAll(req, res);
};
module.exports.getById = function (req, res) {
  //return "get by id";
  res.json({
    status: true,
    message: "get by id",
  });
  //return mUser.getById(req, res);
};
module.exports.getByStatus = function (req, res) {
  //return "get by status";
  res.json({
    status: true,
    message: "get by Status",
  });
  //return mUser.getByStatus(req, res);
};
