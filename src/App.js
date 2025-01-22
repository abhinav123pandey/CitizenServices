import React from 'react';
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> 74b3555cbe89cb756c81c66c9dc7fa6e41ed2783
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Schemes from './components/Schemes';
import 'bootstrap/dist/css/bootstrap.min.css';

<<<<<<< HEAD
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: '/services',
    element: (
      <div>
        <Navbar />
        <Services />
        <Footer />
      </div>
    ),
  },
  {
    path: '/schemes',
    element: (
      <div>
        <Navbar />
        <Schemes />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
=======
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schemes" element={<Schemes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
>>>>>>> 74b3555cbe89cb756c81c66c9dc7fa6e41ed2783
  );
}

export default App;
