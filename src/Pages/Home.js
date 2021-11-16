import me from '../Images/image3.png'
import Python from '../Components/python';
import Java from '../Components/java';
import Js from '../Components/js';
import View from '../Components/View';
import Django from '../Components/Django';
import Reactfr from '../Components/Reactfr';
import React from 'react';
import Spring from '../Components/Spring';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function Home() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return ( 
        <div data-aos="fade-up">
    <div className="cup">
        <div >
        <h1><small>Hi ! i am,</small></h1>

        <h1>Oling`a</h1>
        <p>Am a full-stack web developer with maximum experience,i buld successfull web-app,native mobile application with cool features and much more</p>
        <div>
            <a href="#potforlio" className="btn btn-success">Get started</a>
        </div>
        </div>
        <div className="imgDiv" data-aos="fade-left">
            <img className="myimage" src={me} alt="myimage"  />
        </div>
    </div>
        <div className="potforlio" id="potforlio" data-aos="fade-up">
        <div>
            <div className="whatDiv">
          
            <h3>
                <span class="badge badge-secondary">Coding languages i use</span></h3>
            
            </div>
            <div className="pot" data-aos="fade-right">
            <Python />
            <Java />
            <Js />
            </div>
        </div>
        <hr />
        <div>
            <div className="whatDiv">
            <h3>
                <span class="badge badge-secondary">Front-end frameworks i use</span></h3>
            </div>
            <div className="pot" data-aos="fade-left">
            <Reactfr />
            <View />
            </div>
        </div> 
        <hr />
        <div>
            <div className="whatDiv">
            <h3>
                <span class="badge badge-secondary">Back-end frameworks i use</span></h3>
            </div>
            <div className="pot" data-aos="fade-left">
            <Django />
            <Spring />
            </div>
        </div> 
        </div>
    </div>
    );
}

export default Home;