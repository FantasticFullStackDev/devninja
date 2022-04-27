import React from 'react';
import Nav from './nav';
import Hero from './hero';
import Description from './description';
import Skills from './skills';
import Service from './service';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';

function Landing (props) {     
    return (
        <React.Fragment>
            <Nav />
            <Hero />
            <Description />
            <Skills />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}

export default Landing;