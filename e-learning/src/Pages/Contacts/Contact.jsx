import React from 'react';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../../Components/Button";
import Layout from "../../Components/Layout";
//import learning from "../assets/imgs/learning.png";
//import recentone from "../assets/imgs/recentone.png";
//import recenttwo from "../assets/imgs/recenttwo.png";
//import recentthree from "../assets/imgs/recentthree.png";

const Contact = () => {
    const Navigate = useNavigate();

    return ( 
        <Layout>
         {/* BREADCRUMB*/}
        <div className="py-5">
            <div className="container pt-5">
                <div className="row pt-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h2 className="section-title">Contact</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-sm-end justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item "><Link to="/" className='text-decoration-none' onClick={() => Navigate("/")}>Accueil</Link></li>
                                    <li className="breadcrumb-item active" aria-current="contact" onClick={() => Navigate("/Contact")}>Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* BREADCRUMB END*/}

        {/* SECTION-BANNIERE START */}
        <section className="section pb-0 contact">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-header justify-content-center">
                        <h2 className="sectio-title text-center mb-3">Contactez-nous</h2>
                        <p className="section-sub-title text-center mb-3">Vous pouvez vous rendre directement à notre bureau pour nous contacter en cas de besoin. De plus, vous pouvez appeler le numéro de la hotline pour connaître toute information relative à la formation. </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center row-margin">
                <div className="col-lg-5 col-sm-6">
                    <div className="contact-map col-margin">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd" width="500" height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6 col-xl-6 offset-xl-1">
                    <div className="contact-content col-margin">
                        <h4>Campus principal, Manchester City, Royaume-Uni</h4>
                        <ul>
                            <li className="mb-3">Angel Plaza (9e étage)</li>
                            <li className="mb-3">En face de la gare</li>
                            <li className="mb-3" >Maison n°7, Route n°4, Zam Zam, Manchester City,</li>
                            <li className="mb-3">Manchester City, Angleterre, Royaume-Uni</li>
                        </ul>  
                        <div class="contact-content-group">
                            <div className="row d-flex align-items-center mb-3">
                                <div className="contact-content-group-item me-3 text-center">
                                        <h5>Lors des visites au bureau</h5>
                                        <p>Samedi - Vendredi</p>
                                        <p>9h à 20h</p>
                                </div>
                                <div className="contact-content-group-item text-center  plo">
                                        <h5>Numéro de téléphone</h5>
                                        <p>+9859552952</p>
                                        <p>+7779292652</p>
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className="col-lg-12 p-0">
                                    <div className="contact-content-group-item text-center plt">
                                        <h5>E-mail</h5>
                                        <p>info@example.com</p>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-form-wrapper">
            <div className="container">
                <div className="contact-form">
                    <h2>Entrer en contact</h2>
                    <form id="form" action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-wrapper single-input">
                                    <input type="text" id="Name" placeholder="Your Name" />
                                    <small>Name must be at least 3 characters</small>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-wrapper single-input">
                                    <input type="text" id="number" placeholder="Your Number" />
                                    <small>Number Phone Number Not Valid</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-wrapper single-input">
                                    <input type="text" id="email" placeholder="Your Email" />
                                    <small>Email is not valid</small>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="group">
                                    <select className="select-ourse" id="selectCourse">
                                        <option>Select Course</option>
                                        <option>Social Media</option>
                                        <option>Graphics Design</option>
                                        <option>Web Design</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                    <div class="nice-select" tabindex="0">
                                        <span className="current">Select Course</span>
                                        <ul className="list">
                                            <li data-value="Select Course" className="option selected">Select Course</li>
                                            <li data-value="Social Media" className="option">Social Media</li>
                                            <li data-value="Graphics Design" className="option">Graphics Design</li>
                                            <li data-value="Web Design" className="option">Web Design</li>
                                            <li data-value="Digital Marketing" className="option">Digital Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-12">
                                <div className="input-wrapper single-input">
                                    <textarea className="message" id="message" cols="10" rows="5" placeholder="Your Message"></textarea>
                                    <small>Message must be at least 10 characters</small>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="thank-you mb-2">
                                    <p>Your Message is successfully sent !</p>
                                </div>
                                <div className="btn-area">
                                    <button type="submit" className="cmn-button">Send Message</button>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* SECTION-BANNIERE END */}
        
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
        {/*SECTION-NEWSLETTERS*/}
        
        {/* --FOOTER--  */}

      

        </Layout>

     );
}
 
export default Contact;