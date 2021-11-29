import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [cocktail, setCocktail] = useState([]);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const drinksData = drinks.map((drink) => {
          const {
            idDrink,
            strAlcoholic,
            strCategory,
            strDrinkThumb,
            strDrink,
          } = drink;
          return {
            id: idDrink,
            name: strDrink,
            category: strCategory,
            image: strDrinkThumb,
            info: strAlcoholic,
          };
        });
        setCocktail(drinksData);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        loading,
        search,
        cocktail,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
