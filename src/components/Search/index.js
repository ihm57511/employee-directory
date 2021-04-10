import React from 'react';

const Search = (props) => {
  return (
    <>
      <div className="input-group">
        <input className="form-control col-2"
        onChange={event => props.handleSearch(event)}
        type='search'
        />
      </div>
    </>
  );
}

export default Search;