import React from 'react';

const actualYear = new Date().getFullYear();

const Footer = (props) => (

    <footer className="Footer-content">
        <p>{props.content} {actualYear}</p>
    </footer>
);


export default Footer;