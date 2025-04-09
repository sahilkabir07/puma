import React from "react";
import useLikes from "./Liked";

const LikedProducts = () => {
    const { likedItems, toggleLike } = useLikes();
    const likedArray = Object.values(likedItems);

    return (
        <div className="p-8 pt-32">
            <h1 className="text-3xl font-bold text-center mb-6">Liked Products</h1>
            {likedArray.length === 0 ? (
                <p className="text-center text-gray-500">No liked products yet.</p>
            ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                    {likedArray.map((item) => (
                        <div
                            key={item.id}
                            className="w-[250px] bg-white shadow-md rounded-lg p-4 flex flex-col transform transition-transform duration-300 hover:scale-110"
                        >
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    className="w-full h-48 object-cover rounded-md mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-800 font-semibold">{item.price}</p>
                                    <button
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => toggleLike(item)}
                                    >
                                        Unlike
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedProducts;
