import axios from "axios"
import { useEffect, useState } from "react";

import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/react_project/jobs/admin/job_list.php/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });

    }
    return (

        <div className = "banner-section banner-style-five">
            <div className="d-table">

                <div className="d-table-cell">
                    <div className="banner-section">



                        <div className="container">
                            <div className="banner-content text-center" >
                                <h1>Find The Best Job For Future</h1>
                                <p>Jobs Hub features overseas jobs and international employment opportunities for professionals, expatriates and adventure seekers. </p>
                            </div>

                            <form className="find-form">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input  type="text" className="form-control" id="exampleInputEmail1" placeholder="Job Title or Keyword" />
                                            <i className="bx bx-search-alt"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input  type="text" className="form-control" id="exampleInputEmail2" placeholder="Location" />
                                            <i className="bx bx-location-plus"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input  type="text" className="form-control" id="exampleInputEmail2" placeholder="Category" />
                                            <i className="bx bx-location-plus"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <button type="submit" className="find-btn">
                                            Find A Job
                                            <i className='bx bx-search'></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    {/* Banner Section End */ }

    {/* Category Section Start */ }
    <section className="categories-section category-style-three pt-100 pb-70">
        <div className="container">
            <div className="section-title text-center">
                <h2>Choose Your Category</h2>
                <p>To find the job of your choice from Jobs hub, create a account and add Resume.</p>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-accounting'></i>
                            <h3>Accountancy</h3>
                            <p>21 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-graduation-cap'></i>
                            <h3>Education</h3>
                            <p>10 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-wrench-and-screwdriver-in-cross'></i>
                            <h3>Automotive Jobs</h3>
                            <p>28 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-consultation'></i>
                            <h3>Business</h3>
                            <p>22 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-heart'></i>
                            <h3>Health Care</h3>
                            <p>33 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3  col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-computer'></i>
                            <h3>IT & Agency</h3>
                            <p>41 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-worker'></i>
                            <h3>Engineering</h3>
                            <p>10 open position</p>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Link to="job-list">
                        <div className="category-card">
                            <i className='flaticon-auction'></i>
                            <h3>Legal</h3>
                            <p>21 open position</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    {/* Category Section End */ }

    {/* Why Choose Section Start */ }
    <section className="choose-style-two why-choose">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="why-choose-text pt-100 pb-70">
                        <div className="section-title">
                            <h2>Why You Choose JobsHub?</h2>
                            <p>JobsHub is currently a Largest job site in Bangladesh, here you will find jobs according to your skills.</p>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="media">
                                    <i className="flaticon-group align-self-top mr-3"></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Best Talented People</h5>
                                        <p>To find the job of your choice from Jobs hub, create a account and add Resume.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="media">
                                    <i className="flaticon-research align-self-top mr-3"></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Easy To Find Canditate</h5>
                                        <p>To find the job of your choice from Jobs hub, create a account and add Resume.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="media">
                                    <i className="flaticon-discussion align-self-top mr-3"></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Easy To Communicate</h5>
                                        <p>To find the job of your choice from Jobs hub, create a account and add Resume.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="media">
                                    <i className="flaticon-recruitment align-self-top mr-3"></i>
                                    <div className="media-body">
                                        <h5 className="mt-0">Global Recruitment Option</h5>
                                        <p>To find the job of your choice from Jobs hub, create a account and add Resume.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-8 offset-sm-2 offset-lg-0">
                    <img src="assets/img/blog/default.png" alt="jobhub" />
                </div>
            </div>
        </div>
    </section>
    {/* Why Choose Section End */ }

    {/* Compnay Location Section Start */ }
    <section className="company-location pt-100 pb-70">
        <div className="container">
            <div className="section-title text-center">
                <h2>Companies By Location</h2>
                <p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.</p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/blog/aus.png" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>Australia</h3>
                                        <span>376 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/location/cana.png" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>Canada</h3>
                                        <span>106 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/location/chin.png" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>Beizing</h3>
                                        <span>476 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/location/indon.jpg" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>Indonesia</h3>
                                        <span>206 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/location/male (1).jpg" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>Malaysia</h3>
                                        <span>120 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <Link to="job-list">
                        <div className="location-img">
                            <img src="assets/img/location/ger.png" alt="jobhub" />

                            <div className="location-text">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h3>German</h3>
                                        <span>76 Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    {/* Compnay Location Section End */ }

    {/* Job Section End */ }
    <section className="job-style-two pt-100 pb-70">
        <div className="container">
            <div className="section-title text-center">
                <h2>Jobs You May Be Interested In</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
            </div>

            <div className="row">
            {users.map((user, key) =>
                <div className="col-lg-12" key={key}>
                    <div className="job-card-two">
                        <div className="row align-items-center">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-8">
                                <div className="job-info">
                                    <h3>
                                        <Link to="job-details">{user.job_title} </Link>
                                    </h3>
                                    <ul>
                                        <li>
                                            <i className='bx bx-briefcase' ></i>
                                            {user.category}
                                        </li>
                                        <li>
                                            <i className='bx bx-briefcase' ></i>
                                            {user.company_name}
                                        </li>
                                        <li>
                                            <i className='bx bx-location-plus'></i>
                                            {user.address}
                                        </li>
                                        <li>
                                            <i className='bx bx-stopwatch' ></i>
                                            9 days ago
                                        </li>
                                    </ul>

                                    <span>Full Time</span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="theme-btn text-end">
                                    <Link to="job-details" className="default-btn">
                                        Browse Job
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            </div>
        </div>
    </section>
    {/* Job Section End */ }

    {/* Job Info Section Start */ }
    <div className="job-info-two pt-100 pb-70">

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="looking-job">
                        <div className="media">
                            <i className='flaticon-group align-self-start mr-3'></i>
                            <div className="media-body">
                                <h5 className="mt-0">Looking For a Job</h5>
                                <p>Your next role could be with one of these top leading organizations</p>

                                <Link to="job-list">
                                    Apply Now
                                    <i className='bx bx-chevrons-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="recruiting-card">
                        <div className="media">
                            <i className='flaticon-resume align-self-start mr-3'></i>
                            <div className="media-body">
                                <h5 className="mt-0">Are You Recruiting?</h5>
                                <p>Your next role could be with one of these top leading organizations</p>

                                <Link to="/post-job">
                                    Apply Now
                                    <i className='bx bx-chevrons-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Job Info Section End */ }

    {/* Counter Section Start */ }
    <div className="counter-section pt-100 pb-70">
        <div className="container">
            <div className="row counter-area">
                <div className="col-lg-3 col-6">
                    <div className="counter-text">
                        <i className="flaticon-resume"></i>
                        <h2><span>1225</span></h2>
                        <p>Job Posted</p>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="counter-text">
                        <i className="flaticon-recruitment"></i>
                        <h2><span>145</span></h2>
                        <p>Job Filed</p>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="counter-text">
                        <i className="flaticon-portfolio"></i>
                        <h2><span>170</span></h2>
                        <p>Company</p>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="counter-text">
                        <i className="flaticon-employee"></i>
                        <h2><span>125</span></h2>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Counter Section End */ }

    {/* Candidate Section Start */ }
    <section className="candidate-section ptb-100">
        <div className="container">
            <div className="section-title text-center">
                <h2>Featured Candidates</h2>
                <p>Follow your favorite international organizations. Learn about them. Join their mission and make a difference. Share your reviews to help others</p>
            </div>

            <div className="condidate-slider owl-carousel owl-theme">
                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man5.jpg" alt="" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Mibraj Alex</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Construction & Property
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Botchergate, Carlisle
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                9D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man13.jpg" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Abdus Salam</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                SEO Expart
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Georgetown, USA
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                8D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart' ></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man3.webp" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Maichel Patel</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Project Management
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Madison, USA
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                1D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man4.jpg" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Mibraj Alex</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Construction & Property
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Botchergate, Carlisle
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                9D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man1.jpg" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Quence Joes</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Web Developer
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Augusta, Maine
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                8D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man2.jpg" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Felica Kareon</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                SEO Expart
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Georgetown, USA
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                8D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="/assets/img/candidate/man3.webp" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Malisa Petel</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Project Management
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Madison, USA
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                1D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="condidate-item">
                    <div className="candidate-img">
                        <img src="assets/img/candidate/man4.jpg" alt="jobhub" />
                    </div>
                    <div className="candidate-social">
                        <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                        <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                    </div>
                    <div className="candidate-text">
                        <h3><Link to="candidate-details.html">Quence Joes</Link></h3>
                        <ul>
                            <li>
                                <i className='bx bx-filter-alt'></i>
                                Web Developer
                            </li>
                            <li>
                                <i className='bx bx-location-plus'></i>
                                Augusta, Maine
                            </li>
                        </ul>

                        <div className="bottom-text">
                            <p>
                                <i className='bx bx-stopwatch'></i>
                                8D ago
                            </p>
                            <Link to="#">
                                <i className='bx bx-heart'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Candidate Section End */ }

    {/* Testimonial Section Start */ }

    {/* Blog Section End */ }

    {/* Subscribe Section Start */ }
    <section className="subscribe-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="section-title">
                        <h2>Get New Job Notifications</h2>
                        <p>Subscribe & get all related jobs notification</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <form className="newsletter-form" data-toggle="validator">
                        <input  type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autocomplete="off" />

                        <button className="default-btn sub-btn" type="submit">
                            Subscribe
                        </button>

                        <div id="validator-newsletter" className="form-result"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="footer-widget">
							<div className="footer-logo">
								<Link to="/">
									<img src="assets/img/cover-removebg-preview.png" alt="logo"/>
								</Link>
							</div>

							<p>Jobs Hub features overseas jobs and international employment opportunities for professionals, expatriates and adventure seekers.</p>

							<div className="footer-social">
								<Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
								<Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
								<Link to="#" target="_blank"><i className='bx bxl-pinterest-alt'></i></Link>
								<Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="footer-widget pl-60">
							<h3>For Candidate</h3>
							<ul>
								<li>
									<Link to="job-grid">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Browse Jobs
									</Link>
								</li>
								<li>
									<Link to="account.html">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Account
									</Link>
								</li>
								<li>
									<Link to="catagories">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Browse Categories
									</Link>
								</li>
								<li>
									<Link to="resume.html">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Resume
									</Link>
								</li>
								<li>
									<Link to="job-list">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Job List
									</Link>
								</li>
								<li>
									<Link to="sign-up">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Sign Up
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="footer-widget pl-60">
							<h3>Quick Links</h3>
							<ul>
								<li>
									<Link to="/">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Home
									</Link>
								</li>
								<li>
									<Link to="about">
										<i className='bx bx-chevrons-right bx-tada'></i>
										About
									</Link>
								</li>
								<li>
									<Link to="faq.html">
										<i className='bx bx-chevrons-right bx-tada'></i>
										FAQ
									</Link>
								</li>
								<li>
									<Link to="pricing.html">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Pricing
									</Link>
								</li>
								<li>
									<Link to="privacy.html">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Privacy
									</Link>
								</li>
								<li>
									<Link to="contact">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="footer-widget footer-info">
							<h3>Information</h3>
							<ul>
								<li>
									<span>
										<i className='bx bxs-phone'></i>
										Phone:
									</span>
									<Link to="tel:882569756">
										+101 984 754
									</Link>
								</li>

								<li>
									<span>
										<i className='bx bxs-envelope'></i>
										Email:
									</span>
									<Link to="mailto:info@jovi.com">
										info@jobhub.com
									</Link>
								</li>

								<li>
									<span>
										<i className='bx bx-location-plus'></i>
										Address:
									</span>
									123, Denver, USA
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            </footer>
        <div className="copyright-text text-center">
            <p>© Jobshub is Proudly Owned by <Link to="https://hibootstrap.com/" target="_blank">HiBootstrp</Link></p>
        </div>
        <div className="top-btn">
			<i className='bx bx-chevrons-up bx-fade-up'></i>
		</div>

    </div>

   
        

        
   
  )
}
