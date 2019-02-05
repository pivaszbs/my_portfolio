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
    return (
        <div className="container">
            <div className="flex-side">
                <MainInfo />
                <Profile />
                <Contact />
                <Skills />
            </div>
            <div className="flex-side">
                <Education />
                <Experience />
                <Software />
            </div>
        </div>
    );
};

export default App;