import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
);