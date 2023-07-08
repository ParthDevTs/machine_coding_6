import { createContext, useContext, useEffect, useState } from "react";
import { cuisineData, restaurantsData as restData } from "../data/resturantData";
import { useNavigate } from "react-router-dom";


const ResturantContext = createContext({
    cuisineData: cuisineData
})

export function ResturantProvider({ children }) {
    const [restaurantsData, setRestaurantsData] = useState(restData)
    const [selectedCuisineID, setSelectedCuisineID] = useState();
    const [selectedCuisineResturants, setSelectedCuisineResturants] = useState([])
    const navigate = useNavigate()

    const addNewReviewHandler = (rating, resturantId) => {
        const newRestArray = restaurantsData.map((resturant) => {
            if (resturant.id === parseInt(resturantId)) {
                return { ...resturant, ratings: [...resturant.ratings, rating] }
            } else {
                return resturant
            }
        })
        setRestaurantsData(newRestArray)

    }


    useEffect(() => {
        const filterResturantsByCuisineId = () => {
            const filteredResturants = restaurantsData
                .filter((resturant => resturant.cuisine_id === selectedCuisineID))

            setSelectedCuisineResturants(filteredResturants)
        }
        filterResturantsByCuisineId()
        // eslint-disable-next-line
    }, [selectedCuisineID])

    return (
        <ResturantContext.Provider
            value={{
                selectedCuisineResturants,
                cuisineData,
                restaurantsData,
                selectedCuisineID,
                setSelectedCuisineID,
                navigate,
                addNewReviewHandler
            }}>
            {children}
        </ResturantContext.Provider>
    )
}

export const useResturant = () => useContext(ResturantContext);