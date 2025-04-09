import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((i) => i.id === item.id);
        let updatedCart = [];

        if (existingItemIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
        } else {
            updatedCart = [...cart, { ...item, quantity: 1 }];
        }

        setCart(updatedCart);
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
