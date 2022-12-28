import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const login = () => {
function responseFacebook(response){
    console.log(response);
}
function googleResponse(response){
    console.log(response);
}
function googleFailure(response){
    console.log(response);
}

return (
	<>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Login</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">Login</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6 wow fadeIn px-2" data-wow-delay="0.1s">
                        <div className="bg-secondary p-5">
                            <p className="d-inline-block bg-dark text-primary py-1 px-4">Register</p>
                            <h1 className="text-uppercase mb-4">Register</h1>
                            <form action="" method="post" name="registerfrm" id="registerfrm">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" name="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                        <input type="email" className="form-control bg-transparent" name="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" name="phone" placeholder="Phone" />
                                            <label htmlFor="subject">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" password="password" placeholder="password" />
                                            <label htmlFor="password">password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-secondary p-5">
                            <p className="d-inline-block bg-dark text-primary py-1 px-4">Login</p>
                            <h1 className="text-uppercase mb-4">Login</h1>
                            <form action="" method="post" name="loginfrm" id="loginfrm">
                                <div className="row g-3">                                    
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-transparent" name="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" password="password" placeholder="password" />
                                            <label htmlFor="password">password</label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <p></p>
                            <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            cssClass="btn btn-primary w-100"
                            callback={responseFacebook} />
                            
                            <p></p>
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={googleResponse}
                                onFailure={googleFailure}
                                className="w-100"
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</>
)
}

export default login
