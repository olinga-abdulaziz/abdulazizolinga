import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return ( <div className="container">
        <br />
        <div className="header-cup" data-aos="fade-left">
            <h4>Contact information</h4>
            <p>
                lear compouter csiece i will e ver votther ay i will e learig  my ow thigs util i ecome a sogfth  votther ay i will e learig  my ow thigs util i ecome a sogfth thi is a sort of paragraph that i just wa use it for testig purposes
                i deug this mots of tghe time a i realy start to like it is ecommig my 
            </p>
        </div>
        <br />
        <div className="contact-container" data-aos="fade-left">
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex"><i class="fab fa-whatsapp"></i>  <h5 className="con-hed"><strong> whatsapp me @  </strong></h5> </div>
               
                <div className="con-block" data-aos="fade-left">
                <p></p>
                <p>
                    <small>Phone 1 :  +254769210601</small> 
                    
                <br />
                     <small>Phone 2 :  +254769210601</small> 
                </p>
                
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex"><i class="fab fa-facebook"></i>
                <h5 className="con-hed"><strong> follow facebook me @  </strong></h5> </div>

                <div className="con-block" data-aos="fade-left">
                <p></p>
                <p>
                    <small>account  :  www.facebook.com/abdulaziz-o-syd</small> 
                    
                <br />
                     <small>Page :  abdulaziz syd</small> 
                </p>
                
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex">
                <i class="fab fa-instagram"></i>
                <h5 className="con-hed"><strong> Instagram me @  </strong></h5>
                </div>
                <div className="con-block" data-aos="fade-left">
                <p>
                    <small>Account :  abdulaziz_syd</small> 
                    
                <br />
                </p>
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex">
                <i class="fab fa-twitter"></i>
                <h5 className="con-hed"><strong>Tweet me @  </strong></h5>
                </div>
                <div className="con-block" data-aos="fade-left">
                <p>
                    <small>Account :  @olingaabdul</small> 
                </p>
                
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex">
                <i class="fab fa-pinterest" aria-hidden="true"></i> 
                <h5 className="con-hed"><strong> Pinterest me @  </strong></h5>
                </div>
                <div className="con-block" data-aos="fade-left">
                <p>
                    <small>Account :  Adbulaziz olinga</small> 
                </p>
                
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex">
                <i class="fab fa-linkedin" aria-hidden="true"></i> 
                <h5 className="con-hed"><strong> Linked me @  </strong></h5>
                </div>
                <div className="con-block" data-aos="fade-left">
                <p>
                    <small>Account :  Abdulaziz Olinga said</small> 
                </p>
                </div>
                </div>
                <div className="card card-contact" data-aos="fade-left">
                <div className="con-flex">
                <i class="fab fa-youtube" aria-hidden="true"></i>
                <h5 className="con-hed"><strong> Youtube Chanenl  </strong></h5>
                </div>
                <div className="con-block">
                <p>
                    <small>Channel 1 : code with aziz</small> 
                    
                <br />
                    <small>Channel 2 : abdulaziz olinga</small>  
                </p>
                
                </div>
                </div>
        </div>
    </div> );
}

export default Contact;