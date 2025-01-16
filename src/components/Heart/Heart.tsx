import "./Heart.css"
import React from "react";

interface HeartProps {
    index: string;
}

const Heart = ({index}: HeartProps) => {
    const [clicked, setClicked] = React.useState(false);

    return (
        <div className={`heart-wrapper-${clicked ? "clicked" : ""}`} id={index} onClick={(e) => {
            setClicked(true);
            console.log(e.currentTarget.id);
        }}>
            <img src={"/heart-outlined.png"} alt={"heart-outlined"} className={"heart-outlined"}/>
            <img src={"/heart-filled.png"} alt={"heart-filled"} className={"heart-filled"}/>
        </div>
    );
}

export default Heart;