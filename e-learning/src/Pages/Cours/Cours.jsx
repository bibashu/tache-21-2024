import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import React from "react";
import { Link } from 'react-router-dom';
import courseone from "./course-one (1).png";
import coursetwo from "./course-two.png";
import coursethree from "./course-three.png";
import special1 from "./special-one.png";
import special2 from "./special-two.png";
import special3 from "./special-three.png";
import laravel from "./laravel.png";
import  wordpress  from "./wordpress.png"
import facebook from "./facebook.png";
import motion from "./motion.png";
import seo from "./seo (1).png";
import microsoft from "./microsoft.png";
import marketing from "./marketing.png";
import Layout from "../../Components/Layout";


const Cours = () => {

    const Navigate = useNavigate();

    return ( 
        <Layout>
         {/* BREADCRUMB*/}
        <div className="py-5 ">
            <div class="container pt-5">
                <div class="row pt-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h2 class="section-title">Cours</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className="text-decoration-none">Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="cours" onClick={() => Navigate("/Courst")}>Cours</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* BREADCRUMB*/}
        {/* TOUS LES COURS*/}
        <div className="all-courses">
        <section className="section course pb-5">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin mb-3">
                                <h2 className="section-title text-start mb-3">Cours sur le design</h2>
                                <p className="section-sub-title text-start">Notre liste de cours est organisée en fonction des compétences les plus demandées actuellement dans le pays et à l'extérieur du pays. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin mb-3">
                                <a href="/cours" className="cmn-button text-decoration-none">Voir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={courseone} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Graphic Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Master Course</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={coursetwo} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>UI/UX Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Creative Course</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={motion} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Motion Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>Animation Video</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title mb-3">Web Programming</h2>
                                <p className="section-sub-title mb-3">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={coursethree} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Web Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Web Programming</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={wordpress} alt="Image" className=" rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Wordpress Theme</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Coading Mastar</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={laravel} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>PHP &amp; Laravel</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>Software Design</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start  col-margin">
                                <h2 className="section-title">Digital Marketing</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={facebook} alt="Image" className=" rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Facebook Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Social Media</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span>$20.00</span></h5>
                                    <a href="/cours" className="cmn-buttonn text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="roundedw-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Microsoft Office</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={microsoft} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Microsoft Word</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Microsoft Office</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoartio-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Robotics Automation</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={microsoft} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoartion-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Microsoft Word</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Microsoft Office</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3 ">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye etxt-decoartion-none"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Learning Language</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={special1} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>9.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Learning Holy Quran</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>With Arabic Language</p>
                                <div className="course-single-content-cta">
                                    <h5>$55.00 <span  className='text-decoration-line-through'>$60.00</span></h5>
                                    <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={special2} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Spoken English</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>International English</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={special3} alt="Image" className=" rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Learning Japanese</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>Learning Language</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span   className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pagination-wrapper">
                        <nav aria-label="...">
                            <ul class="pagination justify-content-center">
                                <li class="page-item me-2">
                                    <a class="page-link" href="#"><i class="fa-solid fa-angles-left"></i></a>
                                </li>
                                <li class="page-item me-2">
                                    <a class="page-link active" href="#" tabindex="-1">1</a>
                                </li>
                                <li class="page-item me-2">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item me-2 ">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item ms-2">
                                    <a class="page-link" href="#"><i class="fa-solid fa-angles-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

         {/*  --SECTION-NEWSLETTERER--  */}
         <section className="Newsletter section bg-img">
        <div className="container">
          <div className="row justify-content-center CTN">
            <div className="col-lg-10 col-xxl-8 col-md-12 col-sm-12">
              <div className="newsletter__content">
                <div className="section__header text-center">
                  <h2 class="section__title">
                    Restez connecté avec Elearning pour vous tenir informé
                  </h2>
                  <p className="py-3">
                    Abonnez-vous à notre newsletter pour recevoir des offres
                    exceptionnelles et des mises à jour !
                  </p>
                </div>
                <form action="#" method="post" autocomplete="off">
                  <div className="newsletter-inputs py-5">
                    <input
                      type="email"
                      name="newsletter__mail"
                      id="newsletterMail"
                      placeholder="Votre Adresse Email"
                      required="required"
                    />
                    <button type="submit" className="bTN">
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       </section>

             {/* --FOOTER--  */}

        </Layout>
     );
}
 
export default Cours;