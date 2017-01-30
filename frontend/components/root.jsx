import React from 'react';
import { Provider } from 'react-redux';

// Components
import RouterContainer from 'components/router/router_container'

const Root = ({ store }) => (
  <Provider store={ store }>
    <RouterContainer />
  </Provider>
);

export default Root;