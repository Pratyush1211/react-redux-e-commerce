import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CircularProgress, Container, Toolbar } from '@material-ui/core';

import store, { persistor } from './reducers/store';

import Nav from './components/Nav';
import Authentication from './pages/Authentication';
import { PersistGate } from 'redux-persist/integration/react';

const HomePage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const LogoutPage = lazy(() => import('./pages/Logout'));
const MyOrders = lazy(() => import('./pages/MyOrders'));
const UserOrders = lazy(() => import('./pages/UserOrders'));
const AdminBookList = lazy(() => import('./pages/AdminBookList'));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Router basename="/react-redux-e-commerce">
            <Nav />
            <Toolbar />
            <Suspense fallback={<CircularProgress />}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Authentication>
                  <Route path="/book-list" exact component={AdminBookList} />
                  <Route path="/users" exact component={UsersPage} />
                  <Route path="/users/:userId/orders" exact component={UserOrders} />
                  <Route path="/logout" exact component={LogoutPage} />
                  <Route path="/my-orders" exact component={MyOrders} />
                </Authentication>
              </Switch>
            </Suspense>
          </Router>
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default App;
