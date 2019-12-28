import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import MenuAppBar from "../components/appbar";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { getEvents } from "../_actions/events";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "../css/home.css";

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getEvents();
  }
  render() {
    const { dataCategories, isLoading, error } = this.props.categories;
    const { dataEvents } = this.props.events;

    if (isLoading) {
      return (
        <div>
          <h1>isLoading</h1>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <h1>Error</h1>
        </div>
      );
    }

    return (
      <div>
        <MenuAppBar />
        <div style={{ textAlign: "center" }}>
          <Typography variant="h3">Category</Typography>
          <Grid container>
            {dataCategories.map((item, index) => {
              return (
                <Grid xs="2" className="category">
                  <Button style={{ color: "white", fontWeight: "bold" }}>
                    {item.name}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Typography variant="h3">Today</Typography>
          <Grid container>
            {dataEvents.map((data, index) => {
              return (
                <Card
                  style={{
                    width: "400px",
                    margin: "40px",
                    textAlign: "justify",
                    maxHeight: "500px"
                  }}
                >
                  <CardActionArea>
                    <CardMedia component="img" height="300" image={data.img} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                      </Typography>
                      <Typography>{data.startTime}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    },
    getEvents: () => {
      dispatch(getEvents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
