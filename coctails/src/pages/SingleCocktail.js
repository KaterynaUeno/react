import React from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleCocktail = () => {
  // const [loading, setLoading] = React.useState(false);
  // const [cocktail, setCocktail] = React.useState(null);
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>Sorry cannot show the ingredients yet</h2>;
  }
  const { name, image } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
      </div>
    </section>
  );
};
export default SingleCocktail;
