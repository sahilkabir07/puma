import React, { useState, useEffect } from "react";
import getCart from "../../../utils/getCarts";

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadingActions, setLoadingActions] = useState({
        decrease: false,
        remove: false,
        clear: false,
    });

    const token = localStorage.getItem("token");


    if (!token) {
        return <div className="text-center text-red-500">You must be logged in to view the cart.</div>;
    }

    const fetchCartItems = async () => {
        setLoading(true);
        try {
            const data = await getCart(token);
            setCartItems(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const decreaseQuantity = async (itemId) => {
        if (loadingActions.decrease) return; // Prevent multiple requests
        setLoadingActions((prev) => ({ ...prev, decrease: true }));

        try {
            const res = await fetch(`http://localhost:5000/api/cart/decrease/${itemId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) throw new Error("Failed to decrease quantity");
            fetchCartItems();
        } catch (error) {
            console.error("Error decreasing quantity:", error.message);
        } finally {
            setLoadingActions((prev) => ({ ...prev, decrease: false }));
        }
    };

    const removeItem = async (itemId) => {
        if (loadingActions.remove) return;
        setLoadingActions((prev) => ({ ...prev, remove: true }));

        try {
            const res = await fetch(`http://localhost:5000/api/cart/remove/${itemId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) throw new Error("Failed to remove item");
            fetchCartItems();
        } catch (error) {
            console.error("Error removing item:", error.message);
        } finally {
            setLoadingActions((prev) => ({ ...prev, remove: false }));
        }
    };

    const clearCart = async () => {
        if (loadingActions.clear) return; // Prevent multiple requests
        setLoadingActions((prev) => ({ ...prev, clear: true }));

        try {
            const res = await fetch("http://localhost:5000/api/cart/clear", {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) throw new Error("Failed to clear cart");
            fetchCartItems();
        } catch (error) {
            console.error("Error clearing cart:", error.message);
        } finally {
            setLoadingActions((prev) => ({ ...prev, clear: false }));
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    };

    return (
        <div className="min-h-screen pt-24 pb-24 bg-gray-100">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-6 mt-10">Your Cart</h1>

                {loading ? (
                    <p className="text-gray-500 text-center">Loading cart...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">Failed to load cart. Please try again later.</p>
                ) : cartItems.length > 0 ? (
                    <>
                        <div className="flex justify-end mb-4 mr-6">
                            <button
                                onClick={clearCart}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                            >
                                Clear Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-32 h-32 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
                                    <p className="text-lg text-gray-600">{item.price}</p>
                                    <div className="flex items-center gap-3 mt-3">
                                        <button
                                            onClick={() => decreaseQuantity(item._id)}
                                            className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => removeItem(item._id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded-full"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end p-4 text-lg">
                            <p>Total: ${calculateTotal().toFixed(2)}</p>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default CartItems;
