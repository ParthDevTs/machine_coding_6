import { createContext, useContext, useEffect, useState } from "react";
import { cuisineData, restaurantsData } from "../data/resturantData";
import { useNavigate } from "react-router-dom";


const ResturantContext = createContext({
    cuisineData: cuisineData,
    restaurantsData: restaurantsData
})

export function ResturantProvider({ children }) {
    const [selectedCuisineID, setSelectedCuisineID] = useState();
    const [selectedCuisineResturants, setSelectedCuisineResturants] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const filterResturantsByCuisineId = () => {
            const filteredResturants = restaurantsData
                .filter((resturant => resturant.cuisine_id === selectedCuisineID))

            setSelectedCuisineResturants(filteredResturants)
        }
        filterResturantsByCuisineId()
    }, [selectedCuisineID])

    return (
        <ResturantContext.Provider
            value={{
                selectedCuisineResturants,
                cuisineData,
                restaurantsData,
                selectedCuisineID,
                setSelectedCuisineID,
                navigate
            }}>
            {children}
        </ResturantContext.Provider>
    )
}

export const useResturant = () => useContext(ResturantContext);