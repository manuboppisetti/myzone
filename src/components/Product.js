import React from 'react';

const Product = ({ product }) => {
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <li>
            {product.name} - ${product.price}
            <button onClick={addToCart}>Add to Cart</button>
        </li>
    );
};

export default Product;
