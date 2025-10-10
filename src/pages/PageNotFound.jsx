import React from 'react';

import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <div className="stars">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="star" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}></div>
                ))}
            </div>

            <div className="not-found-content">
                <div className="error-code animate__animated animate__bounceIn">404</div>
                <h1 className="title animate__animated animate__fadeIn">Oops! Page Not Found</h1>
                <p className="message">
                    We couldn't find the page you're looking for.
                </p>
                <div className="astronaut animate__animated animate__fadeInUp">
                    <img
                        src="https://assets.codepen.io/1538474/astronaut.svg"
                        alt="astronaut"
                        className="animate__animated animate__pulse animate__infinite"
                    />
                </div>
                {/* <a href="/" className="home-button animate__animated animate__fadeInUp">
                    <span>Back to Home</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
                 */}


                <Link to="/" className="home-button animate__animated animate__fadeInUp">

                    {/* Go to Dashboard */}
                    <span>Back to Home</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;