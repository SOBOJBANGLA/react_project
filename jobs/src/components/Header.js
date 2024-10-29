

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className="navbar-area">
			{/* Menu For Mobile Device */}
			<div className="mobile-nav">
				<Link to="/" className="logo">
					<img src="assets/img/cover-removebg-preview.png" alt="logo"/>
				</Link>
			</div>
		
			{/* Menu For Desktop Device */}
			<div className="main-nav">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<Link className="navbar-brand" to="/">
							<img src="assets/img/cover-removebg-preview.png" alt="logo"/>
						</Link>
						<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
							<ul className="navbar-nav m-auto">
								<li className="nav-item">
									<Link to="/" >Home</Link>
									
								</li>
								<li className="nav-item">
									<Link to="about" className="nav-link">ABOUT</Link>
								</li>
								<li className="nav-item">
									<Link to="find-job" >JOBS</Link>

									<ul className="dropdown-menu">
										<li className="nav-item">
											<Link to="find-job" className="nav-link">Find A Job</Link>
										</li>
										<li className="nav-item">
											<Link to="post-job" className="nav-link">Post A Job</Link>
										</li>
										
										<li className="nav-item">
											<Link to="job-grid" className="nav-link">Job Grid</Link>
										</li>
                                        
										<li className="nav-item">
											<Link to="catagories" className="nav-link">Catagories</Link>
										</li>
										
									</ul>
								</li>                
								
								<li className="nav-item">
									<Link to="company" >COMPANY</Link>
									
								</li>
								<li className="nav-item">
									<Link to="blog" >Blog</Link>
									
								</li>
								<li className="nav-item">
									<Link to="contact" className="nav-link">CONTACT US</Link>
								</li>
							</ul>

							<div className="other-option">
								<Link to="sign-up" className="signup-btn">Sign Up</Link>
								<Link to="sign-in" className="signin-btn">Sign In</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
        </>
  )
}
