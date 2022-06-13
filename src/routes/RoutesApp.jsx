import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Matches from '../components/Matches';
import MyLikes from '../components/MyLikes';
import GotLikes from '../components/GotLikes';
import Principal from '../components/Principal';
import Index from '../pages/Index';
import LoginHelp from '../pages/LoginHelp';
import RegisterHelp from '../pages/RegisterHelp';
import IndexHelp from '../components/IndexHelp';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginhelp" element={<LoginHelp />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/registerhelp" element={<RegisterHelp />} />
        <Route exact path="/index" element={<Index />}>
          <Route exact path="principal" element={<Principal />} />
          <Route exact path="matches" element={<Matches />} />
          <Route exact path="mylikes" element={<MyLikes />} />
          <Route exact path="gotlikes" element={<GotLikes />} />
          <Route exact path="indexhelp" element={<IndexHelp />} />
          <Route path="" element={<Navigate to="principal" />} replace />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} replace />
      </Routes>
    </BrowserRouter>
  );
}
