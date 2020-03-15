import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Filters from './Component/Filters';



function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 allContent">
            <Header />
            <Filters />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
