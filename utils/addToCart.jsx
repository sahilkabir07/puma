import axios from "axios";
// import { jwt } from "jwt-decode"; // Importing the default function correctly

const addToCart = async (product, token) => {
    // Check if the token exists
    if (!token) {
        throw new Error("User must be logged in to add items to the cart");
    }

    try {
        // Decode the JWT token to extract the userId
        const decodedToken = jwt(token);
        const userId = decodedToken.userId;  // Assuming your JWT contains a `userId` property

        // Check if the userId exists in the token
        if (!userId) {
            throw new Error("User ID not found in token");
        }

        // Validate the price of the product
        const price = parseFloat(product.price);
        if (isNaN(price)) {
            throw new Error("Invalid price format");
        }

        // Ensure the product has a valid ID
        if (!product.id) {
            throw new Error("Product ID is missing");
        }

        // Prepare the payload to be sent to the backend
        const payload = {
            productId: product.id.toString(), // Convert product ID to string
            name: product.name,
            img: product.img,
            price,  // Store price as a number
            quantity: 1, // Add one unit of the product by default
            userId,  // Include userId from the decoded token
        };

        console.log("🛒 Sending to backend:", payload);

        // Make the API call to add the item to the cart
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
