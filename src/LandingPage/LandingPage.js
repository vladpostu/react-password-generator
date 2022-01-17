import React from 'react';
import './LandingPage.css';

import searching_girl from '../imgs/searching_girl.jpg';

const LandingPage = () => {
    return (
        <div className='d-flex justify-content-beetween' id='landing_main'>
            <div>
                <h1>Secure <br/>Password <br/> Generator</h1>
                <p>Have you never needed a tool to invent passwords for you?</p>
                <button className='btn btn-ligth btn-nb'>Here you are</button>
            </div>
            <img src={searching_girl}/>
        </div>
    );
};

export default LandingPage;