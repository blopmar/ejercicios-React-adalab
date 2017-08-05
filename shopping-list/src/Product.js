import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className='product-card'>
        <h2>{this.props.productName}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
        <p>{this.props.quantity}</p>
        <p>{this.props.category}</p>
      </div>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.oneOf(['Fresh', 'Cooked', 'Frozen', 'Non-Perishable'])
};

Product.defaultProps = {
  category: 'Non-Perishable',
  description:'Sin descripción'
};

export default Product;
