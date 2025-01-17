import {createContext} from "react";

export interface FavouritesType {
    favourites: string[];
    setFavourites: (newItem: string) => void;
}

const FavouritesContext = createContext<FavouritesType>({
    favourites: [],
    setFavourites: () => {}
});

export default FavouritesContext;