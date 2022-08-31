import React from 'react';
import './Review.css'
import User1 from '../../assets/user1.jpg';
import User2 from '../../assets/user2.jpg';
import User3 from '../../assets/user3.jpg';
import User4 from '../../assets/user4.jpg';

const Review = () => {
    return (
        <div className=' px-12 py-12'>
            <h1 className='text-5xl font-light'>Testimony</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 py-12'>
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={User1} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Jhon Doe</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates autem est nihil nam earum harum minima, exercitationem aperiam dolorem quidem eum!
                        </div>
                    </div>
                </div>
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={User2} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Peter Parker</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates autem est nihil nam earum harum minima, exercitationem aperiam dolorem quidem eum!
                        </div>
                    </div>
                </div>
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={User3} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>James</h3>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates autem est nihil nam earum harum minima, exercitationem aperiam dolorem quidem eum!
                        </div>
                    </div>
                </div>
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={User4} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>William</h3>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates autem est nihil nam earum harum minima, exercitationem aperiam dolorem quidem eum!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;