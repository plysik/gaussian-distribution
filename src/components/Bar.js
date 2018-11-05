import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
// import styles from "./Bar.less";

const styles = theme => ({
  bar: {
    display: "inline-block",
    textAlign: "center",
    margin: "3px"
  },
  strip: {
    border: "1px solid black",
    width: "30px"
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
        <span>{this.props.rollResult}</span>
        <div
          className={classes.strip}
          style={{
            height: `${this.props.rollResultCount * this.BAR_BASE_HEIGHT}px`
          }}
        >
          {this.props.rollResultCount}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Bar);
