import React from 'react';
import { ArchiveBoxXMarkIcon, ArrowUpIcon, PhotoIcon } from '@heroicons/react/24/solid';

const Manage = () => {
    return (
        <div>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                                <th>Show</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="w-10 rounded-xl">
                                            <PhotoIcon></PhotoIcon>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>
                                        <ArchiveBoxXMarkIcon className='w-8'></ArchiveBoxXMarkIcon>
                                    </button>
                                </td>
                                <td>
                                    <button>

                                        <ArrowUpIcon className='w-8'></ArrowUpIcon>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="w-10 rounded-xl">
                                            <PhotoIcon></PhotoIcon>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>
                                        <ArchiveBoxXMarkIcon className='w-8'></ArchiveBoxXMarkIcon>
                                    </button>
                                </td>
                                <td>
                                    <button>

                                        <ArrowUpIcon className='w-8'></ArrowUpIcon>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="avatar">
                                        <div class="w-10 rounded-xl">
                                            <PhotoIcon></PhotoIcon>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button>
                                        <ArchiveBoxXMarkIcon className='w-8'></ArchiveBoxXMarkIcon>
                                    </button>
                                </td>
                                <td>
                                    <button>

                                        <ArrowUpIcon className='w-8'></ArrowUpIcon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manage;