import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  handleClick() {
    console.log('Calculado total');
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn" type="button" name="button">
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  label: 'Calcular total'
};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
