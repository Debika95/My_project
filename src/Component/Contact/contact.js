import React from 'react'
import { Footer } from '../../Footer/footer'

export const Contact = () => {
    return (
        <div>
             <section className="py-4 bg-info">
               <div className="container">
                   <div className="row">
                   <div className="col-md-4 ml-auto">
                       <h4>Contact us</h4>
                       </div>
                       <div className="col-md-8 ml-auto">
                           <h6 className="foot-end">
                               Home/ About us

                           </h6>

                       </div>

                   </div>

               </div>
               </section> 
               <section className="section">
                   <div className="container">
                       <div className="card shadow">
                           <div className="card-body">
                               <div className="row">
                                   <div className="col-md-6">
                                       <h6>Contact form</h6>
                                       <hr/>
                                  <div className="form-group">
                                           <label className="mb-1">Full name</label>
                                           <input type="text" className="form-control" placeholder="Enter full name"/>
                                       </div>
                                       <div className="form-group">
                                           <label className="mb-1">Phone no</label>
                                           <input type="text" className="form-control" placeholder="Enter phone no"/>
                                       </div>
                                       <div className="form-group">
                                           <label className="mb-1">Email</label>
                                           <input type="text" className="form-control" placeholder="Enter your email"/>
                                       </div>
                                       <div className="form-group">
                                           <label className="mb-1">Message</label>
                                           <textarea rows="3" className="form-control" placeholder="Enter message here"/>
                                       </div>
                                       <div className="form-group">
                                           
                                           <button type="button" className="btn btn-primary shadow" placeholder="Enter full name">send messege</button>
                                       </div>

                                   </div>

                               </div>

                           </div>
                            
                       </div>

                       </div> 

               </section>
               <section>
                   <Footer></Footer>
               </section>
           
        </div>
    )
}
