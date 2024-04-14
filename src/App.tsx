import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  return (
<>
<Navbar/>
<Container className='mb-4'>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/store' element={<Store/>}></Route>
<Route path='/about' element={<About/>}></Route>
  </Routes>
  </Container>
</>
  );
}

export default App;
