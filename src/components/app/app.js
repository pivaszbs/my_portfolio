import React from 'react';

import './app.css';

import MainInfo from '../main-info/main-info';
import Profile from '../profile/profile';
import Contact from '../contact/contact';
import Skills from '../skills/skills';
import Experience from '../expirience/experience';
import Software from '../software/software';
import Education from '../education/education';
import ModuleHeader from '../module-header/module-header';



const App = () => {

    const maininfo = {
        name: "Anton",
        surname: "Krylov",
        workplace: "Front-end"
    };

    const profileheader = {
        icon: "fa-user-circle",
        text: "Profile"
    }

    const contactheader = {
        icon: "fa-phone",
        text: "Contact"
    }

    const profile_description = "huy huy huy";

    const contactinfo = [
        { label: "Adress", info: "Innopolis, REP. Tatarstan, 1 campus" },
        { label: "Email", info: "toxa121211@gmail.com" },
        { label: "Phone", info: "+79648350370" },
        { label: "Website", info: "http://localhost:3000" },
    ]

    const eduheader = {
        icon: "fa-star",
        text: "Education"
    }

    const expheader = {
        icon: "fa-briefcase",
        text: "Experience"
    }

    const softheader = {
        icon: "fa-desktop",
        text: "Software"
    }

    const expInfo = [
        {id: 'kek', job: "Toha", company: "Lol", info: "Ya zbs pivas ebnul"},
    ]

    const eduInfo = [
        {id: 'kek', university: "Toha", header: "Lol", info: "Ya zbs pivas ebnul"},
    ]

    const sofInfo = [
        {tech: "huy", perc: 20},
        {tech: "huy", perc: 40},
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12 overflow-hidden">
                    <MainInfo {...maininfo} />
                    <ModuleHeader {...profileheader} />
                    <Profile profile_description={profile_description} />
                    <ModuleHeader {...contactheader} />
                    <Contact contactinfo={contactinfo} />
                    <Skills />
                </div>
                <div className="col-lg-7 col-xs-12 overflow-hidden">
                    <ModuleHeader {...eduheader} />
                    <Education eduInfo={eduInfo}/>
                    <ModuleHeader {...expheader} />
                    <Experience expInfo={expInfo}/>
                    <ModuleHeader {...softheader} />
                    <Software sofInfo={sofInfo}/>
                </div>
            </div>
        </div>
    );
};

export default App;