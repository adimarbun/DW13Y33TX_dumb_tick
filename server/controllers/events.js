const Events = require("../models").events;
const Categories = require("../models").categories;
const Users = require("../models").users;

//create events

exports.createEvent = (req, res) => {
  request = {
    title: req.body.title,
    category: req.body.category,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    price: req.body.price,
    description: req.body.description,
    address: req.body.address,
    urlMaps: req.body.urlMaps,
    img: req.body.img,
    createBy: userId
  };
  Events.create(request).then(response => {
    Events.findOne({
      attributes: {
        exclude: ["category", "createBy", "createdAt", "updatedAt"]
      },
      include: [
        {
          model: Categories,
          as: "categories",
          attributes: ["id", "name"]
        },
        {
          model: Users,
          as: "users",
          attributes: ["id", "name", "noTelp", "email", "img"]
        }
      ],
      where: { id: response.id }
    }).then(response => {
      res.send(response);
    });
  });
};

//show events by category

exports.showEventsCategory = (req, res) => {
  Events.findAll({
    attributes: {
      exclude: ["category", "createdAt", "updatedAt"]
    },
    include: [
      {
        model: Categories,
        as: "categories",
        attributes: ["id", "name"]
      },
      {
        model: Users,
        as: "users",
        attributes: ["id", "name", "noTelp", "email", "img"]
      }
    ],
    where: { category: req.params.id }
  }).then(data => res.send(data));
};

//show event by id

exports.showEventById = (req, res) => {
  Events.findOne({
    attributes: {
      exclude: ["category", "createdAt", "updatedAt"]
    },
    include: [
      {
        model: Categories,
        as: "categories",
        attributes: ["id", "name"]
      },
      {
        model: Users,
        as: "users",
        attributes: ["id", "name", "noTelp", "email", "img"]
      }
    ],
    where: { id: req.params.id }
  }).then(data => res.send(data));
};

//show all event

exports.showEventAll = (req, res) => {
  Events.findAll({
    attributes: {
      exclude: ["category", "createdAt", "updatedAt"]
    },
    include: [
      {
        model: Categories,
        as: "categories",
        attributes: ["id", "name"]
      },
      {
        model: Users,
        as: "users",
        attributes: ["id", "name", "noTelp", "email", "img"]
      }
    ]
  }).then(data => res.send(data));
};

//show event when title

exports.showEventTitle = (req, res) => {
  const title = req.query.title;
  Events.findOne({
    attributes: {
      exclude: ["category", "createdAt", "updatedAt"]
    },
    include: [
      {
        model: Categories,
        as: "categories",
        attributes: ["id", "name"]
      },
      {
        model: Users,
        as: "users",
        attributes: ["id", "name", "noTelp", "email", "img"]
      }
    ],
    where: { title: title }
  }).then(data => res.send(data));
};
