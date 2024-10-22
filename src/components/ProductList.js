import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = () => {
    const [Products, setProducts] = useState([]);
const arr=[
    { "id": 1, "name": "Product 1", "price": 100 },
    { "id": 2, "name": "Product 2", "price": 200 },
    { "id": 3, "name": "Product 3", "price": 300 }
]

    useEffect(() => {
        
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    console.log(Products)

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {arr.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};


export default ProductList;
