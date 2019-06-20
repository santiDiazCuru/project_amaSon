import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <footer className="footer text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3>Location</h3>
                        <p>Castillo 1332
                        <br /> (Timbre Rojo)</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0 images">
                        <h3>Redes Sociales</h3>
                        <a href="https://www.facebook.com/" target="_blank  "> <img className="images" src="./facebook.png" alt="" /></a>
                        <a href="https://www.instagram.com/" target="_blank  "><img className="images" src="./instragram.png" alt="" /></a>
                        <a href="https://www.linkedin.com/" target="_blank  "><img className="images" src="./linkedin.png" alt="" /></a>
                        <a href="https://www.twitter.com/" target="_blank  "> <img className="images" src="./twitter.png" alt="" /></a>
                    </div>
                    <div className="col-lg-4">
                        <h3 className="mb-4">About AmaSon</h3>
                        <p className="lead mb-0">Skereeeee</p>
                    </div>
                </div>
                <br />
                <br />
                <p>© 2019 AmaSon Company, Inc. · <Link to="">Privacy </Link> · <Link to="#">Terms</Link></p>


                <div className="col-lg 3 home">
                    <a href="./">GO TO BACK</a>
                </div>
            </div>
        </footer>
    );

};