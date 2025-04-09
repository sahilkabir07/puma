import React from 'react';

const ContactsCards = () => {
    return (
        <div className='flex flex-col items-center pt-32 pb-4'>
            <div className='flex-col items-center justify-center w-full bg-green-800 h-48 text-white hover:text-black'>
                <p className='text-6xl font-semibold text-center pt-4 '>How can we help you </p>
                <p className='text-6xl font-semibold text-center'>today?</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 w-full max-w-screen-lg'>
                <ul className='space-y-2 '>
                    <li className="font-bold hover:text-green-800">Quick Links</li>
                    <li className='hover:underline'>Initiate Order</li>
                    <li className='hover:underline'>Track my Order</li>
                    <li className='hover:underline'>Store Finder</li>
                </ul>

                <ul className='space-y-2'>
                    <li className="font-bold  hover:text-green-800">Return | Exchange | Warranty Card</li>
                    <li className='hover:underline'>Return of an Item</li>
                    <li className='hover:underline'>Cancellation by the Customer</li>
                    <li className='hover:underline'>Exchange of a Product</li>
                    <li className='hover:underline'>Warranty Claim</li>
                    <li className='hover:underline'>Cancellation by Puma Sports India Pvt Ltd</li>
                </ul>

                <ul className='space-y-2'>
                    <li className="font-bold  hover:text-green-800">Delivery</li>
                    <li className='hover:underline'>How do I check my order or delivery status?</li>
                    <li className='hover:underline'>How long does delivery take?</li>
                    <li className='hover:underline'>Why can't you ship my order?</li>
                    <li className='hover:underline'>What stages does my order go through?</li>
                    <li className='hover:underline'>How much will delivery cost?</li>
                </ul>

                <ul className='space-y-2 '>
                    <li className="font-bold  hover:text-green-800">Return And Cancellation</li>
                    <li className='hover:underline'>How can I cancel my order?</li>
                    <li className='hover:underline'>When will I get the refund?</li>
                    <li className='hover:underline'>Can I exchange my product(s)?</li>
                    <li className='hover:underline'>How do I return my in.puma.com products(s)?</li>
                    <li className='hover:underline'>How will I get my refund for the product I returned?</li>
                </ul>

                <ul className='space-y-2'>
                    <li className="font-bold  hover:text-green-800">Promotion And Vouchers</li>
                    <li className='hover:underline'>Will my voucher be refunded if I return/cancel the order?</li>
                    <li className='hover:underline'>How do I apply the PUMA voucher code?</li>
                    <li className='hover:underline'>What should I do if I'm not able to apply my coupon?</li>
                </ul>

                <ul className='space-y-2'>
                    <li className="font-bold  hover:text-green-800">Account</li>
                    <li className='hover:underline'>How do I reset my account password?</li>
                    <li className='hover:underline'>How can I create an account?</li>
                </ul>
            </div>
        </div>
    );
};

export default ContactsCards;
