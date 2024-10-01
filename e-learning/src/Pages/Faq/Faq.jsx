import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button";
import Navbar from "../../Navbar/Navbar";
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout";
//import recentone from "../assets/imgs/recentone.png";
//import recenttwo from "../assets/imgs/recenttwo.png";
//import recentthree from "../assets/imgs/recentthree.png";

const Faq = () => {
    
    const Navigate = useNavigate();

    return ( 
        <Layout>
        {/* BREADCRUMB*/}
       <div className="py-5">
            <div class="container pt-5">
                <div class="row pt-5 align-items-center">
                    <div class="col-lg-6 col-sm-6">
                        <div class="banner-content">
                            <h2 class="section-title">Faq</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="banner-breadcrumb d-flex justify-content-lg-end justify-content-sm-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className='text-decoration-none'>Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="faq" onClick={() => Navigate("/Faq")}>Faq</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        {/* BREADCRUMB*/}

        <section className="faq section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-12">
                    <div className="section-header justify-content-center">
                        <h2 className="section-title text-center mb-3">Frequently asked question</h2>
                        <p className="section-sub-title text-center mb-3">In this age of 'everything is possible', why are you calling
                            yourself 'impossible'? Develop your skills at home now - from the best experts!</p>
                    </div>
                </div>
            </div>
            <div className="row row-margin">
                <div className="col-lg-6 col-sm-12">
                    <div className="faq-content col-margin">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What should be included on a E-learning website?
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I purchase a course?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Do I have to pay VAT?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do I access the courses I have paid for?
                                    </button>
                                </h5>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="faq-content col-margin">
                        <div className="accordion" id="accordionExampleTwo">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoOne" aria-expanded="true" aria-controls="collapseTwoOne">
                                        What should be included on a E-learning website?
                                    </button>
                                </h5>
                                <div id="collapseTwoOne" className="accordion-collapse collapse show" aria-labelledby="headingTwoOne" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
                                        How do I purchase a course?
                                    </button>
                                </h5>
                                <div id="collapseTwoTwo" className="accordion-collapse collapse" aria-labelledby="headingTwoTwo" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwoThree">
                                        Do I have to pay VAT?
                                    </button>
                                </h5>
                                <div id="collapseTwoThree" className="accordion-collapse collapse" aria-labelledby="headingTwoThree" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour" aria-expanded="false" aria-controls="collapseTwoFour">
                                        How do I access the courses I have paid for?
                                    </button>
                                </h5>
                                <div id="collapseTwoFour" className="accordion-collapse collapse" aria-labelledby="headingTwoFour" data-bs-parent="#accordionExampleTwo">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

         {/*  --SECTION-NEWSLETTERER--  */}
         <section class="newsletter section bg-img py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-sm-12 col-xxl-8">
                        <div class="newsletter-content">
                            <div class="section-header text-center">
                                <h2 class="section-title">Restez connecté avec Elearning pour rester à jour</h2>
                                <p>Abonnez-vous à notre newsletter pour recevoir des offres et des mises à jour exceptionnelles !</p>
                            </div>
                            <form action="#" method="post" autocomplete="off">
                                <div class="newsletter-inputs">
                                    <input type="email" name="newsletter-mail" id="newsletterMail" placeholder="Your Email Address" required="required" />
                                    <button type="submit" class="cmn-button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </section>

        </Layout>
     );
}
 
export default Faq;
