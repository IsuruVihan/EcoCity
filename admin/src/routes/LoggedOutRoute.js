import React from 'react';
import {useSelector} from "react-redux";
import {Outlet} from "react-router";

import Players from "../../pages/player/Players";

const LoggedOutRoute = () => {
  const {admin} = useSelector((state) => state);

  return !admin ? <Outlet/> : <Players/>;
}

export default LoggedOutRoute;
