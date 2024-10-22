import React, { useState, useEffect } from 'react';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('/data/wishlist.json')
            .then(response => response.json())
            .then(data => setWishlist(data));
    }, []);

    return (
        <div>
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
