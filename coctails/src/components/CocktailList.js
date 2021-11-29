import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return <h2 className="section-title">No cocktails matched your search</h2>;
  }
  return (
    <div>
      <h1>CocktailList</h1>
    </div>
  );
};

export default CocktailList;
