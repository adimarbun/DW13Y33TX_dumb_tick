import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Login from "./login";
import Register from "./register";
import Backdrop from "@material-ui/core/Backdrop";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "50px"
  },
  title: {
    flexGrow: 1
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  dropDownMenu: {
    width: "200px"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  // const auth = true;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //   setAuth(event.target.checked);
  // };
  var token = localStorage.getItem("tokenn");
  var auth = false;
  if (token === null) {
    auth = false;
  } else {
    auth = true;
  }

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //handle Modal login

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  //handle Modal register

  const [openModalRegister, setOpenModalRegister] = React.useState(false);

  const handleOpenModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  //clear local storage
  const signOut = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" style={{ padding: "10px 0" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link href="/" variant="inherit" color="inherit" underline="none">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                TIKETKU
              </Typography>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: 40 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <div className={classes.dropDownMenu}>
                  <Link href="/profil" underline="none" color="inherit">
                    <MenuItem>
                      <PermIdentityIcon />
                      <Typography>Profile</Typography>
                    </MenuItem>
                  </Link>
                  <Link href="/myTicket" underline="none" color="inherit">
                    <MenuItem>
                      <ConfirmationNumberIcon />
                      <Typography>My Ticket</Typography>
                    </MenuItem>
                  </Link>
                  <Link href="/paymentPending" underline="none" color="inherit">
                    <MenuItem>
                      <LocalAtmIcon />
                      <Typography>Payment</Typography>
                    </MenuItem>
                  </Link>
                  <Link href="/addEvent" underline="none" color="inherit">
                    <MenuItem>
                      <EventIcon />
                      <Typography>add Event</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={signOut}>
                    <ExitToAppIcon />
                    <Typography>Logout</Typography>
                  </MenuItem>
                </div>
              </Menu>
            </div>
          )}
          {auth || (
            <div>
              <Button
                onClick={handleOpenModalRegister}
                variant="outlined"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginRight: "40px"
                }}
              >
                Register
              </Button>
              <Button
                onClick={handleOpenModal}
                variant="outlined"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginRight: "40px"
                }}
              >
                Login
              </Button>
            </div>
          )}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={openModal}>
              <div>
                <Login />
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModalRegister}
            onClose={handleCloseModalRegister}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={openModalRegister}>
              <div>
                <Register />
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
