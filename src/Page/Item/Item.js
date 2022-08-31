import React from 'react';

const Item = () => {
    return (
        <div>
            <div>
                <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                    <div class="bg-cover bg-img bg-bottom h-56 md:h-auto md:w-56">
                    </div>
                    <div>
                        <div class="p-4 md:p-5">
                            <p class="font-bold text-xl md:text-2xl">Name</p>
                            <p class="text-gray-700 md:text-lg">Description:</p>
                        </div>
                        <div class="p-4 md:p-5 bg-gray-100">
                            <div class="sm:flex sm:justify-between sm:items-center">
                                <div>
                                    <div class="text-lg text-gray-700"><span class="text-gray-900 font-bold">Price: 17*</span> per Lot</div>
                                </div>

                                <button class="mt-3 sm:mt-0 p-2 bg-primary hover:bg-yellow-500 font-bold text-white md:text-lg rounded-lg shadow-md">Book now</button>
                            </div>
                            <div class="mt-3 text-gray-600 text-sm md:text-base">*Prices may vary depending on quantity.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;