import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useResturant } from '../context/ResturantContext'
import Review from '../components/Review';
import AddReview from '../components/AddReview';

function ResturantDetailPage() {
    const { restId } = useParams()
    const { restaurantsData, navigate } = useResturant();

    const resturant = restaurantsData.find((resturant) => resturant.id === parseInt(restId))
    const totalRatings = resturant.ratings.reduce((total, curr) => total + parseInt(curr.rating), 0)
    const avgRatings = Math.ceil(totalRatings / resturant.ratings.length)
    const [showAddReview, setShowAddReview] = useState(false)
    return (
        <div className="Resturant__detail__page z-0 px-[10rem] py-[5rem] relative">
            {showAddReview && <AddReview setter={setShowAddReview} resturantId={restId} />}
            <button
                className="absolute top-[3rem] left-[6rem] transition text-slate-500 hover:text-black"
                onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
            </button>
            {resturant && <div className="resturant">
                <header className="resturantDetailHeader flex items-center">
                    <div className="left__section">
                        <h1 className="text-4xl font-bold">{resturant.name}</h1>
                        <p className="text-sm text-slate-600 text-left">
                            {resturant.menu.map((item, index) => <span key={index}> {item.name} </span>)}
                        </p>
                        <p className="text-sm text-slate-600 text-left">{resturant.address}</p>
                        <p className="text-sm text-slate-600 text-left">Average Ratings: {avgRatings}</p>
                    </div>
                    <div className="spacer flex-grow"></div>
                    <button
                        onClick={() => setShowAddReview(true)}
                        className="bg-red-200 text-red-500 drop-shadow-md shadow-red-500 shadow text-sm  h-8 w-[5rem]">
                        Add Review</button>
                </header>
                <div className="spacer w-full bg-black h-[1px] mt-4"></div>
                <h2 className="text-xl font-bold mt-4">Reviews</h2>
                <div className="reviews mt-1 flex flex-col gap-4">
                    {resturant.ratings.map((rating, index) => {
                        return <Review key={index} rating={rating} />
                    })}
                </div>
            </div>}
        </div>
    )
}

export default ResturantDetailPage