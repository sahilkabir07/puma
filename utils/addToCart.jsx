import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const addToCart = async (token, product) => {
    if (!token) {
        throw new Error("User must be logged in to add items to the cart");
    }

    try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;
        console.log(userId);

        if (!userId) {
            throw new Error("User ID not found in token");
        }
        let rawPrice = product.price;
        console.log('Product price received:', rawPrice);

        if (!rawPrice) {
            throw new Error('Product price is missing');
        }

        if (typeof rawPrice === 'string') {
            rawPrice = rawPrice.replace(/[^\d.]/g, ''); // remove ₹, Rs., etc.
        }

        const price = parseFloat(rawPrice);
        if (isNaN(price)) {
            throw new Error(`Invalid price format: ${product.price}`);
        }
        if (!product.id) {
            throw new Error("Product ID is missing");
        }
        const payload = {
            productId: product.id.toString(),
            name: product.name,
            img: product.img,
            price,
            quantity: 1,
            userId,
        };

        console.log("🛒 Sending to backend:", payload);

        const response = await axios.post(
            "http://localhost:5000/api/cart/add",
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Send token as Authorization header
                },
            }
        );

        // Return the response data from the backend
        return response.data;
    } catch (error) {
        // Handle errors and provide a meaningful message
        console.error("Error adding to cart:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "An error occurred while adding to the cart");
    }
};

export default addToCart;
