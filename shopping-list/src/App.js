import React from 'react';
import Product from './Product';
import ProductList from './ProductList';
import Button from './Button';

const products = [
  {
    productName: 'Producto 1',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 10,
    quantity: 1,
  },
  {
    productName: 'Producto 2',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 5,
    quantity: 3,
    category: 'Fresh'
  },
  {
    productName: 'Producto 3',
    price: 20,
    quantity: 1,
    category: 'Cooked'
  },
  {
    productName: 'Producto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 8,
    quantity: 2,
    category: 'Frozen'
  }
];

class App extends React.Component {
  render() {
    return (
      <ProductList>
          {products.map((product, index) =>
            <Product
              key={index}
              productName={product.productName}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              category={product.category} />
          )}
      <Button />
      </ProductList>
    );
  }
}

export default App;
