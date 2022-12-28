const about = () => {
return (
	<>
		<div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
			<div className="container text-center py-5">
				<h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">About</h1>
				<nav aria-label="breadcrumb animated slideInDown">
					<ol className="breadcrumb justify-content-center text-uppercase mb-0">
						<li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
						<li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
						<li className="breadcrumb-item text-primary active" aria-current="page">About</li>
					</ol>
				</nav>
			</div>
		</div>
		<div className="container-xxl py-5">
			<div className="container">
				<div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
					<p className="d-inline-block bg-secondary text-primary py-1 px-4">Our Barber</p>
					<h1 className="text-uppercase">Meet Our Barber</h1>
				</div>
				<div className="row g-4">
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
						<div className="team-item">
							<div className="team-img position-relative overflow-hidden">
								<img className="img-fluid" src="/img/team-1.jpg" alt=""/>
								<div className="team-social">
									<a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
								</div>
							</div>
							<div className="bg-secondary text-center p-4">
								<h5 className="text-uppercase">Barber Name</h5>
								<span className="text-primary">Designation</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
						<div className="team-item">
							<div className="team-img position-relative overflow-hidden">
								<img className="img-fluid" src="/img/team-2.jpg" alt=""/>
								<div className="team-social">
									<a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
								</div>
							</div>
							<div className="bg-secondary text-center p-4">
								<h5 className="text-uppercase">Barber Name</h5>
								<span className="text-primary">Designation</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
						<div className="team-item">
							<div className="team-img position-relative overflow-hidden">
								<img className="img-fluid" src="/img/team-3.jpg" alt=""/>
								<div className="team-social">
									<a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
								</div>
							</div>
							<div className="bg-secondary text-center p-4">
								<h5 className="text-uppercase">Barber Name</h5>
								<span className="text-primary">Designation</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
						<div className="team-item">
							<div className="team-img position-relative overflow-hidden">
								<img className="img-fluid" src="/img/team-4.jpg" alt=""/>
								<div className="team-social">
									<a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
									<a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
								</div>
							</div>
							<div className="bg-secondary text-center p-4">
								<h5 className="text-uppercase">Barber Name</h5>
								<span className="text-primary">Designation</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="h-100">
                        <img className="img-fluid h-100" src="/img/open.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                        <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Working Hours</p>
                        <h1 className="text-uppercase mb-4">Professional Barbers Are Waiting For You</h1>
                        <div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <h6 className="text-uppercase mb-0">Monday</h6>
                                <span className="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <h6 className="text-uppercase mb-0">Tuesday</h6>
                                <span className="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <h6 className="text-uppercase mb-0">Wednesday</h6>
                                <span className="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <h6 className="text-uppercase mb-0">Thursday</h6>
                                <span className="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2">
                                <h6 className="text-uppercase mb-0">Friday</h6>
                                <span className="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <h6 className="text-uppercase mb-0">Sat / Sun</h6>
                                <span className="text-uppercase text-primary">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	</>
)
}

export default about
