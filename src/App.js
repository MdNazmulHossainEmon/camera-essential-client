import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Explore from './components/Explore/Explore';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import Review from './components/Dashboard/Review/Review';
import Login from './components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/Review" element={<Review />} />

              <Route path="/purchase" element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
              } />

              <Route path="/login" element={<Login />} />




              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;