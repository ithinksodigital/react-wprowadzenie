import React from 'react';
import '../App.css';
import  {Link} from 'react-router-dom';




function Menu() {

    // const actualYear = new Date().getFullYear();

      return (
<ul>
    <li><Link className="App-link" to={`/`}>Home</Link></li>
    <li><Link className="App-link" to={`/autor/`}>Autor</Link></li>
    <li><Link className="App-link" to={`/kontakt/`}>Kontakt</Link></li>
    <li><Link className="App-link" to={`/dummy/`}>Dummy</Link></li>

</ul>
      );
    }
    
    export default Menu;