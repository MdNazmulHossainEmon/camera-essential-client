import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const DashboardHome = () => {
    return (
        
        <BrowserRouter>
        <Header></Header>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            
          </Routes>
        </div>
      </BrowserRouter>
        
    );
};

export default DashboardHome;