import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";

import Header from "./common/Header";
import Footer from "./common/Footer";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="App">
      <Header/>
      Admin Dashboard
      {/*<Routes>*/}
      {/*  <Route path="/" element={<LoggedOutRoute/>}>*/}
      {/*    <Route path={'/'} element={<Login/>}/>*/}
      {/*  </Route>*/}
      {/*  <Route path="/" element={<AdminRoute/>}>*/}
      {/*    <Route path={'/admin/password'} element={<ChangePassword/>}/>*/}
      {/*    <Route path={'/admin/create'} element={<CreateAdmin/>}/>*/}
      {/*    <Route path={'/admin/remove'} element={<RemoveAccount/>}/>*/}
      {/*    <Route path={'/coach'} element={<Coach/>}/>*/}
      {/*    <Route path={'/coach/edit'} element={<EditCoach/>}/>*/}
      {/*    <Route path={'/borrow'} element={<Borrow/>}/>*/}
      {/*    <Route path={'/borrow/history'} element={<BorrowHistory/>}/>*/}
      {/*    <Route path={'/borrow/records'} element={<BorrowRecords/>}/>*/}
      {/*    <Route path={'/borrow/status'} element={<Status/>}/>*/}
      {/*    <Route path={'/players'} element={<Players/>}/>*/}
      {/*    <Route path={'/players/create'} element={<CreatePlayer/>}/>*/}
      {/*    <Route path={'/players/edit'} element={<EditPlayer/>}/>*/}
      {/*    <Route path={'/sessions'} element={<PastSessions/>}/>*/}
      {/*    <Route path={'/sessions/create'} element={<CreateSession/>}/>*/}
      {/*    <Route path={'/tournaments'} element={<PastTournaments/>}/>*/}
      {/*    <Route path={'/tournaments/create'} element={<CreateTournament/>}/>*/}
      {/*    <Route path={'/tournaments/ongoing'} element={<OngoingTournament/>}/>*/}
      {/*  </Route>*/}
      {/*  <Route path={'*'} element={<NotFound/>}/>*/}
      {/*</Routes>*/}
      <Footer/>
    </Container>
  );
};

export default App;
