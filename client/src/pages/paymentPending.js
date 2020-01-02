import React, { Component } from "react";
import "../css/payment.css";
import MenuAppBar from "../components/appbar";
import Footer from "../components/footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getOrder, getOrderPending } from "../_actions/orders";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import Axios from "axios";

class PaymentPending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      dataOrders: []
    };
    this.onClick.bind(this);
  }

  //put confirm.
  onClick = orderId => event => {
    event.preventDefault();
    const token = localStorage.getItem("tokenn");
    const data = this.state.dataOrders;
    const status_id = 1;

    console.log(orderId);
    if (data !== undefined) {
      alert("thank you for you payment");
      Axios({
        method: "PUT",
        url: `http://localhost:5000/api/v1/order/${orderId}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          status: status_id
        }
      }).then(respons => {
        window.location = "/paymentPending";
        this.setState({
          status: respons.data
        });
      });
    } else {
      alert("authorized");
    }
  };

  componentDidMount() {
    this.props.getOrderPending();
  }
  render() {
    const { dataOrderPending } = this.props.order;
    console.log(dataOrderPending);
    // this.state.dataOrders = dataOrder.titleEvent;
    // let startTime = `"${dataOrderPending.events.startTime}"`;
    return (
      <div>
        <MenuAppBar />
        {dataOrderPending.map((item, index) => {
          return (
            <Grid className="container">
              <Grid xs={6} className="payment">
                <Typography variant="h4">Payment</Typography>
              </Grid>
              <Paper style={{ marginBottom: "100px" }}>
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
                      </Grid>
                    </Grid>
                    <Grid container className="gridBarcode">
                      <Grid xs={10}>
                        <Typography>{item.events.title}</Typography>
                        <Typography>
                          {/* {startTime.slice(1, 11)} at {startTime.slice(12, 17)} */}
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
                  <Grid style={{ margin: "20px" }}>
                    <Typography variant="h5">Shoping Summary</Typography>
                    <Grid container>
                      <Grid xs={10}>
                        <Typography>
                          Total Price ({item.quantity} Item )
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography>Rp.{item.totalPrice}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className="prove">
                    <Typography variant="h4">Prove of payment</Typography>
                  </Grid>
                  <Grid container style={{ paddingBottom: "50px" }}>
                    <Grid xs={10}>
                      <img
                        width="150px"
                        height="150px"
                        src="https://i.ytimg.com/vi/EMK0_pVz_l4/maxresdefault.jpg"
                      ></img>
                    </Grid>
                    <Grid xs={2}>
                      <Button
                        onClick={this.onClick(item.id)}
                        variant="contained"
                        color="secondary"
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.orderPending
  };
};

const mapDistpatchToProps = distpatch => {
  return {
    getOrderPending: () => {
      distpatch(getOrderPending());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDistpatchToProps)(PaymentPending)
);
