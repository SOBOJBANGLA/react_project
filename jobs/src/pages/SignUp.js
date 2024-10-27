import { useState } from "react";
import axios from 'axios'
import{useNavigate} from 'react-router-dom';

import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
	let history = useNavigate(); // Use for Navigate on Previous
    const [data, setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 

        //console.log(data)
    }
   
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            fname:data.fname,
            
            email:data.email,
            password:data.password

        }

        console.log(sendData);

        axios.post('http://localhost/react_project/jobs/admin/sign_list.php/',sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           history(`/sign-in`);
        }
      })  
    }



  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg13">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Sign Up</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Sign Up</li>
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

        {/* Sign up Section Start */}
        <div className="signup-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <form className="signup-form" onSubmit={submitForm}>
                            <div className="form-group">
                                <label>Enter Username</label>
                                <input type="text" className="form-control" name="fname" placeholder="Enter Username" onChange={handleChange} value={data.fname} required/>
                            </div>

                            <div className="form-group">
                              <label>Enter Email</label>
                              <input type="email" className="form-control" name="email" placeholder="Enter Your Email" onChange={handleChange} value={data.email} required/>
                            </div>

                            <div className="form-group">
                                <label>Enter Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Your Password" onChange={handleChange} value={data.password} required/>
                            </div>

                            <div className="signup-btn text-center">
                                <button type="submit">Sign Up</button>
                            </div>

                            <div className="other-signup text-center">
                                <span>Or sign up with</span>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i className='bx bxl-google'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="create-btn text-center">
                                <p>
                                    Have an Account?
                                    <Link to="/sign-in">
                                        Sign In
                                        <i className='bx bx-chevrons-right bx-fade-right'></i>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
        {/* Sign Up Section End */}

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
