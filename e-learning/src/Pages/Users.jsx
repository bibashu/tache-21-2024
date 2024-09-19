import React from 'react';
import { useState } from 'react';
import  {useNavigate} from "react-router-dom";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import avatar3 from "../assets/avatar3.jpeg";
import avatar5 from "../assets/avatar4.jpeg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";


const Users = ({ username }) => {
    const Navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    return (  
        <div className="container-fluid">
            <div className="row section-users">

                {/* {/<!-- PARTIE TROIS--/} */}
                <div className="col-lg-3 col-sm-12">
                    <div className="row">
                        <div className="text-start mb-5">
                            
                        </div>
                    </div>
                    <div className="row ps-3 mb-3 ">
                        <span className="mb-2">OVERVIEW</span>
                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-grid-1x2-fill text-primary me-4"></i>
                            <h5 className="setction-title text-start">Dashboard</h5>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-inbox-fill me-4"></i>
                            <h5 className="setction-title">Inbox</h5>
                        </div>
                        

                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-filetype-pdf me-4"></i>
                            <h5 className="setction-title">Lesson</h5>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-calendar3-week me-4"></i>
                            <h5 className="setction-title">Task</h5>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-people me-4"></i>
                            <h5 className="setction-title">Group</h5>
                        </div>
                    </div>
                    <div className="row ps-3 section-avatar pb-5 mb-5">
                        <span className="text-lead mb-3">FRIENDS</span>
                        <div className="d-flex align-items-center  mb-3">
                            <div className="avatar-container avatar-1 me-4  p-2"><img src={avatar1} className="img-fluid avatar" /></div>
                            <div className="type-person">
                                <h5 className="section-title">Bagas Mahpie</h5>
                                <p>Friend</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="avatar-container avatar-2 p-2  me-4"><img src={avatar2} className="img-fluid avatar" /></div>
                            <div className="type-person">
                               <h5 className="setction-title">Sir Dandy</h5>
                               <p>Old friend</p>
                            </div>
                        </div>
                        

                        <div className="d-flex  align-items-center mb-3">
                            <div className="avatar-container avatar-3 p-2 me-4"><img src={avatar3} className="img-fluid avatar" /></div>
                            <div className="type-person ">
                                <h5 className="setction-title">Jhon Tosan</h5>
                                <p>Friend</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="row  settings ps-3">
                        <span className="text-lead mb-2">SETTINGS</span>
                        <div className="d-flex align-items-center mb-3">
                            <i class="bi bi-gear me-4"></i>
                            <h5 className="setction-title text-start">Setting</h5>
                        </div>
                        <div className="d-flex align-items-center oranger">
                             <i class="bi bi-box-arrow-right oranger me-4"></i>
                            <h5 className="setction-title">Logout</h5>
                        </div>
                        
                    </div>
                </div>
                {/* {/<!-- PARTIE DEUX--/} */}
                <div className="col-lg-9 col-sm-12 ONLINE-COURSE">
                    
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid section-notif">
                                <input
                                    type="text"
                                    className="form-control rounded-pill me-2"
                                    placeholder="Rechercher..."
                                    // value={searchTerm}
                                    // onChange={handleSearchChange}
                                />
                                <button className="btn btn-outline-success text-success rounded-pill" 
                                // onClick={handleSendMessage}
                                >
                                <i class="bi bi-envelope-fill text-success"></i>
                                </button>
                                <button className="btn btn-outline-danger text-danger rounded-pill ms-2" 
                                // onClick={handleAlert}
                                >
                                <i class="bi bi-bell-fill text-danger"></i>
                                </button>
                                <span className="navbar-text ms-3">
                                <i class="bi bi-person-circle rounded-pill"></i>
                                    {/* {username} */}
                                </span>
                            </div>
                        </nav>
                        <div className="col-lg-9 px-4  pb-5 col-sm-12">
                            <div className="section-skills">
                                <div className="row text-start bg-primary text-white rounded p-3">
                                    <p className='text-white'>ONLINE COURSE</p>
                                    <h1>Sharpen Your Skills whith<br/>Professional Online Courses</h1>
                                    <div className="d-flex align-items-center text-center py-1 px-3 section-join">
                                        <h6>Join Now</h6>
                                        <a href=""><i class="bi bi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="section-module">
                                <div className="row">
                                    <div className="col-lg-4 p-3">
                                         <div className="row mb-3 boxs">
                                            <div className="box p-2">
                                                <div className="section-icons bg-light icons-1 text-center">
                                                    <i class="bi bi-x"></i>
                                                </div>
                                                <div className="program">
                                                    <span>2/8 Watched</span>
                                                    <h5>UI/UXDesign</h5>
                                                </div>
                                                <div className="option">
                                                    <a href=""><i class="bi bi-three-dots-vertical"></i></a>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                    <div className="col-lg-4 p-3">
                                        <div className="row mb-3 rounded boxs">
                                            <div className="box p-2">
                                                <div className="section-icons bg-light icons-2 text-center">
                                                     <i class="bi bi-circle-square"></i>
                                                </div>
                                                <div className="program">
                                                   <span className='pb-0'>3/8 Watched</span>
                                                   <h5>Brandings</h5>
                                                </div>
                                                 <div className="option">
                                                    <a href=""><i class="bi bi-three-dots-vertical"></i></a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 p-3">
                                        <div className="row mb-3 rounded boxs">
                                            <div className="box p-2">
                                                <div className="section-icons bg-light icons-3 text-center"><i class="bi bi-code-slash"></i>
                                                </div>
                                                <div className="program">
                                                    <span>6/8 Watched</span>
                                                    <h5>FrontEnd</h5>
                                                </div>
                                                <div className="option">
                                                     <a href=""><i class="bi bi-three-dots-vertical"></i></a>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            {/* {/<!-- SETION CAROUSEL  -->/} */}
                            <div className="section-carousel mb-3">
                            <div className="row align-items-center mb-2">
                                <div className="col-lg-6">
                                    <div className="text-start">
                                        <h5>Continue Watching</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-end">
                                        <button type="button" className="btn"><i class="bi bi-chevron-left"></i></button>
                                        <button type="button" className="btn"><i class="bi bi-chevron-right"></i></button>
                                    </div>                        
                                </div>
                            </div>
                            {/* {/<!-- SECTION CAROUSEL  -->/} */}
                            <div className="row bg-white p-3 rounded">
                                <div className='col-lg-4'>
                                    <div class="col-item position-relative">
                                        <div class="learning-img">
                                            <img src={img1} class="img-fluid rounded" alt="img1"/>
                                        </div>           
                                        <div class="py-2">
                                            <div className="Front-End d-flex align-items-center mb-2 bg-light px-3">
                                                <i class="bi bi-code-slash me-3"></i>
                                                <span>Front-End</span>
                                            </div>
                                            <p>Beginner's Guide tu Becomings a Professinal Front-End Developper</p>
                                            <div class="porcenta porcenta-un mb-3">
                                                <div class="bar-progress"></div>
                                            </div>
                                            <div className="d-flex  align-items-center mb-3">
                                                <div className="avatar-container avatar-3 p-2 me-4"><img src={avatar3} className="img-fluid avatar" /></div>
                                                <div className="type-person ">
                                                    <h5 className="setction-title">Jhon Tosan</h5>
                                                    <p>Mentor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                    
                                </div>
                                <div className='col-lg-4'>
                                <div class="col-item position-relative">
                                        <div class="learning-img">
                                            <img src={img2} class="img-fluid rounded" alt="american"/>
                                        </div>           
                                        <div class="py-2">
                                            <div className="Front-End d-flex align-items-center mb-2 bg-light px-3">
                                                <i class="bi bi-x me-3"></i>
                                                <span>UI/UX Design</span>
                                            </div>
                                            <p>Optimizing User Experience with the Best UI/UX Design<br/><br/></p>
                                            <div class="porcenta porcenta-deux mb-3">
                                                <div class="bar-progress"></div>
                                            </div>
                                            <div className="d-flex align-items-center  mb-3">
                                                <div className="avatar-container avatar-1 me-4  p-2"><img src={avatar1} className="img-fluid avatar" /></div>
                                                <div className="type-person">
                                                    <h5 className="section-title">Bagas Mahpie</h5>
                                                    <p>Mentor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>       
                                </div>
                                <div className='col-lg-4'>
                                <div class="col-item position-relative">
                                        <div class="learning-img">
                                            <img src={img3} class="img-fluid rounded" alt="american"/>
                                        </div>           
                                        <div class="py-2">
                                            <div className="Front-End d-flex align-items-center mb-2  bg-light px-3">
                                                <i class="bi bi-circle-square me-3"></i>
                                                <span>Branding</span>
                                            </div>
                                            <p>Reviving and Refrest Company Image <br/><br/></p>
                                            <div class="porcenta porcenta-trois mb-3">
                                                <div class="bar-progress"></div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-container avatar-2 p-2  me-4"><img src={avatar2} className="img-fluid avatar" /></div>
                                                <div className="type-person">
                                                    <h5 className="setction-title">Sir Dandy</h5>
                                                    <p>Mentor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>         
                                </div>
                            </div>

                            </div>
                            {/* {/<!-- DESCRIPTION      -->/} */}
                            <div className="section-lesson py-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="text-start">
                                            <h5>Your Lesson</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-end">
                                            <h6><a href="">See all</a></h6>
                                        </div>
                                    </div>
                                </div>

                                {/* {/<!-- DESCRIPTION      -->/} */}
                                <div className="section-description ">
                                    <div className='row description mb-1'>
                                        <div className="col-lg-3">
                                            <span className="text-center">MENTOR</span>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <span>TYPE</span>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <span>DESC</span>
                                        </div>
                                        <div className="col-lg-3 text-end">
                                            <span>ACTION</span>
                                        </div>
                                    </div>
                                    <div className="row description-1 bg-white py-3 pb-5">
                                        <div className="col-lg-3 ">
                                            <div className="d-flex align-items-center">
                                                <img src={avatar3} className="img-fluid"/>
                                                <div className="ps-2">
                                                    <h6 className="">Padhang Satrio</h6>
                                                    <span>2/16/2024</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="d-flex align-items-center px-2 ux-design">
                                                <i class="bi bi-x me-2"></i>
                                                <span>UI/UX Design</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <p>Understand Of UI/UX Design</p>
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <a href=""><i class="bi bi-arrow-up-right-circle text-primary"></i></a>
                                        </div>
                                    </div>
                                    <div className="border-bottom border "></div>
                                </div>
                            </div>

                        </div>
                        {/* {/<!-- PARTIE TROIS--/} */}
                        {/* LES STATISTIQUE */}
                        <div className="col-lg-3 col-sm-12 bg-white p-2 rounded">
                            <div className="section-statistique">
                                <div className="row mb-4">
                                    <div className="section-title">
                                        <h5 className="text-start">Statistic</h5>
                                    </div>
                                </div>
                                <div className="row statis">
                                    <div className="cover-amina mx-auto mb-2">
                                        <img src={avatar5} alt="amina" className="amina mx-auto img-fluid"/>
                                    </div>
                                    <div className="text-center">
                                        <h6>Good Morning! Amina Abejolo <span><i class="bi bi-fire"></i></span></h6>
                                        <p className='px-3'>Continue your learning to active target! </p>
                                    </div>
                                </div>
                                <div className="row d-inline">
                                    <div className="col-lg-4">
                                        
                                    </div>
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Users;