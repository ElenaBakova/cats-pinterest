import {FC, ReactNode, useState} from "react";
import FavouritesContext from "./FavouritesContext.tsx";

const FavouritesProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [heartedList, setHeartedList] = useState<string[]>(() => {
        const storageItems = localStorage.getItem('favourites');
        return storageItems ? JSON.parse(storageItems) : [];
    });

    const toggleHeart = (id: string) => {
        const newFavouritesList = heartedList.includes(id)
            ? heartedList.filter((item) => item !== id)
            : [...heartedList, id];
        setHeartedList(newFavouritesList);
        localStorage.setItem('favourites', JSON.stringify(newFavouritesList));
    };

    return (
        <FavouritesContext.Provider value={{favourites: heartedList, setFavourites: toggleHeart}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export default FavouritesProvider;