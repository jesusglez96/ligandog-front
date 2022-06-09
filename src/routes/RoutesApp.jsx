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

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/index" element={<Index />}>
          <Route exact path="principal" element={<Principal />} />
          <Route exact path="matches" element={<Matches />} />
          <Route exact path="mylikes" element={<MyLikes />} />
          <Route exact path="gotlikes" element={<GotLikes />} />
          <Route path="" element={<Navigate to="principal" />} replace />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} replace />
      </Routes>
    </BrowserRouter>
  );
}
