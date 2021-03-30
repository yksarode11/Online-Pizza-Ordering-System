import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
     
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
             POLICY
          </section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
            <br/>
            Security
            <br/>
            Privacy
          </section>        
        </section>
        <section className="footer-info-center">
          <Link to="/about">
          <section className="footer-info__email signup-color">
          ABOUT US
          </section>
          </Link>
          <section className="footer-info__terms">
          Shop 1 & 8, Upper Ground Floor, G Block, Yashodeep Residency, R.T.O. Road, Shahu Nagar, Pimpri Industrial Area, Village Akurdi, Chinchwad, Pune, Maharashtra

            <br />
            <br />
            <br />
            ©2021 Online pizza Delivery Services Pvt Ltd, All rights reserved
            <br/>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
           Follows Us On 
          </section>
          <section className="footer-info__contact">
           Facebook
            <br/>
            Instagram
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;