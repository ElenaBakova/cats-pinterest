import "./Heart.css";
import useStorage from "../../hooks/useStorage.ts";
import {useState} from "react";

interface HeartProps {
  id: string;
}

const Heart = ({ id }: HeartProps) => {
  const { favourites, setFavourites } = useStorage();
  const clicked: boolean = favourites.includes(id);
  const [animate, setAnimate] = useState<boolean>(clicked);

  return (
    <div
      className={`heart-wrapper${clicked ? " clicked" : ""}${animate ? " animate" : ""}`}
      onAnimationEnd={() => setAnimate(false)}
      id={id}
      onClick={() => {
        setFavourites(id);
        setAnimate(true);
      }}
    >
      <img
        src={"/heart-outlined.png"}
        alt={"heart-outlined"}
        className={"heart-outlined"}
      />
      <img
        src={"/heart-filled.png"}
        alt={"heart-filled"}
        className={"heart-filled"}
      />
    </div>
  );
};

export default Heart;
