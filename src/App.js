import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import contact from './Components/contact';
import Contact from './Components/contact';

function App(){
    return(
        <div className='App'>
            <Header/>
            <Feature/>
            <About  image={aboutimage} title="Comes With All You Need For Your Daily Life" button="Get the App"/>
            <Presentation/>
            <About  image={aboutimage1} title="Download And Get The App Now" button="Download"/>
            <Contact/>
        </div>
    );
}
export default App;