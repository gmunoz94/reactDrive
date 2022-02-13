import React from "react";
import { Container } from "react-bootstrap";
import '../styles/main.css'
const Main = () => {


  return (
    <div>
       <Container className="px-4 py-5" id="home-cards">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
                <a href="/patient" className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg text-decoration-none">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">Add Patient</h2>
                </div>
                </a>
            </div>

            <div className="col">
                <a href="/patient/search" className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg text-decoration-none">
                <div className="d-flex flex-column h-100 p-5 text-white text-shadow-1">
                    <h2 className="py-5 my-5 display-6 lh-1 fw-bold text-center">Search Patients</h2>
                </div>
                </a>
            </div>

            <div className="col">
                <a href="/orders" className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg text-decoration-none">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">View Orders</h2>
                </div>
                </a>
            </div>
            </div>
        </Container>
    </div>
  );
};
export default Main;