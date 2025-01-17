import {Navigate, Route, Routes} from "react-router-dom"

import Cats from "./Cats/Cats.tsx";
import Favourites from "./Favourites/Favourites.tsx";
import Message from "./Message/Message.tsx";

const Main = () => {
    return (
        <div className={"main"}>
            <Routes>
                <Route path="" element={<Navigate to={"cats"}/>}/>
                <Route path="cats" element={<Cats/>}/>
                <Route path="favourites" element={<Favourites/>}/>
                <Route path="*" element={<Message text={"Такой страницы нет :("} />}/>
            </Routes>
        </div>
    );
};

export default Main;