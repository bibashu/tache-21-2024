import React from "react";
import monimage from "../assets/monimage.png";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div className="container-fluid bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="text-start">
              <h1 className="display-4 fw-bold ">
                Learn a New Skill Everyday, Anytime, and Anywhere.
              </h1>
              <p className="pe-5 ">
                <span className="fw-bold">1000+</span> Courses covering all tech
                domains for you to
                <br />
                learn and explore new oppurtunities. Learn from
                <br />
                Industry Experts and land your Dream Job.
              </p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start py-5">
              <Button
                className="btn btn-primary btn btn-outline-warning text-white  btn-lg rounded-pill px-4 me-4 "
                type="button"
                onClick={() => Navigate("/sign")}
              >
                Start Trial
              </Button>
              <Button
                onClick={() => Navigate("/sign")}
                className="btn border-primary  btn btn-outline-primary rounded-pill me-md-2 btn-lg px-4 "
                type="button"
              >
                How it Works
              </Button>
            </div>
            <div className="row">
              <div className="col-lg-4 ">
                <div className="text-start">
                  <h1 className="text-warning"> 1000+</h1>
                  <h4>Courses to choose from</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-start">
                  <h1 className="text-primary"> 5000+</h1>
                  <h3>Students Trained</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-start">
                  <h1 className="text-orange"> 200+</h1>
                  <h4>Professional Trainers</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img className="mt-5 monimage img-fluid" src={monimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
