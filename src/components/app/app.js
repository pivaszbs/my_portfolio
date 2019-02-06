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

    const proInfo = "No helmets, no brains. //Funny guy with ideas in mind";

    const contactinfo = [
        { label: "Adress ", info: "Innopolis, REP. Tatarstan, 1 campus" },
        { label: "Email  ", info: "toxa121211@gmail.com" },
        { label: "Phone  ", info: "+79648350370" },
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
        icon: "fas fa-desktop",
        text: "Software"
    }

    const expInfo = [
        {id: 'No work', job: "No real work", company: "Real life //1999-2019", info: "Team work in students group"},
    ]

    const eduInfo = [
        {id: 'Innopolis', university: "Innopolis University", header: "Computer Science", info: "2nd year Bachelor"},
    ]

    const sofInfo = [
        {tech: "HTML&CSS3", perc: 75},
        {tech: "JS", perc: 100},
        {tech: "ReactJS", perc: 60},
        {tech: "SQLite", perc: 50},
    ]

    const skillsheader = {
        icon: "fas fa-lightbulb",
        text: "Skills"
    }

    const sklInfo = [
        {label: "Creative", amount: 10},
        {label: "Teamwork", amount: 10},
        {label: "Communication", amount: 7},
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12 overflow-hidden">
                    <MainInfo {...maininfo} />
                    <ModuleHeader {...profileheader} />
                    <Profile proInfo={proInfo} />
                    <ModuleHeader {...contactheader} />
                    <Contact contactinfo={contactinfo} />
                    <ModuleHeader {...softheader} />
                    <Software sofInfo={sofInfo}/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 col-xs-12 overflow-hidden">
                    <ModuleHeader {...eduheader} />
                    <Education eduInfo={eduInfo}/>
                    <ModuleHeader {...expheader} />
                    <Experience expInfo={expInfo}/>
                    <ModuleHeader {...skillsheader} />
                    <Skills skills={sklInfo}/>
                </div>
            </div>
        </div>
    );
};

export default App;