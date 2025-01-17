import { useContext } from "react";
import FavouritesContext from "../contexts/FavouritesContext/FavouritesContext.tsx";

const useStorage = () => {
  const { favourites, setFavourites } = useContext(FavouritesContext);
  return { favourites, setFavourites };
};

export default useStorage;
