import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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
  rollCount: PropTypes.number,
  diceCount: PropTypes.number,
  diceMax: PropTypes.number
};
Header.defaultProps = {
  rollCount: 1000,
  diceCount: 3,
  diceMax: 6
};
export default Header;
