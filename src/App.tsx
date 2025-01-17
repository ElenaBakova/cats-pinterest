import './styles/App.css'

import Navbar from "./components/Navbar/Navbar.tsx";
import Main from "./components/Main.tsx";

import {BrowserRouter} from 'react-router-dom'
import FavouritesProvider from "./contexts/FavouritesContext/FavouritesProvider.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <FavouritesProvider>
                <Main/>
            </FavouritesProvider>
        </BrowserRouter>
    )
}

export default App