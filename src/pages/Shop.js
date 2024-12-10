import React, { useState } from 'react';
import './Shop.css'; // Adjusted to match the relative path in src/assets/pages
import christmasTree from '../assets/onlinemall/ChristmasTreeRickyRainFrog.jpg';
import ricky from '../assets/onlinemall/RickyRainFrog.jpg';
import headphones from '../assets/onlinemall/RickyRainFrogHeadphones.jpg';
import rubberRing from '../assets/onlinemall/RickyRainFrogRubberRing.jpg';
import vampire from '../assets/onlinemall/RickyRainFrogVampire.jpg';
import santa from '../assets/onlinemall/SantaRickyRainFrog.jpg';

const products = [
  { id: 1, name: 'Christmas Tree Ricky Rain Frog', price: 50, image: christmasTree },
  { id: 2, name: 'Ricky Rain Frog', price: 28, image: ricky },
  { id: 3, name: 'Ricky Rain Frog with Headphones', price: 40, image: headphones },
  { id: 4, name: 'Ricky Rain Frog with Rubber Ring', price: 40, image: rubberRing },
  { id: 5, name: 'Vampire Ricky Rain Frog', price: 40, image: vampire },
  { id: 6, name: 'Santa Ricky Rain Frog', price: 35, image: santa },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`${product.name} has been added to your cart!`);
    setTimeout(() => setNotification(''), 3000); // Clear the notification after 3 seconds
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shop-container">
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}

      <h1>Ricky Rain Frog Online Store</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p className="total-price">Total: ${calculateTotal()}</p>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;