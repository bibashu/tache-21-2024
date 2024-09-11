// import React from "react";
// import elearning from "../assets/elearning.png";
// import avatar1 from "../assets/avatar1.jpeg";
// import avatar2 from "../assets/avatar2.jpeg";
// import avatar3 from "../assets/avatar3.jpeg";
// import avatar4 from "../assets/avatar4.jpeg";
// import "./Avatar.css";


// const Users = () => {
//     return(
//         <div className="container-fluid">
//                <div className="row"> 
//                <div className="col-lg-3 col-sm-12 border-end">  
//                <div> 
//                <img className="elearning img-fluid" src={elearning} />  
//                </div>
//                <div className="py-5 px-3">  
//                <p>  OVERVIEW </p>
//                <div className="py-3"> 
//                <a href="" className="me-3 text-decoration-none"> 
//                   {""}
//                   <i class="bi bi-grid-1x2-fill text-primary px-3 icon"></i>
//                   Dashboard
//                   </a>
//                   </div>
//                   <div className="py-3"> 
//                <a href="" className="me-3 text-decoration-none"> 
//                   {""}
//                   <i class="bi bi-inbox px-3 icon"></i>
//                   Inbox
//                   </a>
//                   </div>
//                   <div className="py-3"> 
//                <a href="" className="me-3 text-decoration-none"> 
//                   {""}
//                   <i class="bi bi-clipboard-plus-fill px-3 icon"></i>
//                   Task
//                   </a>
//                   </div>
//                   <div className="py-3"> 
//                <a href="" className="me-3 text-decoration-none"> 
//                   {""}
//                   <i class="bi bi-people-fill px-3 icon"></i>
//                   Group
//                   </a>
//                   </div>


//                  </div>

//                  <div className="py-5 px-3">
//                  <p> FRIENDS </p>

//                  <div className="d-flex">
//                  <div className="avatar-container">
//                  <img className="avatar1 img-fluid avatar" src={avatar1} />
//                  </div>
//                  <div className="d-grid px-3">
//                  <h5>Begas Mahpie</h5>
//                  <p>Friend</p>
//                  </div>
//                  </div>
//                  <div className="d-flex">
//                  <div className="avatar-container">
//                  <img className="avatar2 img-fluid avatar" src={avatar2} />
//                  </div>
//                  <div className="d-grid px-3">
//                  <h5>Sir Daddy</h5>
//                  <p>Cid Friend</p>
//                  </div>
//                  </div>
//                  <div className="d-flex">
//                  <div className="avatar-container">
//                  <img className="avatar3 img-fluid avatar" src={avatar3} />
//                  </div>
//                  <div className="d-grid px-3">
//                  <h5>Jhon Tosan</h5>
//                  <p>Friend</p>
//                  </div>
//                  </div>
//                  </div>

//                  <div className="py-5 px-3">
//                  <p> SETTING </p>
//                  <div className="">
//                  <a href="" className="me-3 text-decoration-none"> 
//                   {""}
//                   <i class="bi bi-gear-fill px-3 icon"> </i>
//                     Setting
//                     </a>
//                      </div>
//                      <div className="">
//                  <a href="" className="me-3 text-decoration-none text-orange"> 
//                   {""}
//                   <i class="bi bi-box-arrow-right text-orange px-3 icon"> </i>
//                     Layout
//                     </a>
//                      </div>
//                  </div>
//                   </div>

                    
//                   <div className="col-lg-9 col-sm-12">  
//                   <div className="row"> 

//                        <div className="col-lg-8 col-sm-12">  
//                        <form className="d-flex py-3" role="search">  
//                        <input
//                         className="form-control me-2 rounded-pill"
//                         type="search"
//                         placeholder="Search your course..."
//                         aria-label="search"
//                         />
//                          </form>
//                          <div className="container1 bg-primary">
//                          <p className="px-5 py-3 text-light"> ONLINE COURSE </p> 
//                          <div className="px-5 text-light">
//                          <h1> Sharpen Your Skills Professional Online Courses  </h1>  
//                           </div> 
//                           <div className="py-5 px-3"> 
//                           < input
//                            className="from-control me-2 rounded-pill text-center"
//                            type="search"
//                            placeholder="Join Now"
//                             />  
//                              <div className="container"> 
//                              <i class="bi bi-chevron-right"></i> 
//                                  </div> 
//                                  <div className="row"> 
//                                  <div className="col-lg-4"> 
//                                  <div className="container-1 border"> 
//                                  <div className="d-flex"> 
//                                  <div className="Container"> 

//                                      </div> 
//                                      <div className="d-grid px-4 py-3">  
//                                      <p> 2/8 Watched </p> 
//                                      <h6> UI/UX Design </h6> 
//                                         </div>
//                                         <a href="#"> 
//                                         <i class="bi bi-three-dots-vertical text"> </i>  
//                                         </a>  
//                                      </div> 
//                                      </div>  
//                                     </div> 
//                                     <div className="col-lg-4"> 
//                                  <div className="container-1 border"> 
//                                  <div className="d-flex"> 
//                                  <div className="Container"> 
//                                  <i class="bi bi-back"></i> 
//                                      </div> 
//                                      <div className="d-grid px-4 py-3">  
//                                      <p> 3/8 Watched </p> 
//                                      <h6> Branding </h6> 
//                                         </div>
//                                         <a href="#"> 
//                                         <i class="bi bi-three-dots-vertical text"> </i>  
//                                         </a>  
//                                      </div> 
//                                      </div>  
//                                     </div> 
//                                     <div className="col-lg-4"> 
//                                  <div className="container-1 border"> 
//                                  <div className="d-flex"> 
//                                  <div className="Container"> 

//                                      </div> 
//                                      <div className="d-grid px-4 py-3">  
//                                      <p> 6/12 Watched </p> 
//                                      <h6> Frontend </h6> 
//                                         </div>
//                                         <a href="#"> 
//                                         <i class="bi bi-three-dots-vertical text"> </i>  
//                                         </a>  
//                                      </div> 
//                                      </div>  
//                                     </div> 


//                                      </div> 
//                           </div> 
//                               </div> 
//                         </div> 


//                         <div className="col-lg-4 d-flex py-3">
//                         <div className="container"> 
//                         <i class="bi bi-bell-fill"></i> 
//                             </div> 
//                             <div className="border-left vertical-line"> 
//                                 </div> 
//                                 <div className="avatar-container">
//                                 < img className="avatar4 img-fluid avatar" src={avatar4} /> 
//                                      </div> 
//                                      <h5 className="py-3">Jason Ranti </h5> 
//                              </div> 


//                    </div>
//                      </div>


//                   </div>
//                </div>
//     ); 
// }

// export default Users;

































 import React from 'react';
 import { useState } from 'react';
 import elearning from '../assets/elearning.png';
 import avatar1 from '../assets/avatar1.jpeg';
 import avatar2 from '../assets/avatar2.jpeg';
 import avatar3 from '../assets/avatar3.jpeg';






 const Users = ({  }) => {
     const [searchTerm, setSearchTerm] = useState('');

     const handleSearchChange = (e) => {
         setSearchTerm(e.target.value);
     };


     return (
         <div className="container-fluid">
            <div className='row'>  


                     <div className='col-lg-3 col-sm-12 border-end'>  
                            
                     <div className="text-start mb-5">
                             { <img className="elearning img-fluid" src={elearning} /> }
                         </div>

                         <div className=" ps-3 mb-3 ">
                         <span className="mb-2">OVERVIEW</span>
                         <div className="d-flex align-items-center mb-3 py-4">
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

                         <div className=" ps-3 section-avatar pb-5 mb-5 py-4">
                         <span className="text-lead mb-3">FRIENDS</span>
                         <div className="d-flex align-items-center  mb-3">
                             <div className="avatar-container avatar-1 me-4  p-2">
                                 { <img src={avatar1} className="img-fluid avatar" /> }
                                 </div>
                                 <div className="type-person py-3">
                                 <h5 className="section-title">Bagas Mahpie</h5>
                                 <p>Friend</p>
                             </div>
                                 </div>
                                 <div className="d-flex align-items-center mb-3">
                             <div className="avatar-container avatar-2 p-2  me-4">
                                 { <img src={avatar2} className="img-fluid avatar" /> }
                                 </div>
                             <div className="type-person">
                                <h5 className="setction-title">Sir Dandy</h5>
                                <p>Old friend</p>
                             </div>
                         </div>
                        
                         <div className="d-flex  align-items-center mb-3">
                             <div className="avatar-container avatar-3 p-2 me-4">
                                 { <img src={avatar3} className="img-fluid avatar" /> }
                                 </div>
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

                        <div className="col-lg-9 col-sm-12 ONLINE-COURSE">
                        <div className="row">

                        <div className='col-lg-8 col-sm-12'>
                        <div className="container-fluid section-notif">
                                 <input
                                     type="text"
                                     className="form-control rounded-pill me-2"
                                     placeholder="Rechercher..."
                                     value={searchTerm}
                                     onChange={handleSearchChange}
                                 />
                                  </div>
                                  <div className="section-skills py-5 px-2">
                                 <div className="row text-start bg-primary text-white rounded p-3">
                                     <p className='text-white'>ONLINE COURSE</p>
                                     <h1>Sharpen Your Skills whith<br/>Professional Online Courses</h1>
                                     <div className="d-flex align-items-center text-center py-1 px-3 section-join">
                                         <h6>Join Now</h6>
                                         <a href=""><i class="bi bi-chevron-right"></i></a>
                                     </div>
                                 </div>
                             </div>
                          </div>

                          { <div className='row'> 
                          <div className='col-lg-2 col-sm-6 rounded-pill border '>
                          <div className="d-flex align-items-center  mb-3"> 
                          <div className="avatar-container avatar-2 p-2  me-4">
                              
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
                          <div className='col-lg-2 col-sm-6 rounded-pill border '>
                          <div className="d-flex align-items-center  mb-3"> 
                          <div className="avatar-container avatar-2 p-2  me-4">
                              
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
                          <div className='col-lg-2 col-sm-6 rounded-pill border '>
                          <div className="d-flex align-items-center  mb-3"> 
                          <div className="avatar-container avatar-2 p-2  me-4">
                              
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


                          </div> }


                        </div>
                        </div>




            </div>
         </div>
     );
 }

 
 export default Users;



