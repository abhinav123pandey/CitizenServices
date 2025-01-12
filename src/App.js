import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Schemes from './components/Schemes';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  );
}

export default App;
