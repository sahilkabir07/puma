import { useState, useEffect } from "react";

const useLikes = () => {
    const [likedItems, setLikedItems] = useState(() => {
        const storedLikes = localStorage.getItem("likedProducts");
        return storedLikes ? JSON.parse(storedLikes) : {};
    });

    useEffect(() => {
        localStorage.setItem("likedProducts", JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLike = (item) => {
        setLikedItems((prevLikes) => {
            const updatedLikes = { ...prevLikes };
            if (updatedLikes[item.id]) {
                delete updatedLikes[item.id];
            } else {
                updatedLikes[item.id] = item;
            }
            return updatedLikes;
        });
    };

    return { likedItems, toggleLike };
};

export default useLikes;
