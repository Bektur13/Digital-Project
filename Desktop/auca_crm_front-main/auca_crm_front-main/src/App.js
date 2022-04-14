import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
// import Dashboard from './pages/dashboard';
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login";
import Products from './pages/products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      {/* <Route exact path='/' component={Dashboard} /> */}
      <Route exact path='/' component={Auth} />
      <Route exact path='/login' component={Login} />
      <Route path='/subjects' component={Manage} />
      <Route path='/budget' component={Products} />
    </div>
  );
}

export default App;