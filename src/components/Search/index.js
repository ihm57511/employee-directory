import React from 'react';

const Search = (props) => {
  return (
    <>
      <div className="input-group d-flex justify-content-center">
        <input className="form-control col-2"
        onChange={event => props.handleSearch(event)}
        type='search' placeholder="Search"
        />
      </div>
    </>
  );
}

export default Search;