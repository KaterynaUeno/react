import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktail, loading } = useGlobalContext();
  // console.log(cocktail);
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return <h2 className="section-title">No cocktails matched your search</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map((cocktailItem) => {
          return <Cocktail key={cocktailItem.id} {...cocktailItem} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
