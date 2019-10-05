import React from 'react';
import Header from './components/Header.component.js';
import TextSection from './components/TextSection.component.js'
import Footer from './components/Footer.component.js'
import Counter from './components/Counter.component.js'
import './App.css';

function App() {


// const actualYear = new Date().getFullYear();

const TEXTS = {

  HEADER : "Rafal's Blog",
  SECTION_1 : "Lorem ipsum dolor sit amet, elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.",
  SECTION_2 : "Lorem ipsum dolor", 
  // FOOTER : `Ⓒ Copyrights - ${actualYear}`,
  FOOTER : `Ⓒ Copyrights - `,
};
  return (

    <div className="App">
      <Header title = {TEXTS.HEADER}/>
      <Counter/>
      <TextSection content = {TEXTS.SECTION_1}/>
      <TextSection content= {TEXTS.SECTION_2}/>
      <Footer content={TEXTS.FOOTER}/>
    </div>
  );
}

export default App;