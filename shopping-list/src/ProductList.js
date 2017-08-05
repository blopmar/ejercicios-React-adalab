import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="product-list">
      {this.props.children}

      </ul>

    );
  }
}

export default ProductList;
