import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

class Header extends PureComponent {
  render() {
    return (
      <div>
        <code>
          {`Sprawdzenie dokładności rozkładu Gaussa:
        liczba losowań: ${this.props.rollCount}; 
        liczba kostek: ${this.props.diceCount};
        rozmiar kostki: k${this.props.diceMax};`}
        </code>
      </div>
    );
  }
}
Header.propTypes = {
  rollCount: PropTypes.number.isRequired,
  diceCount: PropTypes.number.isRequired,
  diceMax: PropTypes.number.isRequired
};
const mapStateToProps = (state, ownProps) => {
  return { ...state.toJS() };
};

export default connect(mapStateToProps)(Header);
