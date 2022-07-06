import React from "react";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: "",
  });

  const heroesFilter = getHeroesByName();

  const handleSearch = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
