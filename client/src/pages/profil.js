import React, { Component } from "react";

import { Typography, Button, Grid, Paper } from "@material-ui/core";
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

import Footer from "../components/footer";
import { getUsers } from "../_actions/users";
import { getFavorites } from "../_actions/favorites";

class Profil extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getFavorites();
  }

  render() {
    const { dataUsers } = this.props.users;
    const { dataFavorites } = this.props.favorites;
    return (
      <div>
        <MenuAppBar />
        <Grid container>
          <Grid xs="4">
            <Grid className="personality">
              <Typography variant="h2">Profil</Typography>
              <Typography variant="h4">{dataUsers.name}</Typography>
              <Typography variant="h4">{dataUsers.noTelp}</Typography>
              <Typography variant="h4">{dataUsers.email}</Typography>
            </Grid>
          </Grid>
          <Grid xs="4">
            <Grid className="edit-button">
              <Button variant="contained" color="secondary">
                edit profile
              </Button>
            </Grid>
          </Grid>
          <Grid>
            <Grid className="gridfoto">
              <img className="foto" src={dataUsers.img}></img>
            </Grid>
          </Grid>
        </Grid>

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
