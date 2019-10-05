import React from 'react';
import '../App.css';
import Header from './Header.component';
import Footer from './Footer.component';



function Post(props) {

    
    const TEXTS = {
    
      HEADER : "Rafal's Blog",
      FOOTER : `Ⓒ Copyrights - `,
    };
      return (
    
        <div className="Post-content">
           
          <Header title = {TEXTS.HEADER}/>
          <h2>Here will be post title</h2>
          <p>Przykładowa treść posta numer <b>{props.match.params.id}</b></p>
          <Footer content={TEXTS.FOOTER}/>
        </div>
      );
    }
    
    export default Post;