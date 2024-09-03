import React, { useState } from 'react';

return (
    <div class="poster-and-details text-white flex">
        <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg"
            alt="" class="w-96 m-8"/>

        <div class="poster-side-title">
            <div class=" title mt-9 font-serif text-2xl text-violet-400 ml-5">
                THE TONIGHT SHOW FEATURING JIMMY FALCON
            </div>
            <div class="add-ratings flex items-center bg-slate-900 mt-5 justify-evenly h-20 rounded-xl w-5/6 ml-5">
                <div class="left">
                    <div class="text-xl text-violet-200">
                        Add Ratings and Reviews
                    </div>
                    <div class="text-16">
                        Your ratings matter
                    </div>
                </div>
                <div class="right">
                    <button class="text-lg bg-gray-500 p-2 rounded-3xl">
                        <a href="">
                            RATE NOW
                        </a>
                    </button>
                </div>
            </div>
            <div class="book-tickets flex items-center">
                <button class="bg-violet-400 py-3 px-10 text-xl rounded-2xl font-serif mt-10 ml-7">
                    <a href="">Book Tickets</a>
                </button>
            </div>
        </div>
        <div
            class="share bg-gray-900 flex h-10 items-center ml-24 text-3xl justify-around w-40 mt-16 border-white border-2 py-6 border-opacity-50 opacity-80 cursor-pointer">
            <i class="fa fa-share-alt"></i>
            <p>Share</p>
        </div>
    </div>
    <hr class="opacity-30">
    <div class="about-section">
        <div class="about-event-title text-white font-serif text-3xl ml-8 mt-8">
            About the Event
        </div>
        <div class="about-event-text text-white ml-8 mt-5 w-7/12">
            <div class="desc-1">
                Shastri Ji, a retired and jovial maths teacher, lives in his 30-year-old house, filled with cherished
                memories of his late wife, Sudha. His son Nilesh and daughter-in-law Madhu, are frustrated by Shastri
                Ji`s quirks and the lack of privacy, want to move to a new apartment with her husband.
            </div>
            <div class="desc-2 mt-4">
                On the other hand, Ayush lives a monotonous life with his only sunshine mein being his long time
                girlfriend, Parul who is soon gonna be his wife. Things take a turn when Shastri ji and Ayush while
                attending a local health check-up camp are diagnosed with cancer.
            </div>

        </div>
    </div>
    <hr class="opacity-30 mt-7 w-3/5 ml-4">

    <!-- <div class="cast-section">
        <div class="cast-title text-white font-serif text-3xl ml-8 mt-8">
            Cast
        </div>
    </div> -->
);
