import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './components/all.css';
import Header from './components/Header';
import Index from './components/Index';
import Center from './components/Center';
import Convenience from './components/Convenience';
import Come from './components/Come';
import Pt from './components/Pt';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Index />} />  
            <Route path="/center" element={<Center/>}/>
            <Route path="/convenience" element={<Convenience/>}/>
            <Route path="/come" element={<Come/>}/>
            <Route path="/pt" element={<Pt/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
