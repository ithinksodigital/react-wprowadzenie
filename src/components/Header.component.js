import React from 'react';
import Menu from './Menu.component';



function Header(props) {


    // const actualYear = new Date().getFullYear();

      return (

<header className="App-header">
<Menu />
        <h1>{props.title}</h1>
    </header>
      );
    }
    
    export default Header;