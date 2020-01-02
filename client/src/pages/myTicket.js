import React, { Component } from "react";
import "../css/payment.css";
import MenuAppBar from "../components/appbar";
import Footer from "../components/footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrderApproved } from "../_actions/orders";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import Axios from "axios";

class MyTicket extends Component {
  componentDidMount() {
    this.props.getOrderApproved();
  }
  render() {
    const { dataOrderApproved } = this.props.order;

    return (
      <div>
        <MenuAppBar />
        <Grid className="container">
          <Paper style={{ margin: "100px 0" }}>
            {dataOrderApproved.map((item, index) => {
              console.log(item.statuses.name);
              return (
                <Grid className="gridContainer">
                  <Grid className="gridTicket">
                    <Grid container style={{ backgroundColor: "#A9A9A9" }}>
                      <Grid xs={8} style={{ marginLeft: "20px" }}>
                        <Typography variant="h5">{item.users.name}</Typography>
                        <Typography>id.users</Typography>
                      </Grid>
                      <Grid xs={3} style={{ textAlign: "right" }}>
                        <Typography>
                          Face Value Rp.{item.events.price}
                        </Typography>
                        <Typography>id.{item.statuses.name}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container className="gridBarcode">
                      <Grid xs={10}>
                        <Typography>{item.events.title}</Typography>
                        <Typography>
                          {item.events.startTime.slice(0, 10)} at{" "}
                          {item.events.startTime.slice(11, 16)}
                        </Typography>
                        <Typography>{item.events.address}</Typography>
                      </Grid>
                      <Grid>
                        <img
                          style={{ width: "100px" }}
                          src="https://cdn.pixabay.com/photo/2013/07/13/10/25/qr-code-157182_960_720.png"
                        ></img>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Paper>
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orderApproved
  };
};

const mapDistpatchToProps = distpatch => {
  return {
    getOrderApproved: () => {
      distpatch(getOrderApproved());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDistpatchToProps)(MyTicket)
);
