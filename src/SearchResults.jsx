import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";

const SearchResults = () => {
    const { searchQuery, searchResults } = useContext(SearchContext);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
            {searchResults.length === 0 ? (
                <p>No products found</p>
            ) : (
                <div className="pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {searchResults.map(product => (
                        <div key={product.id} className="shadow-lg rounded-2xl p-4 bg-white">
                            <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
