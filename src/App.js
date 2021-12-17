import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Page404 from './404';
import Home from './Home';
import Header from './Header';
import Form from './Form';
import Conta from './Conta';
import ProtectedRoute from './Helpers/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
        <Route path='contato' element={<Contato />} />
        <Route path='form' element={<Form />} />
        <Route
          path='conta'
          element={
            <ProtectedRoute>
              <Conta />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
