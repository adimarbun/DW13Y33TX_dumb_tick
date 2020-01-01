const Users = require("../models").users;

exports.showUser = (req, res) => {
  Users.findOne({
    where: { id: userId },
    attributes: { exclude: ["password", "createdAt", "updatedAt"] }
  }).then(data => {
    res.send(data);
  });
};
