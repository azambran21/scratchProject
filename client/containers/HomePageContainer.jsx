import React, { Component, useState, useEffect } from 'react';
import SearchBar from '../components/homePageComp/SearchBar.jsx';
import AteToday from '../components/homePageComp/AteToday.jsx';

const HomePageContainer = () => {
  //iteraet throughthe array so that you grab the info that you really want to show in the frontend(to the client)

  return (
    <div id="homePageContainer">
      <h1> Our Home Page Container </h1>
      <SearchBar />
      <AteToday />
    </div>
  );
};

export default HomePageContainer;
