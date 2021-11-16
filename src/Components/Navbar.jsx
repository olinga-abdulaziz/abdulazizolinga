import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
function Navbar() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
         <nav className="navbar">
             <div data-aos="fade-left">
             <i class="fa fa-tablets" aria-hidden="true"></i>
             <font className="nav-brand"><strong>Abdulaaziz</strong></font>
             </div>
             <div className="btn-group" data-aos="fade-left">
                 <Link to="/" className="btn btn-success"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                 <Link to="/about" className="btn btn-success">About</Link>
                 <Link to="/contact" className="btn btn-success">Contact</Link>
             </div>
        </nav> 
    );
}

export default Navbar;