import React from 'react'
import { Home } from '../Home/home'
import { Footer } from '../../Footer/footer'
export const AboutUs = () => {
    return (
        <>
           <section className="py-4 bg-info">
               <div className="container">
                   <div className="row">
                   <div className="col-md-4 ml-auto">
                       <h4> About us</h4>
                       </div>
                       <div className="col-md-8 ml-auto">
                           <h6 className="foot-end">
                               Home/ About us

                           </h6>

                       </div>

                   </div>

               </div>
               </section> 
               <section className="section bg-c-light border-bottom">
                   <div className="container">
                       <h5 className="main-heading">our company</h5>
                       <div className="underline">
                           <p>
                           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                           and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                           </p>
                       </div>

                   </div>

               </section>
               <section className="section bg-c-light border-top">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12 mb-4 text-center">
                               <h3 className="main-heading">vision mission and values</h3>
                               <div className="underline mx-auto"></div>
                               
                           </div>
                           <div className="col=md-4 text-center">
                           <h6>Our vision</h6>
                           <p>
                           Ipsum passages, and more recently with desktop publishing software 
                           like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
                           </div>
                           <div className="col=md-4 text-center">
                           <h6>Our mision</h6>
                           <p>
                           Ipsum passages, and more recently with desktop publishing software 
                           like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
                           </div>
                           <div className="col=md-4 text-center">
                           <h6>Our core values</h6>
                           <p>
                           Ipsum passages, and more recently with desktop publishing software 
                           like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
                           </div>
                          
                       </div>
                       
                       

                   </div>
               </section>
               <Footer></Footer>
        </>
    )
}
