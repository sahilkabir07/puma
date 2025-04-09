import React, { createContext, useState, useEffect } from "react";
import menProducts from "./constants/MenProducts.json"
import womenProducts from "./constants/WomenCardsData.json";
import kidsProducts from "./constants/KidsProductsInfo.json";
import sportsProducts from "./constants/SportsData.json";
import trendingProducts from "./constants/TrendingProducts.json";
import collaborationProducts from "./constants/CollaborationInfo.json";



export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const mergedProducts = [...menProducts, ...womenProducts, ...kidsProducts, ...collaborationProducts, ...sportsProducts, ...trendingProducts];
        setAllProducts(mergedProducts);
    }, []);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, setSearchResults, allProducts }}>
            {children}
        </SearchContext.Provider>
    );
};
