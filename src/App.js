import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Shared/Header/Header';
// import Footer from './components/Shared/Footer/Footer';
import Explore from './components/Explore/Explore';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import Review from './components/Dashboard/Review/Review';
import Login from './components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Login/Register/Register';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Pay from './components/Dashboard/Pay/Pay';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import ManageAllOrders from './components/Dashboard/ManageAllOrders/ManageAllOrders';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          {/* <Header></Header> */}
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/review" element={<Review />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/makeAdmin" element={<MakeAdmin />} />
              <Route path="/manageProducts" element={<ManageProducts></ManageProducts>} />
              <Route path="/manageAllOrders" element={<ManageAllOrders></ManageAllOrders>} />
              {/* <Route path="/dashboardHome" element={<DashboardHome />} /> */}



              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              } >

    <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
    <Route  path={`/dashboard/review`} element={<Review></Review>}></Route>
    <Route  path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>}></Route>
    <Route  path={`/dashboard/pay`} element={<Pay></Pay>}></Route>
    <Route  path={`/dashboard/addProduct`} element={<AddProduct></AddProduct>}></Route>
    <Route  path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>}></Route>
    <Route  path={`/dashboard/manageProducts`} element={<ManageProducts></ManageProducts>}></Route>
    <Route  path={`/dashboard/manageAllOrders`} element={<ManageAllOrders></ManageAllOrders>}></Route>




    </Route>






              <Route path="/purchase" element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
              } />
    
              <Route path="/purchase/:id" element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
              } />
             

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myOrders" element={<MyOrders />} />




              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;