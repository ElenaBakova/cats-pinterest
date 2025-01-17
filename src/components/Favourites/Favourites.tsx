import Message from "../Message/Message.tsx";
import "./Favourites.css";
import "../../styles/Cats.css";
import { Link } from "react-router-dom";
import useStorage from "../../hooks/useStorage.ts";
import CatCard from "../CatCard/CatCard.tsx";

const Favourites = () => {
  const { favourites } = useStorage();
  const catUrl = "https://cdn2.thecatapi.com/images/";

  return (
    <>
      {favourites.length === 0 && (
        <div className={"no-favourites"}>
          <Message text={"У вас еще нет любимых котиков"} />
          <Link to={"/"} className={"home-link"}>
            Добавить
          </Link>
        </div>
      )}
      {favourites.length > 0 && (
        <div className={"cats"}>
          {favourites.map((favourite, index) => (
            <div key={index}>
              <CatCard url={catUrl + favourite + ".jpg"} id={favourite} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
