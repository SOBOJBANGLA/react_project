import { useState } from "react";
import axios from "axios";

import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    //console.log(inputs);
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(inputs);
        axios.post('http://localhost/react_project/jobs/admin/contact_list.php/', inputs).then(function(response){
            alert(response.data);
        })
    }


  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg23">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Contact Us</li>
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

        {/* Contact Section Start */}
        <div className="contact-card-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="contact-card">
                                    <i className='bx bx-phone-call'></i>
                                    <ul>
                                        <li>
                                            <Link to="tel:+145664474574">
                                                +1-456-644-7457
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="tel:17459674567">
                                                +1-745-967-4567
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
        
                            <div className="col-md-4 col-sm-6">
                                <div className="contact-card">
                                    <i className='bx bx-mail-send' ></i>
                                    <ul>
                                        <li>
                                            <Link to="mailto:info@jovie.com">
                                                info@jobhub.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="mailto:hello@jovie.com">
                                                hello@jobhub.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
        
                            <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                                <div className="contact-card">
                                    <i className='bx bx-location-plus' ></i>
                                    <ul>
                                        <li>
                                            123, Denver, USA
                                        </li>
                                        <li>
                                            Street view 3/B, USA
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Contact Section End */}

        {/* Contact Form Start */}
        <section className="contact-form-section pb-100">
            <div className="container">
                <div className="contact-area">
                    <h3>Lets' Talk With Us</h3>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" onChange={handleChange} placeholder="Your Name"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" onChange={handleChange} placeholder="Your Email"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="number" name="number" id="number" className="form-control" required data-error="Please enter your number" onChange={handleChange} placeholder="Phone Number"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="subject" id="subject" className="form-control" required data-error="Please enter your subject" onChange={handleChange} placeholder="Your Subject"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control message-field" id="message" cols="30" rows="7" required data-error="Please type your message" placeholder="Write Message" onChange={handleChange}></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        
                            <div className="col-lg-12 col-md-12 text-center">
                                <button type="submit" className="default-btn contact-btn">
                                    Send Message
                                </button>
                                <div id="msgSubmit" className="h3 alert-text text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/* Contact Form End */}

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
            <p>© Jobshub is Proudly Owned by <Link to="https://hibootstrap.com/" target="_blank">HiBootstrp</Link></p>
        </div>
        {/* Footer Section End */}

        {/* Back To Top Start */}
		<div className="top-btn">
			<i className='bx bx-chevrons-up bx-fade-up'></i>
		</div>
		{/* Back To Top End */}

    </>
  )
}
