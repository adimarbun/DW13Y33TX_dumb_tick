import axios from "axios";

export const register = newUser => {
  return axios
    .post("http://localhost:5000/api/v1/register", {
      name: newUser.name,
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      noTelp: newUser.noTelp,
      img: newUser.img
    })
    .then(response => {
      if (response.data.token !== undefined) {
        localStorage.setItem("tokenn", response.data.token);
        return response.data;
      }
    });
};

export const login = user => {
  return axios
    .post("http://localhost:5000/api/v1/login", {
      username: user.username,
      password: user.password
    })
    .then(response => {
      if (response.data.token !== undefined) {
        localStorage.setItem("tokenn", response.data.token);
        return response.data;
      }
    })
    .catch(err => {
      console.log(err);
    });
};


// export const addEvent = newEvent => {
//   return axios
//     .post("http://localhost:5000/api/v1/event", {
//       title: newEvent.title,
//       category: newEvent.category,
//       startTime: newEvent.startTime,
//       endTime: newEvent.endTime,
//       price: newEvent.price,
//       description: newEvent.description,
//       address: newEvent.address,
//       urlMaps: newEvent.urlMaps,
//       img: newEvent.img
//     })
//     .then();
// };
