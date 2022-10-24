import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import {Routes, Route, useNavigate} from "react-router";
import {ToastContainer} from 'react-toastify';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CheckYourEmail from "./pages/CheckYourEmail/CheckYourEmail";
import Dashboard from "./pages/Dashboard/Dashboard";
import GarbageHubs from "./pages/Database/GarbageHubs/GarbageHubs";
import TruckDrivers from "./pages/Database/TruckDrivers/TruckDrivers";
import GarbageTrucks from "./pages/Database/GarbageTrucks/GarbageTrucks";
import MaintenanceJobs from "./pages/MaintenanceJobs/MaintenanceJobs";
import Houses from "./pages/Database/Houses/Houses";
import NFCTags from "./pages/Database/NFCTags/NFCTags";
import AreaMap from "./pages/AreaMap/AreaMap";
import Complaints from "./pages/Complaints/Complaints";
import GarbageCollectionRides from "./pages/GarbageCollectionRides/GarbageCollectionRides";
import Database from "./pages/Database/Database";
import MaintenanceCrewMembers from "./pages/Database/MaintenanceCrewMembers/MaintenanceCrewMembers";
import Admin from "./pages/Admin";
import readSession from "./helpers/SessionHelper";
import {loginRememberedUser} from "./redux/reducers/authSlice";

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
    useEffect(() => {
        if (!isUserLoggedIn) {
            const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
            if (rememberedUser) {
                console.log(rememberedUser);
                dispatch(loginRememberedUser(rememberedUser));
            } else {
                navigate('/login');
            }
        }
    }, [isUserLoggedIn])
    return (
        <div className="App mx-0 px-0 h-100">
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
                <Route path={'/check-your-email'} element={<CheckYourEmail/>}/>

                {
                    isUserLoggedIn && (
                        <Route path={'/'} element={<Admin/>}>
                            <Route path={'dashboard'} element={<Dashboard/>}/>
                            <Route path={'database'}>
                                <Route exact path={'garbage-hubs'} element={<GarbageHubs/>}/>
                                <Route exact path={'truck-drivers'} element={<TruckDrivers/>}/>
                                <Route exact path={'garbage-trucks'} element={<GarbageTrucks/>}/>
                                <Route exact path={'maintenance'} element={<MaintenanceCrewMembers/>}/>
                                <Route exact path={'house'} element={<Houses/>}/>
                                <Route exact path={'nfc-tags'} element={<NFCTags/>}/>
                            </Route>
                            <Route path={'/area-map'} element={<AreaMap/>}/>
                            <Route path={'/complaints'} element={<Complaints/>}/>
                            <Route path={'/maintenance'} element={<MaintenanceJobs/>}/>
                            <Route path={'/garbage-collection'} element={<GarbageCollectionRides/>}/>
                        </Route>
                    )
                }
                {
                    !isUserLoggedIn && <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                }

            </Routes>
        </div>
    );
};

export default App;
