import React, { Component } from "react";

import abt from '../images/pizza1.jpg'
import Footer from "./Footer";

const AboutScreen = (props) => {
              return (
          
                <div class="bg-light">
                  <div class="container">
                    <div class="row h-1 align-items-center">
                      <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                          <br />
                          <h2 class="font-weight-bold mt-5 mb-4"><i>ABOUT US</i></h2><hr/>
                          <p class="font-italic text-muted mb-4"> <h2>Our Mission:</h2><br/>
                          <p><b>To share our knowledge and experience to the business world. To provide nutrition, innovation and authentic Italian products. To inspire through taste and culture. To sustain the future of authentic Italian pizza.</b></p></p>

                          <p class="font-italic text-muted mb-4"> <h2>Our Vision:</h2><br/>
                          <b>our vision is all about why your restaurant concept matters, and how it can influence people and the larger community around it. One way to hone in on your vision statement is to think about it as the “what” portion of your restaurant's goals.</b></p>
                                 
                          <p class="font-italic text-muted mb-4"> <h2>Our Story:</h2><br/>                              
                          <b>We are a family owned and operated fresh and Italian restaurant. Mesmerized with the flavors and tantalizing aroma of Italian spices and the beauty in its wonderful and colorful appeal, made us fell in love with the idea or serving this amazing taste to our community. With, not only great pizzas, subs, pastas, salads, sandwiches and burgers, but also a new attitude toward be a part of our community, using sustainable products and creating an affordable Italian place using the best and fresh ingredients available. All of our pizzas are made to order with fresh hand tossed dough and topped with our special cheese blend.</b></p>
                           
                        </div>  
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={abt} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                      </div>
                    </div>
                  </div>
          
               
                  <Footer/>
                </div>
              )
            }
export default AboutScreen