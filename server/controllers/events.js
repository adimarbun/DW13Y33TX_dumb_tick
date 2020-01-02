const Events = require("../models").events;
const Categories = require("../models").categories;
const Users = require("../models").users;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
    where: { category: req.params.id },
    order: [["createdAt", "DESC"]]
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
  }).then(data =>
    res.send({
      id: data.id,
      title: data.title,
      startTime: data.startTime,
      endTime: data.endTime,
      price: data.price,
      description: data.description,
      address: data.address,
      urlMaps: data.urlMaps,
      img: data.img,
      category: data.categories.name,
      name: data.users.name,
      noTelp: data.users.noTelp,
      email: data.users.email,
      userImage: data.users.img
    })
  );
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
    ],
    order: [["createdAt", "DESC"]]
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

////today

// exports.today = (req, res) => {
//   let message = "";

//   Events.findAll({
//     attributes: {
//       exclude: ["category_id", "creator_user_id", "createdAt", "updatedAt"]
//     },
//     include: [
//       {
//         model: Category,
//         as: "category",
//         attributes: {
//           exclude: ["createdAt", "updatedAt"]
//         }
//       },
//       {
//         model: User,
//         as: "user",
//         attributes: {
//           exclude: ["password", "createdAt", "updatedAt"]
//         }
//       }
//     ],
//     where: {
//       start_time: {
//         [Op.substring]: Helper.getDateToday()
//       }
//       // start_time: today
//     }
//   })
//     .then(data => {
//       if (!data.length) {
//         message = "Data Not found";
//         // data = {}
//         res.status(200).json(data);
//       } else {
//         res.status(200).json(data);
//       }
//     })
//     .catch(error => {
//       message = "Bad request";
//       res.status(400).json({ message });
//     });
// };

// exports.upcoming = (req, res) => {
//   let message = "";
//   let date = Helper.getNextDateFromToday();

//   Events.findAll({
//     attributes: {
//       exclude: ["category_id", "creator_user_id", "createdAt", "updatedAt"]
//     },
//     include: [
//       {
//         model: Category,
//         as: "category",
//         attributes: {
//           exclude: ["createdAt", "updatedAt"]
//         }
//       },
//       {
//         model: User,
//         as: "user",
//         attributes: {
//           exclude: ["password", "createdAt", "updatedAt"]
//         }
//       }
//     ],
//     where: {
//       start_time: {
//         [Op.gt]: date
//       }
//     }
//   })
//     .then(data => {
//       if (!data.length) {
//         res.status(200).json(data);
//       } else {
//         res.status(200).json(data);
//       }
//     })
//     .catch(error => {
//       message = "Bad request";
//       res.status(400).json({ message });
//     });
// };
