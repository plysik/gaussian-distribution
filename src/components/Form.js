import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles, TextField, Grid, Button } from "@material-ui/core";
import classNames from "classnames";
import Actions, { actionBuilder } from "../actions";
import { capitalize } from "../utils/strings";

class Form extends Component {
  bindOnChange = field => {
    const actionName = `update${capitalize(field)}`;
    const { dispatch } = this.props;
    return e => {
      dispatch(actionBuilder(Actions[actionName], parseInt(e.target.value)));
    };
  };
  render() {
    const { classes, rollCount, diceCount, diceMax } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={16} justify="center">
          <Grid item>
            <TextField
              id="outlined-dense"
              label="rollCount"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              type="number"
              variant="outlined"
              value={rollCount}
              onChange={this.bindOnChange("rollCount")}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-dense"
              label="diceCount"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              type="number"
              variant="outlined"
              value={diceCount}
              onChange={this.bindOnChange("diceCount")}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-dense"
              label="diceMax"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              type="number"
              variant="outlined"
              value={diceMax}
              onChange={this.bindOnChange("diceMax")}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Recalculate
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    rollCount: state.get("rollCount"),
    diceCount: state.get("diceCount"),
    diceMax: state.get("diceMax")
  };
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  gridItem: {}
});

export default withStyles(styles)(connect(mapStateToProps)(Form));
