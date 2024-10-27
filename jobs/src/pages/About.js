import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <section className="page-title title-bg1">
            <div className="title-bg1"></div>
           
            <div className="d-table">
               
                
                <div className="d-table-cell">
                    
                    <h2>About Us</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>About Us</li>
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

        {/* About Section Start */}
        <section className="about-section ptb-100">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <div className="section-title">
                                <h2>How We Started</h2>
                            </div>

                            <p>Right after its launching, the site has been able to attract the Internet users in the country. The site regularly updates Job Information (on average more than 4500 valid job news are placed at any point of time at the site), provides facility to the job seekers for posting resume and online application. The site has also been able to get good response from a large number of organizations in the country who use online job advertisement facility, online CV bank access and online application receiving and processing facility of www.jobhub.com. Till now, more than 45,000 employers in the country have recruited more than 1 million professionals at different levels for their organizations through Jobshub.com service.</p>

                            <p>Follow your favorite international organizations. Learn about them. Join their mission and make a difference. Share your reviews to help others</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/img/profile.png" alt="jobhub"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Section End */}

		{/* Way To Use Section Start */}
		<section className="use-section pt-100 pb-70">
			<div className="container">
				<div className="section-title text-center">
					<h2>Easiest Way To Use</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="use-text">
							<span>1</span>
							<i className='flaticon-website'></i>
							<h3>Browse Job</h3>
							<p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="use-text">
							<span>2</span>
							<i className='flaticon-recruitment'></i>
							<h3>Find Your Vaccancy</h3>
							<p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="use-text">
							<span>3</span>
							<i className='flaticon-login'></i>
							<h3>Submit Resume</h3>
							<p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
        {/* Way To Use Section End */}
        
        {/* Why Choose Section Start */}
        <section className="why-choose-two pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Why You Choose Us Among Other Job Site?</h2>
                    <p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-card">
                            <i className="flaticon-resume"></i>
                            <h3>Advertise Job</h3>
                            <p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.  </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-card">
                            <i className="flaticon-recruitment"></i>
                            <h3>Recruiter Profiles</h3>
                            <p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills. </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                        <div className="choose-card">
                            <i className="flaticon-employee"></i>
                            <h3>Find Your Dream Job</h3>
                            <p>Jobs Hub is currently a Largest job site in World, here you will find jobs according to your skills.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose Section End */}

        {/* Grow Business Section Start */}
        <div className="grow-business pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="grow-text">
                            <div className="section-title">
                                <h2>Grow Your Business Faster With Premium Advertising</h2>
                            </div>

                            <p> Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently.
                            </p>

                            <p> Follow your favorite international organizations. Learn about them. Join their mission and make a difference. Share your reviews to help others
                                
                            </p>

                            <div className="theme-btn">
                                <Link to="#" className="default-btn">Checkout More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="grow-img">
                            <img src="assets/img/banner/bg7 (1).jpg" alt="grow image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Grow Business Section End */}

        {/* Counter Section Start */}
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
        {/* Counter Section End */} 

        {/* Testimonial Section Start */}
        <div className="testimonial-style-two ptb-100">
            <div className="container">
                <div className="section-title text-center">
                    <h2>What Client’s Say About Us</h2>
                    <p>Jobs Hub features overseas jobs and international employment opportunities for professionals, expatriates and adventure seekers.</p>
                </div>

                <div className="row">
                    <div className="testimonial-slider-two owl-carousel owl-theme">
                        <div className="testimonial-items">
                            <div className="testimonial-text">
                                <i className='flaticon-left-quotes-sign'></i>
                                <p>This is a public site with free access and Jobshub assumes no liability for the quality and genuineness of responses. Jobshub.Com Limited is not liable for any information provided by any individual. The individual/company would have to conduct its own background checks on the bonafide nature of all responses.</p>
                            </div>

                            <div className="testimonial-info-text">
                                <h3>Alisa Meair</h3>
                                <p>CEO of  Company</p>
                            </div>
                        </div>

                        <div className="testimonial-items">
                            <div className="testimonial-text">
                                <i className='flaticon-left-quotes-sign'></i>
                                <p>This is a public site with free access and Jobshub assumes no liability for the quality and genuineness of responses. Jobshub.Com Limited is not liable for any information provided by any individual. The individual/company would have to conduct its own background checks on the bonafide nature of all responses.</p>
                            </div>

                            <div className="testimonial-info-text">
                                <h3>Adam Smith</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>

                        <div className="testimonial-items">
                            <div className="testimonial-text">
                                <i className='flaticon-left-quotes-sign'></i>
                                <p>This is a public site with free access and Jobshub assumes no liability for the quality and genuineness of responses. Jobshub.Com Limited is not liable for any information provided by any individual. The individual/company would have to conduct its own background checks on the bonafide nature of all responses.</p>
                            </div>

                            <div className="testimonial-info-text">
                                <h3>John Doe</h3>
                                <p>Graphics Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Testimonial Section End */} 
    
        {/* Blog Section Start */}
       
        {/* Blog Section End */}

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
									<Link to="mailto:info@jobshub.com">
										info@jobshub.com
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
