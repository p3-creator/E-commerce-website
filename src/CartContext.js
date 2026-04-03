import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.description === product.description);
            if (existing) {
                return prev.map(item =>
                    item.description === product.description
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productDesc) => {
        setCartItems(prev => prev.filter(item => item.description !== productDesc));
    };

    const updateQuantity = (productDesc, qty) => {
        if (qty < 1) return;
        setCartItems(prev => prev.map(item =>
            item.description === productDesc ? { ...item, quantity: qty } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
