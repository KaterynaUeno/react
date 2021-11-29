import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearch(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htnlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
