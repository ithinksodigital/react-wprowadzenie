import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Autor from './components/Autor.component';
import Kontakt from './components/Kontakt.component';
import Post from './components/Post.component';
import NotExist from './components/NotExist.component';
ReactDOM.render(
    <BrowserRouter>
    <Switch>
       <Route exact path="/" component={App} />
       <Route path="/autor" component={Autor} />
       <Route path="/kontakt" component={Kontakt} />
       <Route path="/post/:id" component={Post} />
       <Route component={NotExist} />
       {/* <Route path="/about" component={AboutMe} />
       <Route path="/contact" component={Contact} />
       <Route path="/projects" component={Projects} /> */}
    </Switch>
</BrowserRouter>,
 document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
