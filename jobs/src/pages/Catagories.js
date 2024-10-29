import axios from "axios"
import { useEffect, useState } from "react";

import React from 'react'
import { Link } from 'react-router-dom'
export default function Catagories() {
	const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/react_project/jobs/admin/category_list.php/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }


  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg18">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Categories</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Categories</li>
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

        {/* Category Section Start */}
		<section className="categories-section category-style-two pt-100 pb-70">
			<div className="container">
				<div className="section-title text-center">
					<h2>Choose Your Category</h2>
					<p>Follow your favorite international organizations. Learn about them. Join their mission and make a difference. Share your reviews to help others</p>
				</div>

				<div className="row">
				{users.map((user, key) =>
					<div className="col-lg-3 col-md-4 col-sm-6" key={key}>
						<Link to="job-list">
						<div className="category-card">
							<i className='flaticon-accounting'></i>
							<h3>{user.name}</h3>
							<p>1 open position</p>
						</div>
						</Link>
					</div>
				)}
					
                </div>
                
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <Link className="page-link" href="#" tabindex="-1" aria-disabled="true">
                                <i className='bx bx-chevrons-left bx-fade-left'></i>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                        <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" href="#">
                                <i className='bx bx-chevrons-right bx-fade-right'></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
		</section>
		{/* Category Section End */}

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
									<img src="assets/img/cover-removebg-preview.png" alt="jobhub"/>
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
									<Link to="/catagories">
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
            <p>© Jobshub  is Proudly Owned by <Link to="https://hibootstrap.com/" target="_blank">HiBootstrp</Link></p>
        </div>
		<div className="top-btn">
			<i className='bx bx-chevrons-up bx-fade-up'></i>
		</div>

    </>
  )
}
