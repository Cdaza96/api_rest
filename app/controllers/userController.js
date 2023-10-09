const mUser = require("../models/usersModel");

module.exports.getAll = function (req, res) {
  return mUser.getAll(req, res);
};
