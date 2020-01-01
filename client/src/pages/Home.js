import React, { Component } from "react";
import Spinner from "react-spinner-material";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import MenuAppBar from "../components/appbar";
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { getEvents } from "../_actions/events";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "../css/home.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Footer from "../components/footer";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      search: "",
      isloading: false
    };
    this.onClick = this.onClick.bind(this);
  }
  // FAVORITES
  onClick = item_id => event => {
    event.preventDefault();

    const token = localStorage.getItem("tokenn");

    alert("you like event");
    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/favorit",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        eventId: item_id
      }
    })
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ data: err, isLoading: false });
      });
  };
  componentDidMount() {
    this.props.getCategories();
    this.props.getEvents();
  }

  renderEvent = event => {
    return (
      <Card
        style={{
          width: "400px",
          margin: "20px",
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
            Rp.{event.price}
          </Button>
          <CardMedia component="img" height="300" image={event.img} />
          <CardContent>
            <Grid container>
              <Grid xs="10">
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title.substring(0, 25) + "..."}
                </Typography>
              </Grid>
              <Grid>
                <Fab
                  aria-label="like"
                  color="secondary"
                  onClick={this.onClick(event.id)}
                >
                  <FavoriteIcon />
                </Fab>
              </Grid>
            </Grid>
            <Link underline="none" color="inherit" href={"/event/" + event.id}>
              <Typography>{event.startTime.slice(0, 10)}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {event.description.substring(0, 200) + "..."}
              </Typography>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { dataCategories, isLoading, error } = this.props.categories;
    const { dataEvents } = this.props.events;
    const { search } = this.state;
    const filteredEvents = dataEvents.filter(item => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (isLoading) {
      return (
        <div
          style={{
            marginTop: "40vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spinner
            size={120}
            spinnerColor={"#333"}
            spinnerWidth={2}
            visible={true}
          />
          <Typography variant="h5">Please Waitt......</Typography>
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
        <div className="containerHome">
          <div className="search">
            <InputBase
              style={{ width: "95%", margin: "10px" }}
              onChange={this.onchange}
              placeholder="Search Event...."
            ></InputBase>
            <SearchIcon />
          </div>
          <Typography variant="h3">Category</Typography>
          <Grid container>
            {dataCategories.map((item, index) => {
              return (
                <Grid className="category">
                  <Button
                    href={"/category/" + item.id + "/events"}
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {item.name}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Typography variant="h3">Events</Typography>
          <Grid container>
            {filteredEvents.map((data, index) => {
              return this.renderEvent(data);
            })}
          </Grid>
        </div>
        <Footer />
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
