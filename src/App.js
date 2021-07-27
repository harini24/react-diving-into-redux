import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';
import Test from './components/Test'
function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <React.Fragment>
      <Test></Test>
      {/* <Header />
      {isAuth ? < UserProfile /> : <Auth />}
      <Counter /> */}
    </React.Fragment>
  );
}

export default App;
