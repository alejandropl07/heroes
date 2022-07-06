import React from "react";
import { useForm } from "../../hooks/useForm";

const SearchScreen = () => {
  const [{searchText}, handleInputChange, reset] = useForm({ searchText: "" });
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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

            <button
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
