import React from 'react'


function Review({ rating }) {


    return (
        <div className="flex flex-grow w-full gap-2 border-b border-black py-2">

            <div className="left w-[80%] flex flex-col gap-2">
                <div className="rating__header flex gap-4 items-center justify-start py-1">
                    <img src={rating.pp} className="h-8 w-8 rounded-full" alt={rating.revName} />
                    <p>{rating.revName}</p>
                </div>
                <p className="rating__comment">{rating.comment}</p>
            </div>
            <div className="spacer flex-grow"></div>
            <p className="rating flex items-center justify-center">
                <button className="flex bg-teal-100 text-teal-700 rounded-lg px-2 py-1">
                    {rating.rating}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </button>
            </p>
        </div>
    )
}

export default Review