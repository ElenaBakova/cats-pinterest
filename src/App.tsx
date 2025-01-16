import './styles/App.css'

import Navbar from "./components/Navbar/Navbar.tsx";
import Main from "./components/Main/Main.tsx";

import {BrowserRouter} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Main/>
        </BrowserRouter>
    )
}

export default App