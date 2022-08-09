import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51LUfAkGrEqE3ysiS1UdSZYvCi03I93814O50oSarK4Xi5WyuBmYyM465N338J32mSceTqDp9dqmuq4XgrhSH6DWz00rJk7sXNi');

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={
            <>
              <Header /> 
              <Home />
            </>} 
          />

          <Route path='/checkout' element={
            <>
              <Header /> 
              <Checkout />
            </>} 
          />

          <Route path='/payment' element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements> 
            </>}
          />

          <Route path='/orders' element={
            <>
              <Header/>
              <Orders/>
            </>}
          />

          <Route path='/login' element={
            <>
              <Login/>
            </>} 
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
