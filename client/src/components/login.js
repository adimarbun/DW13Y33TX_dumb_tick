import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography, Button } from "@material-ui/core";
import "../css/login.css";
import { login } from "../api/api";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(() => {
      if (localStorage.getItem("tokenn")) {
        window.location = "/";
      } else {
        alert("Wrong Password or username");
      }
    });
  }
  render() {
    return (
      <div className="form-login">
        <Typography variant="h3">Login</Typography>
        <form noValidate onSubmit={this.onSubmit}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            type="username"
            id="username"
            value={this.state.email}
            onChange={this.onChange}
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "40px" }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
