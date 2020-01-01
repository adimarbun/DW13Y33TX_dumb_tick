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
import React, { Component } from "react";
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
class EventsDetail extends Component {
  state = {
    category: []
  };

  componentDidMount() {
    this.props.getEvent(this.props.event_id);
  }
  render() {
    const { event } = this.props.event;
    let startDate = `"${event.startTime}"`;
    let endDate = `"${event.endTime}"`;
    console.log(event.name);

    return (
      <div>
        <MenuAppBar />
        <Container style={{ marginTop: "50px" }}>
          <Card>
            <CardMedia
              component="img"
              alt={event.title}
              height="300"
              image={event.img}
              title={event.title}
            />
            <CardContent>
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
                <Grid xs={2}>dd</Grid>
                <Grid>
                  <Button variant="contained" color="secondary">
                    Buy
                  </Button>
                </Grid>
              </Grid>
              <Typography
                variant="body1"
                style={{ marginTop: "30px", marginBottom: "10px" }}
              ></Typography>
              <Divider />
              <Grid container>
                <Grid xs={4}>
                  <Grid>
                    <Typography variant="h4" style={{ marginBottom: "20px" }}>
                      Hosted By
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={4}>
                  <Grid>
                    <Typography variant="h4" style={{ marginBottom: "20px" }}>
                      Date & Time
                    </Typography>
                    <Grid container>
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
                    <Grid container>
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
            </CardContent>
          </Card>
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
                  <img src="https://jakartabytrain.files.wordpress.com/2013/05/gelora-bung-karno-main-stadium-map.jpg"></img>
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
