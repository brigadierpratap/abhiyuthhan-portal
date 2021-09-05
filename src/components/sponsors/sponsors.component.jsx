import React from 'react';
import './sponsors.styles.css';
// import Platinum from '../../assets/s1.jpeg';
import Diamond from '../../assets/s2.jpeg';
import Ruby from '../../assets/s3.gif';
import Silver from '../../assets/s4.jpg';
// import Gold from '../../assets/s5.png';
import Deca from '../../assets/s6.jpg';
import Nona from '../../assets/s7.jpeg';
import Octa from '../../assets/s8.png';
import Hepta from '../../assets/s9.jpeg';
import Mono from '../../assets/s10.png';
import Bi from '../../assets/s11.jpg';
import Tri from '../../assets/s12.png';
import Quad from '../../assets/s13.png';
import Pent from '../../assets/s14.png';
import Hex from '../../assets/s15.png';
import Hept from '../../assets/s16.jpg';
import One from '../../assets/rtist-logo.jpg';
const Sponsors = () =>{
    return(
<section id="sponsors" className="sponsors">
        <div className="container">
            <div className="section-title">
                <h2>
                    SPONSORS
                </h2>

            </div>
            <div className="row">
              {  // <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                //     <div className="lightbox">
                //         <img src={Platinum} alt="bridge"/>
                //     </div>
                // </div>
              }
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer"><img src={Diamond} alt="bridge" /></a>
                        

                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox-gif">
                        <a href="https://rosenfeldmedia.com/" target="_blank" rel="noopener noreferrer"><img src={Ruby} alt="bridge" /></a>


                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.codingninjas.com/" target="_blank" rel="noopener noreferrer"><img src={Silver} alt="bridge" /></a>


                    </div>
                </div>
                {/*<div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">}
                    <div className="lightbox">
                        <img src={Gold} alt="bridge" />


                    </div>
                </div>*/}
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.interviewcake.com/" target="_blank" rel="noopener noreferrer"><img src={Deca} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.taskade.com/" target="_blank" rel="noopener noreferrer"><img src={Mono} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://edutricker.com/curriculum.html" target="_blank" rel="noopener noreferrer"><img src={Bi} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://givemycertificate.com/" target="_blank" rel="noopener noreferrer"><img src={Tri} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://codingblocks.com/" target="_blank" rel="noopener noreferrer"><img src={Quad} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer"><img className="bg-light" style={{scale:"1.5"}} src={Hex} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center mx-auto ">
                    <div className="lightbox">
                        <a href="https://www.instagram.com/bhookh_for_bbq_official/" target="_blank" rel="noopener noreferrer"><img src={Hept} alt="bridge" /></a>
                    </div>
                </div>



            </div>
            <div className="section-title">
                <h2 style={{wordBreak:"none"}}>
                    IN COLLABORATION WITH
                </h2>

            </div>
            <div className="row">
                <div class="col-sm-5 col-md-4 d-flex align-items-center justify-content-center mx-auto">
                    <div class="lightbox-collab">
                        
                        <a href="https://www.linkedin.com/company/ieee-student-branch-bit-mesra-deoghar-campus/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                        <img src={Octa} alt="bridge" />
                        </a>

                    </div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mx-auto">
                    <div className="lightbox-collab">
                        
                        <a href="https://www.iitp.ac.in" target="_blank" rel="noopener noreferrer"><img src={Hepta} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mx-auto">
                    <div className="lightbox-collab">
                        <a href="https://www.linkedin.com/in/robotics-club-mnnit-20634417a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src={Nona} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mx-auto">
                    <div className="lightbox-collab">
                        <a href="https://hackslash-17.web.app/" target="_blank" rel="noopener noreferrer"><img src={Pent} alt="bridge" /></a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mx-auto">
                    <div className="lightbox-collab">
                        
                        <a href="https://www.nitj.ac.in/rtist/" target="_blank" rel="noopener noreferrer"><img src={One} alt="bridge" /></a>
                    </div>
                </div>



            </div>
        </div>
    </section>
    )
}

export default Sponsors;
