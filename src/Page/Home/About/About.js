import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div class="hero">
                <div class="about-section flex-col lg:flex-row-reverse">
                    <div class="">
                        <div className='row'>
                            <div className='column'>
                                <div className='imageOne'></div>
                            </div>
                            <div className='column'>
                                <div className='imageTwo'></div>
                            </div>
                            <div className='z-index'>
                                <div className='imageThree'></div>
                            </div>
                        </div>

                    </div>
                    <div class="text-center w-2/5 lg:text-left">
                        <h1 class="text-5xl font-light">About Us!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className='about-footer bg-primary'></div>
        </div>
    );
};

export default About;