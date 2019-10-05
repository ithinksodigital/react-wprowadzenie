import React from 'react';
import '../App.css';
import Header from './Header.component';
import Footer from './Footer.component';



function Autor() {


    // const actualYear = new Date().getFullYear();
    
    const TEXTS = {
    
      HEADER : "Rafal's Blog",
      SECTION_1 : "Lorem ipsum dolor sit amet, elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.",
      SECTION_2 : "Lorem ipsum dolor", 
      // FOOTER : `Ⓒ Copyrights - ${actualYear}`,
      FOOTER : `Ⓒ Copyrights - `,
    };
      return (
    
        <div className="Autor-content">
          <Header title = {TEXTS.HEADER}/>
          <p>Autorem jest Rafal</p>
          <Footer content={TEXTS.FOOTER}/>
        </div>
      );
    }
    
    export default Autor;