import React from 'react';
import HomPageComponent from '../components/HomPageComponent';
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);

// import Home from '../components/Home';
// import Profile from '../components/Profile';
// export default (
//   <Route name="app" path="/" handler={Main}>
//     <Route name="profile" path="profile/:username" handler={Profile} />
//     <DefaultRoute handler={Home} />
//   </Route>
// );