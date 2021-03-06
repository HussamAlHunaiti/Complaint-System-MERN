import { Link } from "react-router-dom";
import useStyles from "./styles";
import {
  Grid,
  Typography,
  Container,
  Grow,
} from "@material-ui/core";

const NotFoundPage = () => {
    const classes = useStyles();

    return (
        <Grow in>
          <Container>
            <Grid container justify="center" alignItems="stretch">
              <Grid item xs={12} sm={4}>
        <Container className={classes.notFound}>
          <Typography variant="h2">Sorry</Typography>
          <Typography variant="h5">This page cannot be found <br/> 404 Page </Typography>
          <Link to="/"> <Typography variant="h6" color="secondary"> Back to the Homepage...  </Typography></Link>
        </Container>
          </Grid>
        </Grid>
      </Container>
    </Grow>
        );
}

export default NotFoundPage
