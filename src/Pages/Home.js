import me from '../Images/image3.png'
import Python from '../Components/python';
import Java from '../Components/java';
import Js from '../Components/js';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function Home() {
    return ( 
        <div>
    <div className="cup">
        <div>
        <h1><small>Hi ! i am,</small></h1>
        <h1>Oling`a</h1>
        <p>Am a full-stack web developer with maximum experience,i buld successfull web-app,native mobile application with cool features and much more</p>
        <div>
            <a href="#potforlio" className="btn btn-success">Get started</a>
        </div>
        </div>
        <div className="imgDiv">
            <img className="myimage" src={me} alt="myimage" />
        </div>
    </div>
        <div className="potforlio" id="potforlio">
        <div className="whatDiv"><h3 className="titles">My language technologies</h3></div>
        <div className="pot">
        <Python />
        <Java />
        <Js />
        </div>
        </div> 
    </div>
    );
}

export default Home;