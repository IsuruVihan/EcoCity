import React from 'react';
import {useSelector} from "react-redux";
import {Outlet} from "react-router";

import Login from "../../pages/login/Login";

const AdminRoute = () => {
  const {admin} = useSelector((state) => state);

  return admin ? <Outlet/> : <Login/>;
}

export default AdminRoute;
