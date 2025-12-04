import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Product from './pages/Product';
import Science from './pages/Science';
import FAQ from './pages/FAQ';
import Purchase from './pages/Purchase';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/product" element={<Product />} />
          <Route path="/science" element={<Science />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
