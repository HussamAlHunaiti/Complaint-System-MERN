import {
  AppBar,
  Typography,
  Avatar,
  Grid,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar>H</Avatar>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {"User Name"}
            </Typography>
            <div className={classes.dashboard}>
            <Link to="/dashboard" className={classes.link}>
              {"Dashboard"}
            </Link>
            <Link to="/" className={classes.link}>
              {"Create"}
            </Link>
            </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
