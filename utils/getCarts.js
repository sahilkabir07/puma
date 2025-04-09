const getCart = async (token) => {
  try {
    const res = await fetch("http://localhost:5000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`, // Ensure token is sent in the headers
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cart: " + res.statusText); // More specific error message
    }

    const data = await res.json();

    // Ensure 'cart' exists in the response before returning
    if (!data.cart) {
      throw new Error("Cart data is missing in the response.");
    }

    return data.cart; // Return the cart items
  } catch (error) {
    console.error("Error fetching cart:", error.message); // Log error
    throw error; // Propagate error to the calling function
  }
};

export default getCart;
