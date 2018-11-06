import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
/* ----------------------- */
import { BarPanel, Header } from "../components";
import Form from "../components/Form";
import Year from "../components/Year";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Gaussian Distribution
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Gaussian Distribution
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              The Gaussian distribution is a continuous function which
              approximates the exact binomial distribution of events.
              <br />
              Here you can see the example distribution shown on dice rolling.
            </Typography>
            <Header />
            <Form />
          </div>
        </div>
        <div className={classes.layout}>
          <BarPanel />
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Gaussian Distribution
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Brought to you by <a href="https://github.com/plysik">Piotr Łysik</a>{" "}
          with 💖 and <a href="https://material-ui.com/">Material-UI</a> &copy;{" "}
          <Year />
        </Typography>
      </footer>
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
