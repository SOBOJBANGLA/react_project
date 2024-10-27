import { useState } from "react";
import axios from "axios";

import React from 'react'
import { Link } from 'react-router-dom'
export default function Candidate() {
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
        axios.post('http://localhost/react_project/jobs/admin/app_list.php/', inputs).then(function(response){
            console.log(response.data);
        })
    }

  return (
    <>
 <section className="page-title title-bg5">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Applicant</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Applicant</li>
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

        {/* Applicant Section Start */}
        <section className="account-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="account-information">
                            <div className="profile-thumb">
                                
                                <h3>Name:</h3>
                               
                            </div>

                            <ul>
                                <li>
                                    <Link to="#" className="active">
                                        <i className='bx bx-user'></i>
                                        My Information
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link to="#">
                                        <i className='bx bx-log-out'></i>
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="col-md-8">
                    
                        <div className="account-details">
                        <form className="job-post-from" onSubmit={handleSubmit}>
                    <h2>Fill Up Your information</h2>
                    <div className="row">
                    <div className="col-md-6">
                 <p name="">  <b>Apply for :</b> </p>
                        </div>
                        
                        <div className="col-md-6">
                        <p name=""> <b>Company Name : </b> </p>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" name="fname" id="exampleInput1" placeholder="First Name" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" name="lname" id="exampleInput1" placeholder="Last Name" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Gender</label><br/>
                                <input type="radio"  name="gender" value="Male" onChange={handleChange}/> Male 
                                <input type="radio"  name="gender" value="Female" onChange={handleChange}/> Female
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                    <label >Date of Birth  </label>
                    <input type="date" className="form-control" name="b_date" onChange={handleChange} required/>
                    </div>
                  </div>

                        <div className="col-md-">
                            <div className="form-group">
                                <label>Education</label><br/>
                                <select className="category" name="education" onChange={handleChange}>
                                    <option data-display="Select one">Select one</option>
                                    <option value="S.S.C">S.S.C</option>
                                    <option value="H.S.C">H.S.C</option>
                                    <option value="Honours">Honours</option>
                                    <option value="Masters">Masters</option>
                                    
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" id="exampleInput2" name="email" placeholder="Email" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="text" className="form-control" id="exampleInput3" name="contact" placeholder="Contact number" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Experience</label>
                                <input type="text" className="form-control" id="exampleInput3" name="experience" placeholder="experience" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Skills</label>
                                <input type="text" className="form-control" id="exampleInput3" name="skills" placeholder="skill" onChange={handleChange} required/>
                            </div>
                        </div>

                        

                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Address</label>
                                <textarea className="form-control description-area" name="address" id="exampleFormControlTextarea1" rows="10" placeholder="Address" onChange={handleChange} required></textarea>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">About you</label>
                                <textarea className="form-control description-area" name="about" id="exampleFormControlTextarea1" rows="10" placeholder="About" onChange={handleChange} required></textarea>
                            </div>
                        </div>

                        {/* <div className="col-md-12">
                            <div className="form-group">
                                <label>Attach your Resume here</label>
                                <input type="file" className="form-control" id="exampleInput3" name="resume" onChange={handleChange} required/>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Attach your Photo here</label>
                                <input type="file" className="form-control" id="exampleInput3" name="image" onChange={handleChange} required/>
                            </div>
                        </div> */}

                        <div className="col-md-12 text-center">
                            <button type="submit" name="submit" className="post-btn">
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>


                            
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Applicant Section End */}

        {/* Job Section End */}   
       
        {/* Job Section End */}
    
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
									<img src="assets/img/logo.png" alt="logo"/>
								</Link>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna. Sed eiusmod tempor incididunt ut.</p>

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
										info@jovie.com
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
            <p>© Jovie is Proudly Owned by <Link to="https://hibootstrap.com/" target="_blank">HiBootstrp</Link></p>
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
