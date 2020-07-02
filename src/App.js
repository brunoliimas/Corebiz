import React from 'react';
import "./style.css";


// Componentes
import Header from './components/Header/header'
import Banner from './components/Banner/banner'
import Vitrine from './components/Vitrine/vitrine'
import Newsletter from './components/Newsletter/newsletter'
import Footer from './components/Footer/footer'


const App = () => (
  <div className="App">
      <Header />
      <Banner />
      <Vitrine />
      <Newsletter />
      <Footer />
      
  </div>
)


export default App;
