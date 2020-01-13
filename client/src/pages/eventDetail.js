import MenuAppBar from "../components/appbar";
import Footer from "../components/footer";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";
import EventIcon from "@material-ui/icons/Event";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { Component } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEvent } from "../_actions/event";
import {
  Container,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Divider,
  Grid
} from "@material-ui/core";
import Axios from "axios";
import { URL_API } from "../config/constant";

class EventsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      event: "",
      quantity: 1,
      totalPrice: "",
      status: 2,
      attachment: ""
    };
  }

  IncrementItem = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  DecreaseItem = () => {
    this.setState({
      quantity: this.state.quantity !== 0 ? (this.state.quantity -= 1) : 0
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem("tokenn");
    const data = {
      event: this.state.event,
      quantity: this.state.quantity,
      totalPrice: this.state.price * this.state.quantity,
      status: this.state.status,
      attachment: this.state.attachment
    };

    Axios({
      method: "POST",
      url: `${URL_API}api/v1/order`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    }).then(response => {
      // this.setState({ data: response.data });
      window.location = "/order/" + response.data.id;
      console.log(response.data);
    });
  };

  componentDidMount() {
    this.props.getEvent(this.props.event_id);
  }
  render() {
    const { event } = this.props.event;
    let startDate = `"${event.startTime}"`;
    let endDate = `"${event.endTime}"`;
    this.state.event = event.id;
    this.state.price = event.price;

    return (
      <div>
        <MenuAppBar />
        <Container style={{ marginTop: "50px" }}>
          <Grid className="eventDetail">
            <CardMedia
              component="img"
              alt={event.title}
              height="600"
              image={event.img}
              title={event.title}
            />
            <CardContent>
              <form noValidate onSubmit={this.onSubmit}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Typography variant="h4" color="inherit">
                    {event.title}
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    Rp.{event.price}
                  </Typography>
                </div>
                <Grid container>
                  <Grid xs={9}>
                    <Typography>{event.category}</Typography>
                  </Grid>
                  <Grid xs={2} container>
                    <Button onClick={this.DecreaseItem} variant="outlined">
                      <RemoveIcon />
                    </Button>
                    <Typography variant="h4" style={{ margin: "0 10px" }}>
                      {this.state.quantity}
                    </Typography>
                    <Button onClick={this.IncrementItem} variant="outlined">
                      <AddIcon />
                    </Button>
                  </Grid>
                  <Grid>
                    <Button variant="contained" color="secondary" type="submit">
                      Buy
                    </Button>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  style={{ marginTop: "30px", marginBottom: "10px" }}
                ></Typography>
                <Divider />
                <Grid container style={{ marginTop: "40px" }}>
                  <Grid xs={4}>
                    <Grid>
                      <Typography variant="h4" style={{ marginBottom: "20px" }}>
                        Hosted By
                      </Typography>
                      <Grid container>
                        <img src={event.userImage} width="80px"></img>
                        <Typography variant="h5" style={{ margin: "20px 5px" }}>
                          {event.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={4}>
                    <Grid>
                      <Typography variant="h4" style={{ marginBottom: "20px" }}>
                        Date & Time
                      </Typography>
                      <Grid container style={{ marginBottom: "20px" }}>
                        <EventIcon fontSize="large" />
                        <Typography variant="h6">
                          {startDate.slice(1, 11)}-{endDate.slice(1, 11)}
                        </Typography>
                      </Grid>
                      <Grid container>
                        <WatchLaterIcon fontSize="large" />
                        <Typography variant="h6">
                          {startDate.slice(12, 17)}-{endDate.slice(12, 17)} WIB
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={4}>
                    <Grid>
                      <Typography variant="h4" style={{ marginBottom: "20px" }}>
                        Contact Person
                      </Typography>
                      <Grid container>
                        <AssignmentIndIcon fontSize="large" />
                        <Typography variant="h6">{event.name}</Typography>
                      </Grid>
                      <Grid container style={{ margin: "20px 0" }}>
                        <CallIcon fontSize="large" />
                        <Typography variant="h6">{event.noTelp}</Typography>
                      </Grid>
                      <Grid container>
                        <EmailIcon fontSize="large" />
                        <Typography variant="h6">{event.email}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <div style={{ margin: "40px", textAlign: "justify" }}>
                <Typography variant="h5">Events Direction</Typography>
                <p>{event.description}</p>
              </div>
            </Grid>
            <Grid>
              <div style={{ margin: "40px", textAlign: "justify" }}>
                <Typography variant="h5">Location</Typography>
                <p>
                  <RoomIcon />
                  {event.address}
                </p>
                <div>
                  <iframe src={event.urlMaps} width="400" height="300"></iframe>
                </div>
                <Typography style={{ margin: "10% 0" }} variant="h4">
                  Share Event
                </Typography>
                <Grid container>
                  <Grid>
                    <Button
                      style={{ marginRight: "20px" }}
                      variant="contained"
                      color="primary"
                    >
                      <TwitterIcon />
                      TWITTER
                    </Button>
                    <Button
                      style={{ marginRight: "20px" }}
                      variant="contained"
                      color="primary"
                    >
                      <FacebookIcon /> FACEBOOK
                    </Button>
                    <Button
                      style={{ marginRight: "20px" }}
                      variant="contained"
                      color="primary"
                    >
                      <LinkIcon />
                      COPY LINK
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    event_id: ownProps.match.params.id,
    event: state.event
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getEvent: event_id => {
      dispatch(getEvent(event_id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventsDetail)
);
