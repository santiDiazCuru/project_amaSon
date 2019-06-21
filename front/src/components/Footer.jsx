import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <footer className="footer text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3>Location</h3>
                        <p><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> 
                        Castillo 1332 Cap. Fed
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0 images">
                    <a href="https://www.facebook.com/" target="_blank  " className="images" > <img width="50px" src="./facebook.png" alt="" /></a>
                        <a href="https://www.instagram.com/" target="_blank  " className="images" ><img width="50px" src="./instragram.png" alt="" /></a>
                        <a href="https://www.linkedin.com/" target="_blank  " className="images" ><img  width="50px" src="./linkedin.png" alt="" /></a>
                        <a href="https://www.twitter.com/" target="_blank  " className="images" > <img width="50px" src="./twitter.png" alt="" /></a>
                       
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3>Contacto</h3>
                        <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> 
                         info@amason.com
                        </p>
                    </div>
                   
                </div>
               
                <p>© 2019 AmaSon Company, Inc. · <Link to="">Privacy </Link> · <Link to="#">Terms</Link></p>


               
            </div>
        </footer>
    );

};