import React from 'react';

import './app.css';

import MainInfo from '../main-info/main-info';
import Profile from '../profile/profile';
import Contact from '../contact/contact';
import Skills from '../skills/skills';
import Experience from '../expirience/experience';
import Software from '../software/software';
import Education from '../education/education';



const App = () => {

    const maininfo = {
        name: "Anton",
        surname: "Krylov",
        workplace: "Front-end"
    };
    return (
        <div className="container">
            <div className="col-lg-6 col-xs-12">
                <MainInfo {...maininfo} />
                <Profile />
                <Contact />
                <Skills />
            </div>
            <div className="col-lg-6 col-xs-12">
                <Education />
                <Experience />
                <Software />
            </div>
        </div>
    );
};

export default App;