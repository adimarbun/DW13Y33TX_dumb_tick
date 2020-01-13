import React, { Component } from "react";
import { Typography, Button, Grid, Paper, TextField } from "@material-ui/core";
import MenuAppBar from "../components/appbar";
import { connect } from "react-redux";
import "../css/profil.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EditProfil from "../components/editProfile";
import Footer from "../components/footer";
import { getUsers } from "../_actions/users";
import { getFavorites } from "../_actions/favorites";
import { URL_API } from "../config/constant";

import Axios from "axios";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nameUser: "",
      numberPhone: 0,
      email: "",
      fotoProfil: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  handleOpen = (nameUsers, numberPhone, email, fotoProfil) => () => {
    this.setState({ open: true });
    this.setState({
      nameUser: nameUsers,
      numberPhone: numberPhone,
      email: email,
      fotoProfil: fotoProfil
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("tokenn");
    const data = {
      name: this.state.nameUser,
      noTelp: this.state.numberPhone,
      email: this.state.email,
      img: this.state.fotoProfil
    };
    console.log(data);
    Axios({
      method: "put",
      url: `${URL_API}api/v1/user`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    }).then(response => {
      window.location = "/profil";
    });
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getFavorites();
    console.log(getUsers.data);
  }

  render() {
    const { dataUsers } = this.props.users;
    const { dataFavorites } = this.props.favorites;

    return (
      <div>
        <MenuAppBar />
        <Grid container>
          <Grid xs="6">
            <Grid className="personality">
              <Typography variant="h2">Profil</Typography>
              <Typography variant="h4">{dataUsers.name}</Typography>
              <Typography variant="h4">{dataUsers.noTelp}</Typography>
              <Typography variant="h4">{dataUsers.email}</Typography>
            </Grid>
          </Grid>
          <Grid xs="2">
            <Grid className="edit-button">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleOpen(
                  dataUsers.name,
                  dataUsers.noTelp,
                  dataUsers.email,
                  dataUsers.img
                )}
              >
                edit profile
              </Button>
            </Grid>
          </Grid>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={this.state.open}>
              <div className="form-edit">
                <Typography variant="h3">Edit Profile</Typography>
                <form noValidate onSubmit={this.onSubmit}>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="nameUser"
                    autoComplete="name"
                    autoFocus
                    value={this.state.nameUser}
                    onChange={this.onChange}
                  />
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your Email"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="noTelp"
                    label=" Your Number Telephone"
                    name="numberPhone"
                    autoComplete="current-noTelp"
                    value={this.state.numberPhone}
                    type="noTelp"
                    onChange={this.onChange}
                  />
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="img"
                    label=" Your img"
                    name="fotoProfil"
                    autoComplete="current-img"
                    value={this.state.fotoProfil}
                    type="img"
                    onChange={this.onChange}
                  />
                  <Grid>
                    <img src={this.state.fotoProfil} Width="300px"></img>
                  </Grid>
                  <Button
                    href="/profil"
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "20px" }}
                  >
                    cancel
                  </Button>
                  <Button type="submit" variant="contained" color="inherit">
                    save
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
          <Grid>
            <Grid className="gridfoto">
              <img className="foto" src={dataUsers.img}></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography style={{ marginLeft: "3%" }} variant="h3">
            Favorit
          </Typography>

          <Grid container>
            {dataFavorites.map((data, index) => {
              return (
                <Card
                  style={{
                    width: "400px",
                    margin: "50px",
                    textAlign: "justify",
                    minHeight: "500px"
                  }}
                >
                  <CardActionArea>
                    <Button
                      style={{
                        position: "absolute",
                        backgroundColor: "white",
                        margin: " 10px 10px 0 290px"
                      }}
                    >
                      Rp.{data.events.price}
                    </Button>
                    <CardMedia
                      component="img"
                      height="300"
                      image={data.events.img}
                    />
                    <CardContent>
                      <Grid container>
                        <Grid xs="10">
                          <Typography gutterBottom variant="h5" component="h2">
                            {data.events.title.substring(0, 25) + "..."}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Fab aria-label="like" color="secondary">
                            <FavoriteIcon />
                          </Fab>
                        </Grid>
                      </Grid>
                      <Link
                        underline="none"
                        color="inherit"
                        href={"/event/" + data.events.id}
                      >
                        <Typography>
                          {data.events.startTime.substring(0, 10)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {data.events.description.substring(0, 200) + "..."}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    favorites: state.favorites
  };
};
const mapDistpatchToProps = distpatch => {
  return {
    getUsers: () => {
      distpatch(getUsers());
    },
    getFavorites: () => {
      distpatch(getFavorites());
    }
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(Profil);
