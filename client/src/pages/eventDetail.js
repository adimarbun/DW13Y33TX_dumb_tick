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

class EventsDetail extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <div style={{ textAlign: "center" }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsDetail);
