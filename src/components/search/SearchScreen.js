import React, { useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
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
          {q.length > 0 && heroesFilter.length === 0 && (
            <div className="alert alert-danger">No results</div>
          )}
          {heroesFilter?.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
