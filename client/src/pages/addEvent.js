import React, { Component } from "react";

import { Typography, Button, Grid, Paper } from "@material-ui/core";
import MenuAppBar from "../components/appbar";
import { connect } from "react-redux";
import "../css/profil.css";
import Footer from "../components/footer";
import { getCategories } from "../_actions/categories";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { TextareaAutosize } from "@material-ui/core";

import { addEvent } from "../api/api";
import Axios from "axios";

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      title: "",
      category: "",
      startTime: "",
      endTime: "",
      price: "",
      description: "",
      address: "",
      urlMaps: "",
      img: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const token = localStorage.getItem("tokenn");

    const data = {
      title: this.state.title,
      category: this.state.category,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      urlMaps: this.state.urlMaps,
      img: this.state.img
    };

    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/event",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    }).then(response => {
      this.setState({ data: response.data, isLoading: false });
      window.location = "/";
    });
  };
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { dataCategories } = this.props.categories;

    return (
      <div>
        <MenuAppBar />
        <Grid style={{ textAlign: "center", marginTop: "30px" }}>
          <Typography variant="h3">Add New Event</Typography>
        </Grid>
        <Grid style={{ margin: "5% 20%" }}>
          <form noValidate onSubmit={this.onSubmit}>
            <Typography>Title</Typography>
            <TextField
              fullWidth
              id="title"
              value={this.state.title}
              onChange={this.onChange}
              name="title"
              placeholder="Your Event Title"
            />
            <Typography>Category</Typography>
            <TextField
              select
              fullWidth
              name="category"
              value={this.state.category}
              onChange={this.onChange}
              SelectProps={{
                native: true
              }}
            >
              {dataCategories.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </TextField>
            <Typography>Start Time</Typography>
            <TextField
              fullWidth
              value={this.state.startTime}
              onChange={this.onChange}
              type="datetime-local"
              name="startTime"
              InputLabelProps={{
                shrink: true
              }}
            />
            <Typography>End Time</Typography>
            <TextField
              fullWidth
              value={this.state.endTime}
              onChange={this.onChange}
              type="datetime-local"
              name="endTime"
              InputLabelProps={{
                shrink: true
              }}
            />
            <Typography>Price</Typography>
            <TextField
              fullWidth
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              placeholder="2000000"
            />

            <Typography>Description</Typography>
            <TextareaAutosize
              style={{ width: "100%", minHeight: "40px" }}
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            ></TextareaAutosize>
            <Typography>Address</Typography>
            <TextField
              fullWidth
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              placeholder="Event Address"
            />
            <Typography>URL Maps</Typography>
            <TextField
              fullWidth
              name="urlMaps"
              value={this.state.urlMaps}
              onChange={this.onChange}
              placeholder="URL Maps"
            />
            <Typography>Image</Typography>
            <TextField
              fullWidth
              name="img"
              value={this.state.img}
              onChange={this.onChange}
              placeholder="Your image"
            />
            <Grid style={{ textAlign: "center", margin: "50px" }}>
              <Button type="submit" variant="contained" color="primary">
                Add Event
              </Button>
            </Grid>
          </form>
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};
const mapDistpatchToProps = distpatch => {
  return {
    getCategories: () => {
      distpatch(getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AddEvent);
