import React, { useState } from 'react'
import { useResturant } from '../context/ResturantContext'

function AddReview({ setter, resturantId }) {

    const { addNewReviewHandler } = useResturant()

    const initialState = {
        rating: null,
        comment: "",
        revName: "Parth",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
    }

    const [newUserrating, setNewUserRating] = useState({
        rating: null,
        comment: "",
        revName: "Parth",
        pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
    })

    const handleChange = (event) => {
        setNewUserRating((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () => {
        addNewReviewHandler(newUserrating, resturantId)
        setNewUserRating(initialState)
        setter(false)
    }



    return (
        <div
            className="Add_review__modal flex items-center justify-center top-0 left-0 z-10 absolute h-full w-full backdrop-filter backdrop-blur-lg">
            <button className="close__button absolute top-[5rem] left-[8rem]">
                <svg onClick={() => setter(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>

            </button>
            <div className="addNewReview flex flex-col gap-6 bg-red-300 px-8 py-5 rounded shadow-red-400 shadow-lg ">
                <h1>Add Your Review</h1>
                <div className="review__form flex flex-col gap-4 items-start justify-center mt-10">
                    <div className="formGrp flex gap-2 items-center justify-center">
                        <label htmlFor="rating" className="text-white w-[5rem]">Rating</label>
                        <select value={newUserrating.rating} onChange={(event) => handleChange(event)} id="rating" name="rating">
                            <option value="">Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className="formGrp flex gap-2 items-center justify-center">
                        <label htmlFor="comment" className="text-white w-[5rem]">Comment</label>
                        <textarea value={newUserrating.comment} className="p-2" onChange={(event) => handleChange(event)} name="comment" id="comment" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div className="footer w-full flex items-center justify-center">
                    <button
                        disabled={newUserrating.rating === null || newUserrating.comment.length < 1}
                        onClick={handleSubmit}
                        className="bg-red-800 text-white px-2 py-1 shadow-lg transition-all duration-300 shadow-red-900 disabled:shadow-none disabled:text-slate-300 disabled:bg-slate-100">Submit Review</button>
                </div>
            </div>

        </div>
    )
}

export default AddReview