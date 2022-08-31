import React from 'react';
import './Service.css';
import paking from '../../assets/pack.jpg'
import truck from '../../assets/transport.jpg'
import store from '../../assets/storing.jpg'
import arc from '../../assets/warehouse.jpg'

const Services = () => {
    return (
        <div className='py-12'>
            <h1 className='text-5xl font-light py-12'>Our Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 py-12'>
                <div class="center">
                    <div class="property-card">
                        <div class="property-image">
                            <img src={arc} alt="" />
                        </div>
                        <div class="property-description">
                            <h5 className='text-4xl font-light p-2'> Warehousing </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="property-card">
                        <div class="property-image">
                            <img src={store} alt="" />
                        </div>
                        <div class="property-description">
                            <h5 className='text-4xl font-light p-2'> Storing </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="property-card">
                        <div class="property-image">
                            <img src={paking} alt="" />
                        </div>
                        <div class="property-description">
                            <h5 className='text-4xl font-light p-2'> Packaging </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="property-card">
                        <div class="property-image">
                            <img src={truck} alt="" />
                        </div>
                        <div class="property-description">
                            <h5 className='text-4xl font-light p-2'> Transporting </h5>
                            <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;