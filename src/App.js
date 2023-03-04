import {BrowserRouter,Routes,Route} from 'react-router-dom'
import InicioSesion from './pages/inicioSesion/inicioSesion'
import Home from './pages/Home/home.js'
import { useState } from 'react';

const App = () =>
 {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/inicioSesion' element = {<InicioSesion />}> </Route>
      <Route path='/home' element = {<Home />}> </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
