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

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/Review" element={<Review />} />





            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
<Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;