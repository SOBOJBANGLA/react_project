import axios from "axios"
import { useEffect, useState } from "react";

import React from 'react'
import { Link } from 'react-router-dom'

export default function FindJob() {
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
    <>

<section className="page-title title-bg2">

            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Find a Job</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Find a Job</li>
                    </ul>
                </div>
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </section>
        {/* Page Title End */}

        {/* Find Section Start */}
        <div className="find-section ptb-100">
            <div className="container">
                <form className="find-form mt-0">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Job Title or Keyword"/>
                                <i className="bx bx-search-alt"></i>
                            </div>
                        </div>
    
                        <div className="col-lg-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Location"/>
                                <i className="bx bx-location-plus"></i>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Category"/>
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
        {/* Find Section End */}
    
        {/* Job Category Section Start */}
        <div className="category-style-two pb-70"> 
            <div className="container">
                <div className="section-title">
                    <h2>Popular Jobs Category</h2>
                    <p>Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-wrench-and-screwdriver-in-cross"></i>
                                <h3>Construction</h3>
                                <p>6 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-accounting"></i>
                                <h3>Finance</h3>
                                <p>8 new Job</p>
                            </div>
                        </Link>                  
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-heart"></i>
                                <h3>Healthcare</h3>
                                <p>9 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-computer-1"></i>
                                <h3>Graphic Design</h3>
                                <p>6 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-research"></i>
                                <h3>Banking Jobs</h3>
                                <p>5 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-worker"></i>
                                <h3>Automotive</h3>
                                <p>12 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-graduation-cap"></i>
                                <h3>Education</h3>
                                <p>15 new Job</p>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3  col-sm-6">
                        <Link to="/job-list">
                            <div className="category-item">
                                <i className="flaticon-computer"></i>
                                <h3>Data Analysis</h3>
                                <p>5 new Job</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Job Category Section End */}

		{/* Jobs Section Start */}
		<section className="job-section pb-70">
			<div className="container">
				<div className="section-title text-center">
					<h2>Jobs You May Be Interested In</h2>
					<p>Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently.  Our web-site aims to explore maximum benefits of the Internet.</p>
				</div>

				<div className="row">
				{users.map((user, key) =>
					<div className="col-md-6" key={key}>
						<div className="job-card">
							<div className="row align-items-center">
								<div className="col-lg-3">
									<div className="thumb-img">
										<Link to="/job-details">
											
										</Link>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="job-info">
										<h3>
											<Link to="/job-details">{user.job_title}</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">{user.company_name}</Link></li>
											<li>
												<i className='bx bx-location-plus'></i>
												{user.address}
											</li>
											<li>
												<i className='bx bx-filter-alt' ></i>
												{user.category}
											</li>
											<li>
												<i className='bx bx-briefcase' ></i>
												{user.last_date}
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-3">
									<div className="job-save">
										<span>Full Time</span>
										<Link to="#">
											<i className='bx bx-heart'></i>
										</Link>
										<p>
											<i className='bx bx-stopwatch' ></i>
											1 Hr Ago
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				)}
				</div>
			</div>
		</section>
		{/* Jobs Section End */}
    
        {/* Subscribe Section Start */}
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
                            <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>
    
                            <button className="default-btn sub-btn" type="submit">
                                Subscribe
                            </button>
    
                            <div id="validator-newsletter" className="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* Subscribe Section End */}

        {/* Footer Section Start */}
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
									<Link to="/job-grid">
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
									<Link to="/job-list">
										<i className='bx bx-chevrons-right bx-tada'></i>
										Job List
									</Link>
								</li>
								<li>
									<Link to="/sign-up">
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
									<Link to="/about">
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
									<Link to="/contact">
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
									<Link to="mailto:info@jovie.com">
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
    </>
  )
}
