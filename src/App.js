import React from 'react';
import Header from './components/Header.component.js';
import TextSection from './components/TextSection.component.js'
import Footer from './components/Footer.component.js'
import './App.css';

function App() {


  return (

    <div className="App">
      <Header 
        title ="Rafal's Blog"
      />
      
      <TextSection 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque."
      />

      <TextSection 
        content="Lorem ipsum dolor."
      />

      <Footer
      content="&copy; Copyrights - 2019."
      />
    </div>
  );
}

export default App;
