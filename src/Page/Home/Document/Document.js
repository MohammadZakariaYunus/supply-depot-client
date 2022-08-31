import React from 'react';
import './Document.css'

const Document = () => {
    return (
        <div className='py-12 document'>
            <h1 className='text-5xl font-light'>Why Choose Us!</h1>
            <div class="row1-container py-12">
                <div class="box box-down cyan">
                    <h2 className='text-2xl'>Available</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                </div>

                <div class="box red">
                    <h2 className='text-2xl'>Flexibility</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                </div>

                <div class="box box-down cyan">
                    <h2 className='text-2xl'>Service</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                </div>
            </div>
            <div class="row2-container">
                <div class="box box-down cyan">
                    <h2 className='text-2xl'>Reliability</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                </div>

                <div class="box red">
                    <h2 className='text-2xl'>Security</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                </div>

                <div class="box box-down cyan">
                    <h2 className='text-2xl'>Technical Support</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                </div>
            </div>



        </div>
    );
};

export default Document;