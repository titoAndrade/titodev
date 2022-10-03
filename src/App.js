import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
// import aos from 'aos';
// import 'aos/dist/aos.css'

import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'

// import Home from './routes/Home/Home'

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const Loader = React.lazy(() => import('./components/Loader/Loader'))

const Home = React.lazy(() => import('./routes/Home/Home'))


function App() {
  return (
    <Suspense id='all' fallback={<Loader id='all' />}>

      <div id="all">
        
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

        <Footer/>

      </div>

    </Suspense>
  );
}

export default App;
