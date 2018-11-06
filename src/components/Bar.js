import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
// import styles from "./Bar.less";

const styles = theme => ({
  bar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    textAlign: "center",
    margin: "3px"
  },
  strip: {
    border: "1px solid rgba(0,0,0,0.4)",
    minWidth: "30px",
    minHeight: "25px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

class Bar extends PureComponent {
  constructor(props) {
    super(props);
    this.BAR_BASE_HEIGHT = 3;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bar}>
        <div
          className={classes.strip}
          style={{
            height: `${this.props.rollResultCount * this.BAR_BASE_HEIGHT}px`,
            backgroundColor: this.props.backgroundColor
          }}
        >
          {this.props.rollResultCount}
        </div>
        <span>{this.props.rollResult}</span>
      </div>
    );
  }
}
export default withStyles(styles)(Bar);
