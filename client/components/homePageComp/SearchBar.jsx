import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

function SearchBar() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    // event.preventDefault();

    const bodyObject = {
      searchTerm: name,
    };

    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(bodyObject), // req.body.searchTerm
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('❌❌ Error in Post Fetch ❌❌', err));
  };

  return (
    <div className="inputBox">
      <form onSubmit={handleSubmit}>
        <label>
          Search for the food you ate today:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" className="addBtn" />
      </form>
    </div>
  );
}

export default SearchBar;
