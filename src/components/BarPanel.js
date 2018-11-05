import React, { PureComponent } from "react";
import _ from "underscore";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Bar from "./Bar";
import { Dice } from "../models";
class BarPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
  }

  calculate = () => {
    const { diceCount, diceSize, rollCount } = this.props;
    let result = [];
    for (let i = 0; i < rollCount; i++) {
      let sum = 0;
      for (let j = 0; j < diceCount; j++) {
        const dice = new Dice(diceSize);
        sum += dice.roll();
      }
      result.push(sum);
    }
    return _.groupBy(result, function(num) {
      return num;
    });
  };
  render() {
    const bars = this.calculate();
    return (
      <React.Fragment>
        {Object.keys(bars).map(key => {
          return (
            <Bar
              key={key}
              rollResult={key}
              rollResultCount={bars[key].length}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

BarPanel.propTypes = {
  rollCount: PropTypes.number.isRequired,
  diceCount: PropTypes.number.isRequired,
  diceMax: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { ...state.toJS() };
};

export default connect(mapStateToProps)(BarPanel);
