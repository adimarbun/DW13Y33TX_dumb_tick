import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import "../css/footer.css";
class Footer extends Component {
  render() {
    return (
      <Grid container className="containerfooter">
        <Grid className="gridparent">
          <div className="gridfooter">
            <Typography variant="h6">
              Tiketku is web-based paltform that provides tickets for varius
              events around sports, music, science, programming
            </Typography>
          </div>
        </Grid>
        <Grid className="gridparent">
          <div className="gridfooter">
            <Typography variant="h6">Links</Typography>
            <Typography variant="h6">Follow Us On</Typography>
            <Typography variant="h6">
              <InstagramIcon />
              Instagram
            </Typography>
            <Typography variant="h6">
              <TelegramIcon />
              Telegram
            </Typography>
          </div>
        </Grid>
        <Grid className="gridparent">
          <div className="gridfooter">
            <Typography variant="h6">Have a Question?</Typography>
            <Typography variant="h6">tiketku</Typography>
            <Typography variant="h6">support@ticketku.com</Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
