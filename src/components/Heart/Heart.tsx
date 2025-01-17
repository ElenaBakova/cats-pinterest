import "./Heart.css"
import useStorage from "../../hooks/useStorage.ts";

interface HeartProps {
    id: string;
}

const Heart = ({id}: HeartProps) => {
    const {favourites, setFavourites} = useStorage();
    const clicked: boolean = favourites.includes(id);

    const handleClick = () => {
        setFavourites(id);
        console.log(id);
        console.log(localStorage);
    }

    return (
        <div className={`heart-wrapper-${clicked ? "clicked" : ""}`} id={id} onClick={handleClick}>
            <img src={"/heart-outlined.png"} alt={"heart-outlined"} className={"heart-outlined"}/>
            <img src={"/heart-filled.png"} alt={"heart-filled"} className={"heart-filled"}/>
        </div>
    );
}

export default Heart;