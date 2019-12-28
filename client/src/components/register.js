import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Button } from "@material-ui/core";
import "../css/login.css";
import { register } from "../api/api";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      noTelp: "",
      img: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      noTelp: this.state.noTelp,
      img: this.state.img
    };

    register(newUser).then(res => {
      window.location = "/login";
    });
  }
  render() {
    return (
      <div className="form-register">
        <Typography variant="h3">Register</Typography>
        <form noValidate onSubmit={this.onSubmit}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={this.state.name}
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
            autoFocus
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Your username"
            type="username"
            id="username"
            autoComplete="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="password"
            label=" Your Password"
            name="password"
            autoComplete="current-password"
            value={this.state.password}
            type="password"
            onChange={this.onChange}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="noTelp"
            label=" Your noTelp"
            name="noTelp"
            autoComplete="current-noTelp"
            value={this.state.noTelp}
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
            name="img"
            autoComplete="current-img"
            value={this.state.img}
            type="img"
            onChange={this.onChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Registration
          </Button>
        </form>
      </div>
    );
  }
}

export default Register;
