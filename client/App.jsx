import React, { Component } from 'react';
import HomePageContainer from './containers/HomePageContainer.jsx';
import ProfilePageContainer from './containers/ProfilePageContainer.jsx';
import UserContainer from './containers/UserContainer.jsx';

const App = () => {
  return (
    <div id="app">
      <HomePageContainer />
      <ProfilePageContainer />
      <UserContainer />
    </div>
  );
};

export default App;
