import React from 'react'



function Footer(props)
{
    return(
        
        <div className="footer">
            <div className="container">
                <div className="row align-items-center offset-md-1">             
                    <div className="col-12 col-sm-2">
                        <h5>Menu</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Purchasing Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                          House #8 (1st Floor), Road # 14,<br/>
                          Dhanmondi, Dhaka-1209.<br/>
                          <i className="fa fa-phone fa-lg"></i>: 09638111666<br/>
                          <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br/>
                          <i className="fa fa-envelope fa-lg"></i>: 
                          <a href="support@evaly.com.bd">support@evaly.com.bd</a>
                       </address>
                       <br/>
                    </div>
                    <div className="col-12 col-sm-3">
                        <h5>Get in Touch</h5>
                        <div className="align-self-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
               </div>
               <hr/>
               <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p> &copy; Copyright 2018 Fake Evaly</p>
                    </div>
               </div>
            </div>
        </div>

		);
}

export default Footer;