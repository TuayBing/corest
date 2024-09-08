import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Index';
import Login from "./components/Login/Index";
import ForgetBox from "./components/Login/ForgetBox";
import Setting from './components/Setting/index';
import User from './components/Setting/User/Index';
import Restaurant from './components/Setting/Restaurant/Index';
import Food from './components/Setting/Food/Index';
import Promotion from './components/Setting/Promotion/Index';
import Inventory from './components/Setting/Inventory/Index';
import Table from './components/Setting/Table/Index';
import Delivery from './components/Setting/Delivery/Index';
import Permission from './components/Setting/Permission/Index';
import Printer from './components/Setting/Printer/Index';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgottenpassword" element={<ForgetBox />} />
        <Route path="/setting/company" element={<Setting />} />
        <Route path="/setting/restaurant" element={<Restaurant />} />
        <Route path="/setting/food" element={<Food />} />
        <Route path="/setting/promotion" element={<Promotion />} />
        <Route path="/setting/inventory" element={<Inventory />} />
        <Route path="/setting/table" element={<Table />} />
        <Route path="/setting/delivery" element={<Delivery />} />
        <Route path="/setting/permission" element={<Permission />} />
        <Route path="/setting/printer" element={<Printer />} />

        <Route path="/setting/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
