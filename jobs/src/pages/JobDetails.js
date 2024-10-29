import React from 'react'
import { Link } from 'react-router-dom'
export default function JobDetails() {
  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg5">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Job Details</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Job Details</li>
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

        {/* Job Details Section Start */}
        <section className="job-details ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="job-details-text">
                                    <div className="job-card">
                                        <div className="row align-items-center">
                                           
                                            <div className="col-md-10">
                                                <div className="job-info">
                                                    <h3>Junior oficer</h3>
                                                    <ul>
                                                        <li>
                                                            <i className='bx bx-location-plus'></i>
                                                            Dhaka, Bangaldesh
                                                        </li>
                                                        <li>
                                                            <i className='bx bx-filter-alt' ></i>
                                                            Accountancy
                                                        </li>
                                                        <li>
                                                            <i className='bx bx-briefcase' ></i>
                                                            Freelance
                                                        </li>
                                                    </ul>
                                                    
                                                    <span>
                                                        <i className='bx bx-paper-plane' ></i>
                                                        Apply Before: June 01,2021
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-text">
                                        <h3>Description</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into essentially unchanged.</p>

                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    </div>
                                    
                                    <div className="details-text">
                                        <h3>Requirements</h3>
                                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                        <ul>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Work experience
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Skills (soft skills and/or technical skills)
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                WPersonal qualities and attributes.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Support software roll-outs to production.
                                            </li>
                                            <li>
                                                <i className='bx bx-check'></i>
                                                Guide and mentor junior engineers. Serve as team lead if appropriate.

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="details-text">
                                        <h3>Job Details</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Company</span></td>
                                                            <td>Square LTD</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Location</span></td>
                                                            <td>Dhaka, Bangladesh</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Job Type</span></td>
                                                            <td>Full Time</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Email</span></td>
                                                            <td><Link to="mailto:hello@company.com">hello@company.com</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-md-6">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span>Experince</span></td>
                                                            <td>2 Years</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Language</span></td>
                                                            <td>English</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Salary</span></td>
                                                            <td>10,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span>Website</span></td>
                                                            <td><Link to="#">www.company.com</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="theme-btn">
                                        <Link to="/candidate" className="default-btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="job-sidebar">
                            <h3>Posted By</h3>
                            <div className="posted-by">
                                
                                <h4>John Doe</h4>
                                <span>CEO of Tourt Design LTD</span>
                            </div>
                        </div>

                        <div className="job-sidebar">
                            <h3>Location</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991517034!2d-74.25987556253516!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588772651198!5m2!1sen!2sbd" frameborder="0"></iframe>
                        </div>

                        <div className="job-sidebar">
                            <h3>Keywords</h3>
                            <ul>
                                <li>
                                    <Link to="#">Web Design</Link>
                                </li>
                                <li>
                                    <Link to="#">Data Sceince</Link>
                                </li>
                                <li>
                                    <Link to="#">SEO</Link>
                                </li>
                                <li>
                                    <Link to="#">Content Writter</Link>
                                </li>
                                <li>
                                    <Link to="#">Finance</Link>
                                </li>
                                <li>
                                    <Link to="#">Business</Link>
                                </li>
                                <li>
                                    <Link to="#">Education</Link>
                                </li>
                                <li>
                                    <Link to="#">Graphics</Link>
                                </li>
                                <li>
                                    <Link to="#">Video</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="job-sidebar social-share">
                            <h3>Share In</h3>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank">
                                        <i className="bx bxl-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank">
                                        <i className="bx bxl-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank">
                                        <i className="bx bxl-pinterest"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank">
                                        <i className="bx bxl-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Job Details Section End */}

        {/* Job Section End */}   
        <section className="job-style-two pt-100 pb-70">
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
                                            <Link to="#">Web Designer, Graphic Designer, UI/UX Designer </Link>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i className='bx bx-briefcase' ></i>
                                                Graphics Designer
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
                                                9 days ago
                                            </li>
                                        </ul>

                                        <span>Full Time</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="theme-btn text-end">
                                        <Link to="#" className="default-btn">
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
                                            <Link to="#">Website Developer & Software Developer</Link>
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
                                        <Link to="#" className="default-btn">
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
                                            <Link to="#">Application Developer & Web Designer</Link>
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
                                        <Link to="#" className="default-btn">
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
                                            <Link to="#">Frontend & Backend Developer</Link>
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
                                        <Link to="#" className="default-btn">
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
                                            <Link to="#">IT Department & Manager</Link>
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
                                        <Link to="#" className="default-btn">
                                            Browse Job
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

