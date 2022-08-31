import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Add = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add New Item</h2>
                    <form onSubmit>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Product" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" class="input input-bordered" />
                        </div><div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder="Quantity" class="input input-bordered" />
                        </div><div class="form-control">
                            <label class="label">
                                <span class="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="URL" class="input input-bordered" />
                        </div><div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" class="input input-bordered" />
                        </div>


                        <input className='mt-5 btn btn-primary w-full max-w-xs text-white' type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Add;