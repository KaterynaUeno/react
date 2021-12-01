import React, { useState, useContext, useEffect } from "react";
// import { useCallback } from "react";

const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [cocktail, setCocktail] = useState([]);
  const [id] = useState([]);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      // console.log(data);
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

  const fetchSingleCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${singleUrl}${id}`);
      const data = await response.json();
      console.log(data);
      // const response = await fetch(`${singleUrl}${id}`);
      // const singleData = await response.json();
      // console.log(singleData);
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
        } = data.drinks[0];
        const newCocktail = {
          name,
          image,
          info,
        };

        setCocktail(newCocktail);
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleCocktail();
  }, []);
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
