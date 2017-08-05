import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className='product-card'>
        <p className="quantity">{this.props.quantity} uds.</p>
        <h2 className="product-name">{this.props.productName}</h2>
        <p className="description">{this.props.description}</p>
        <p className="price">{this.props.price} €</p>
        <p className="category">{this.props.category}</p>
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
