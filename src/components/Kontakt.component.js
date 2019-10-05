import React from 'react';
import '../App.css';
import Header from './Header.component';
import Footer from './Footer.component';


function Kontakt() {


    // const actualYear = new Date().getFullYear();
    
    const TEXTS = {
    
      HEADER : "Rafal's Blog",
      SECTION_1 : "Lorem ipsum dolor sit amet, elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.",
      SECTION_2 : "Lorem ipsum dolor", 
      // FOOTER : `Ⓒ Copyrights - ${actualYear}`,
      FOOTER : `Ⓒ Copyrights - `,
    };
      return (
        <div className="Kontakt-content">
          <Header title = {TEXTS.HEADER}/>
          <p>Kontakt do autora: rafal[at]mail.com</p>
          <Footer content={TEXTS.FOOTER}/>
        </div>
      );
    }
    
    export default Kontakt;