const Users = require("../models").users;

exports.showUser = (req, res) => {
  Users.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["password", "createdAt", "updatedAt"] }
  }).then(data => {
    res.send(data);
  });
};
