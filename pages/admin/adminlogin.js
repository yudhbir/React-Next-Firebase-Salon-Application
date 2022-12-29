import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Router from 'next/router'
import {useAuth,registerUser} from '../../contexts/auth'
import { useContext,useEffect } from 'react';
import { AuthContext,validate_authentication } from '../../contexts/auth'

const schema = Joi.object({
    email: Joi.string().email({tlds:{allow: false}}).required(),
    password: Joi.string().required(),
});
const adminlogin = () => {
    const { login, loading } = useContext(AuthContext);
    useEffect(() => {
        validate_authentication();
    });
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: joiResolver(schema),
      });
    async function onSubmit(response){  
        let user= await login(response);        
        if(!!user.idToken){
            Router.push('/admin/dashboard/dashboard') ; 
        }
    }
return (
	<>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Admin Login</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Admin</a></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">Login</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0">                    
                    <div className="col-lg-12 wow fadeIn d-flex align-items-center justify-content-center" data-wow-delay="0.5s">
                        <div className="bg-secondary p-5">
                            <p className="d-inline-block bg-dark text-primary py-1 px-4">Admin Login</p>
                            <h1 className="text-uppercase mb-4">Login</h1>
                            <form method="post" name="loginfrm" id="loginfrm" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-3">                                    
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-transparent" placeholder="Your Email" {...register('email')}/>
                                            <label htmlFor="email">Your Email</label>
                                            <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.email?.message}</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-transparent" placeholder="password" {...register('password')}/>
                                            <label htmlFor="password">password</label>
                                            <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.password?.message}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</>
)
}

export default adminlogin
