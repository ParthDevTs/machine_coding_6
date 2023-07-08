import { createContext, useContext, useEffect, useState } from "react";
import { cuisineData, restaurantsData } from "../data/resturantData";


const ResturantContext = createContext({ cuisineData: cuisineData, restaurantsData: restaurantsData })

export function ResturantProvider({ children }) {
    const [selectedCuisineID, setSelectedCuisineID] = useState();
    const [selectedCuisineResturants, setSelectedCuisineResturants] = useState([])


    useEffect(() => {
        const filterResturantsByCuisineId = () => {
            const filteredResturants = restaurantsData.filter((resturant => resturant.cuisine_id === selectedCuisineID))
            setSelectedCuisineResturants(filteredResturants)
        }
        filterResturantsByCuisineId()
    }, [selectedCuisineID])

    return (
        <ResturantContext.Provider
            value={{ selectedCuisineResturants, cuisineData, restaurantsData, selectedCuisineID, setSelectedCuisineID }}>
            {children}
        </ResturantContext.Provider>
    )
}

export const useResturant = () => useContext(ResturantContext);