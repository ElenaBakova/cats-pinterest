import {Navigate, Route, Routes} from "react-router-dom"

import Cats from "../Cats/Cats.tsx";
import Favourites from "../Favourites/Favourites.tsx";
import WildcardRoute from "../WildcardRoute/WildcardRoute.tsx";

const Main = () => {
    return (
        <div className={"main"}>
            <Routes>
                <Route path="" element={<Navigate to={"cats"}/>}/>
                <Route path="cats" element={<Cats/>}/>
                <Route path="favourites" element={<Favourites/>}/>
                <Route path="*" element={<WildcardRoute/>}/>
            </Routes>
        </div>
    );
};

export default Main;