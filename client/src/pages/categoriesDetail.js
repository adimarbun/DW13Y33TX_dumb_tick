import React, { Component } from "react";

import { Typography, Button, Grid, Paper } from "@material-ui/core";
import MenuAppBar from "../components/appbar";
import { connect } from "react-redux";
import "../css/profil.css";
import Footer from "../components/footer";
import { getEventCategory } from "../_actions/categoryDetail";
import { getCategory } from "../_actions/categories";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

class CategoryDetail extends Component {
  componentDidMount() {
    this.props.getEventCategory(this.props.category_id);
    this.props.getCategory(this.props.category_id);
  }

  render() {
    const { data } = this.props.categoryEvent;
    const { dataCategory } = this.props.category;
    console.log(dataCategory.name);
    return (
      <div>
        <MenuAppBar />
        <Grid style={{ margin: "20px 0 0 10%" }}>
          <Typography variant="h3">{dataCategory.name}</Typography>
        </Grid>
        <Grid container>
          {data.map(data => {
            return (
              <Card
                style={{
                  width: "400px",
                  margin: "50px",
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
                    Rp.{data.price}
                  </Button>
                  <CardMedia component="img" height="300" image={data.img} />
                  <CardContent>
                    <Grid container>
                      <Grid xs="10">
                        <Typography gutterBottom variant="h5" component="h2">
                          {data.title.substring(0, 25) + "..."}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Fab
                          aria-label="like"
                          color="secondary"
                          onClick={() => alert("you liked")}
                        >
                          <FavoriteIcon />
                        </Fab>
                      </Grid>
                    </Grid>
                    <Link
                      underline="none"
                      color="inherit"
                      href={"/event/" + data.id}
                    >
                      <Typography>{data.startTime.slice(0, 10)}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {data.description.substring(0, 200) + "..."}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category_id: ownProps.match.params.id,
    categoryEvent: state.categoryEvent,
    category: state.category
  };
};
const mapDistpatchToProps = distpatch => {
  return {
    getEventCategory: category_id => {
      distpatch(getEventCategory(category_id));
    },
    getCategory: category_id => {
      distpatch(getCategory(category_id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDistpatchToProps)(CategoryDetail)
);
