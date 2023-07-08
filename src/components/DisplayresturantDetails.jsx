import React from 'react'

function DisplayresturantDetails({ resturantData }) {
    return (
        <div className="ResturantTab flex flex-col gap-4">
            <h1 className="font-bold text-xl">Dishes by {resturantData.name}</h1>
            <ul className="menu flex gap-4">
                {resturantData?.menu?.map((menuItem, index) => {
                    return <li className="flex flex-col rounded-md gap-1 shadow-md" key={index}>
                        <img className="h-[10rem] w-[12rem] rounded-t-md" src={menuItem.imgSrc} alt={menuItem.name} />
                        <footer className="menu__item__footer flex flex-col gap-1 px-2 pt-2 pb-4">
                            <p className="text-sm font-bold">{menuItem.name}</p>
                            <p className="text-xs text-slate-500">{`Rs. ${menuItem.price} for one`}</p>
                            <p className="text-xs text-slate-500">{resturantData.name}</p>
                        </footer>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default DisplayresturantDetails