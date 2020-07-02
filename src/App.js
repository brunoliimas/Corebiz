import React from 'react';
import "./style.css";

// Componentes
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Newsletter from './components/Newsletter/newsletter'
import Banner from './components/Banner/banner'

const App = () => (
  <div className="App">
      <Header />
      <Banner />
      <Newsletter />
      <Footer />
      
  </div>
)


export default App;
