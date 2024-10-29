import React from 'react'
import { Link } from 'react-router-dom'
export default function JobList() {
  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg5">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Job List</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Job List</li>
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

        {/* Job Section End */}   
        <section className="job-style-two job-list-section pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Jobs You May Be Interested In</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Junior oficer</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Accountancy
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                35000-38000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Dhaka, Bangaldesh
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
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Website Developer & Software Developer</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Web Developer
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                $3000-$8000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Garden Road, UK
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch' ></i>
                                                5 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Application Developer & Web Designer</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase'></i>
                                                App Developer
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase'></i>
                                                $3000-$4000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                State City, USA
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch' ></i>
                                                8 days ago
                                            </li>
                                        </ul>

                                        <span>Part-Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Frontend & Backend Developer</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Web Developer
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                $5000-$8000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Drive Post NY 676
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch' ></i>
                                                1 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                   
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">IT Department & Manager</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Manager
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                $35000-$38000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Wellesley Rd, London
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch' ></i>
                                                7 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Office Assistant</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Manager
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                $10000-$12000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Wellesley Rd, London
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
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                   
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Accountants</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Finance
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                $5000-$8000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Green View, Australia
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch' ></i>
                                                2 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="job-card-two">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    
                                </div>
                                <div className="col-md-8">
                                    <div className="job-info">
                                        <h3>
                                            <Link to="/job-details">Budget Analysts</Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase'></i>
                                                Data Science
                                            </li>
                                            <li>
                                                <i className='bx bx-briefcase'></i>
                                                $3000-$8000
                                            </li>
                                            <li>
                                                <i className='bx bx-location-plus'></i>
                                                Park Road, UK
                                            </li>
                                            <li>
                                                <i className='bx bx-stopwatch'></i>
                                                3 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="/job-details" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <Link  className="page-link" to="#" tabindex="-1" aria-disabled="true">
                                <i className='bx bx-chevrons-left bx-fade-left'></i>
                            </Link>
                        </li>
                        <li className="page-item"><Link  className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link  className="page-link active" to="#">2</Link></li>
                        <li className="page-item"><Link  className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link  className="page-link" to="#">
                                <i className='bx bx-chevrons-right bx-fade-right'></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
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

