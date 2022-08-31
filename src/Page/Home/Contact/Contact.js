import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='py-12'>
            <div class="contact-container">
                <div class="screen">
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <h1 className='text-3xl text-primary font-light'>
                                    CONTACT US
                                </h1>
                            </div>
                            <div class="app-contact">CONTACT INFO : +088 013 456 7890</div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="Supply Depot" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="btn btn-primary">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;