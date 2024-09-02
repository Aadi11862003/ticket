import React from 'react';

const SubscriptionPricing = () => {
    return (

        <>

        
<div className="flex items-center justify-center h-screen bg-black">
    <div className="flex flex-col items-center w-full p-6">
        <div className="text-center mb-[133px]">
            <p className="text-5xl text-white font-bold">Subscription</p>
        </div>

        <div className="flex flex-wrap justify-center mb-[44px] gap-6">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free Trial Subscription</h2>
                <p className="text-xl font-bold text-gray-900 mb-4">$0.00</p>
                <ul className="list-disc list-inside mb-6 text-gray-700">
                    <li>Access to all premium content</li>
                    <li>Exclusive member-only features</li>
                    <li>24/7 customer support</li>
                    <li>Only valid for 1 event</li>
                    <li>No Discount</li>
                    <li>no Preference</li>
                    

                </ul>
                <div className='flex justify-center'>
                    <button className="bg-[#9e7df1] border border-black text-white px-4 py-2 rounded-lg hover:bg-[#a488ed] ">
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">One Month Subscription</h2>
                <p className="text-xl font-bold text-gray-900 mb-4">$4.99</p>
                <ul className="list-disc list-inside mb-6 text-gray-700">
                    <li>Access to all premium content</li>
                    <li>Exclusive member-only features</li>
                    <li>24/7 customer support</li>
                    <li>Unlimited Booking </li>
                    <li>At every booking 15% off </li>
                    <li>Preference </li>
                </ul>
                <div className='flex justify-center'>
                    <button className="bg-[#9e7df1] border border-black  text-white px-4 py-2 rounded-lg hover:bg-[#a488ed] ">
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="bg-gray-200  p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">One Year Subscription</h2>
                <p className="text-xl font-bold text-gray-900 mb-4">$49.99</p>
                <ul className="list-disc list-inside mb-6 text-gray-700">
                    <li>Access to all premium content</li>
                    <li>Exclusive member-only features</li>
                    <li>24/7 customer support</li>
                    <li>Unlimited Booking</li>
                    <li>At every booking 15% off </li>
                    <li>Preference </li>
                </ul>
                <div className='flex justify-center'>
                    <button className="bg-[#9e7df1] border border-black text-white px-4 py-2 rounded-lg hover:bg-[#a488ed] ">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    );
};

export default SubscriptionPricing;
