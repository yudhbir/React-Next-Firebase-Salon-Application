import React,{useContext} from "react";
import Backend from "../../../components/layout/backend";
import { AuthContext } from '../../../contexts/auth'

import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({tlds:{allow: false}}).required(),
    mobile: Joi.string().required(),
    experience: Joi.string().required(),
    skills: Joi.string().required(),
});

export default function add(){    
    const auth = useContext(AuthContext);
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: joiResolver(schema),
      });
    async function onSubmit(response){  
        console.log(response);        
        
    }
    return (
        <>
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">			    
                    <h1 className="app-page-title">Add Member</h1>
                    <hr className="mb-4" />
                    <div className="row g-4 settings-section">                        
                        <div className="col-12 col-md-12">
                        <div className="app-card app-card-settings shadow-sm p-4">
                            <div className="app-card-body">
                            <form className="settings-form" method="post" name="settings_form" id="settings_form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" {...register('name')} />
                                    <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.name?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" {...register('email')} />
                                    <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.email?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" {...register('mobile')}/>
                                    <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.mobile?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Experience</label>
                                    <input type="number" className="form-control"  min="1" max="20" {...register('experience')}/>
                                    <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.experience?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Skills</label>
                                    <textarea className="form-control"  {...register('skills')}></textarea>
                                    <p style={{marginTop:'2px',color:'#ff0000'}}>{errors.skills?.message}</p>
                                </div>
                                <button type="submit" className="btn app-btn-primary">Save Changes</button>
                            </form>
                            </div>{/*//app-card-body*/}
                        </div>{/*//app-card*/}
                        </div>
                    </div>{/*//row*/}
                </div>{/*//container*/}
            </div>{/*//app-content*/}
        </>
    )
}
add.getLayout = function getLayout(page) {
    return (
        <Backend>{page}</Backend>
    )
}