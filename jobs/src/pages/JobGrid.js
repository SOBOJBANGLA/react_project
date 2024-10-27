import React from 'react'
import { Link } from 'react-router-dom'
export default function JobGrid() {
  return (
    <>

{/* Page Title Start */}
        <section className="page-title title-bg5">
            <div className="d-table">
                <div className="d-table-cell">
                    <h2>Job Grid</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Job Grid</li>
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

		{/* Jobs Section Start */}
		<section className="job-section jobs-grid-section pt-100 pb-70">
			<div className="container">
				<div className="section-title text-center">
					<h2>Jobs You May Be Interested In</h2>
					<p>This is a public site with free access and Jobshub assumes no liability for the quality and genuineness of responses. Jobshub.Com Limited is not liable for any information provided by any individual.</p>
				</div>

				<div className="row">
					<div className="col-md-6">
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
											<Link to="/job-details">Post-Room Operate</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">Tourt Design LTD</Link></li>
											<li>
												<i className='bx bx-location-plus'></i>
												Wellesley Rd, London
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

					<div className="col-md-6">
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
										<Link to="/job-details">Data Entry</Link>
									</h3>
									<ul>
										<li>Via <Link to="#">Techno Inc.</Link></li>
										<li>
											<i className='bx bx-location-plus'></i>
											Street 40/A, London
										</li>
										<li>
											<i className='bx bx-filter-alt' ></i>
											Data Entry
										</li>
										<li>
											<i className='bx bx-briefcase' ></i>
											Freelance
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-3">
								<div className="job-save">
								<Link to="#">
									<i className='bx bx-heart'></i>
								</Link>
								<p>
									<i className='bx bx-stopwatch' ></i>
									3 Hr Ago
								</p>
								</div>
							</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
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
											<Link to="/job-details">Graphic Designer</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">Devon Design</Link></li>
											<li>
											<i className='bx bx-location-plus'></i>
											West Sight, USA
											</li>
											<li>
											<i className='bx bx-filter-alt' ></i>
											Graphics
											</li>
											<li>
											<i className='bx bx-briefcase' ></i>
											Freelance
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-3">
									<div className="job-save">
										<Link to="#">
											<i className='bx bx-heart'></i>
										</Link>
										<p>
											<i className='bx bx-stopwatch' ></i>
											4 Hr Ago
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
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
											<Link to="/job-details">Web Developer</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">MegaNews</Link></li>
											<li>
												<i className='bx bx-location-plus'></i>
												San Francisco, California
											</li>
											<li>
												<i className='bx bx-filter-alt' ></i>
												Development
											</li>
											<li>
												<i className='bx bx-briefcase' ></i>
												Freelance
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-3">
									<div className="job-save">
										<Link to="#">
											<i className='bx bx-heart'></i>
										</Link>
										<p>
											<i className='bx bx-stopwatch' ></i>
											5 Hr Ago
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
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
											<Link to="/job-details">Digital Marketor</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">AB Marketer LTD</Link></li>
											<li>
												<i className='bx bx-location-plus'></i>
												Wellesley Rd, London
											</li>
											<li>
												<i className='bx bx-filter-alt' ></i>
												Marketing
											</li>
											<li>
												<i className='bx bx-briefcase' ></i>
												Freelance
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-3">
									<div className="job-save">
										<Link to="#">
											<i className='bx bx-heart'></i>
										</Link>
										<p>
											<i className='bx bx-stopwatch' ></i>
											6 Hr Ago
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
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
											<Link to="/job-details">UI/UX Designer</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">Design Hunter</Link></li>
											<li>
											<i className='bx bx-location-plus'></i>
											Zoo Rd, London
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
									</div>
								</div>

								<div className="col-lg-3">
									<div className="job-save">
										<Link to="#">
											<i className='bx bx-heart'></i>
										</Link>
										<p>
											<i className='bx bx-stopwatch' ></i>
											8 Hr Ago
										</p>
									</div>
								</div>
							</div>
						</div>
                    </div>
                    
                    <div className="col-md-6">
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
											<Link to="/job-details">Accountants</Link>
										</h3>
										<ul>
											<li>Via <Link to="#">Tourt Design LTD</Link></li>
											<li>
												<i className='bx bx-location-plus'></i>
                                                Green View, Australia
											</li>
											<li>
												<i className='bx bx-filter-alt' ></i>
												Finance
											</li>
											<li>
												<i className='bx bx-briefcase' ></i>
												Full Time
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

					<div className="col-md-6">
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
										<Link to="/job-details">Budget Analysts</Link>
									</h3>
									<ul>
										<li>Via <Link to="#">Techno Inc.</Link></li>
										<li>
											<i className='bx bx-location-plus'></i>
											Street 40/A, London
										</li>
										<li>
											<i className='bx bx-filter-alt' ></i>
											Data Entry
										</li>
										<li>
											<i className='bx bx-briefcase' ></i>
											Full Time
										</li>
									</ul>
								</div>
							</div>

                                <div className="col-lg-3">
                                    <div className="job-save">
                                    <Link to="#">
                                        <i className='bx bx-heart'></i>
                                    </Link>
                                    <p>
                                        <i className='bx bx-stopwatch' ></i>
                                        3 Hr Ago
                                    </p>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
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
									<Link to="mailto:info@jobhub.com">
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
