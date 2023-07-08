import React from 'react'
import { useResturant } from '../context/ResturantContext'
import DisplayresturantDetails from '../components/DisplayresturantDetails';

function Home() {
    const { cuisineData, setSelectedCuisineID, selectedCuisineResturants } = useResturant();
    return (
        <div className="items-center mt-8 flex flex-col min-h-screen justify-start gap-4">
            <h1 className="text-2xl font-bold">Food Ordering App</h1>
            <div className="cuisineSelectio">
                <h2 className="text-xl font-semibold w-full text-center mt-4">Select your cuisine:</h2>
                <div className="cuisinesList flex gap-2 text-lg py-3 items-center justify-center">
                    {cuisineData.map((cuisine) => {
                        return <button
                            onClick={() => setSelectedCuisineID(cuisine.id)}
                            className="bg-red-300 text-red-800 rounded px-4 py-2 shadow-red-300 hover:bg-red-400 shadow-md"
                            key={cuisine.id}>{cuisine.name}</button>
                    })}
                </div>
                <ul className="resturantList flex flex-col gap-6">
                    {selectedCuisineResturants.length > 0 && selectedCuisineResturants?.map((resturant) => {
                        return <DisplayresturantDetails key={resturant.id} resturantData={resturant} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Home