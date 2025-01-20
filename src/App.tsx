import "./styles/App.css";

import Navbar from "./components/Navbar/Navbar.tsx";
import Main from "./components/Main.tsx";

import { HashRouter } from "react-router-dom";
import FavouritesProvider from "./contexts/FavouritesContext/FavouritesProvider.tsx";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <FavouritesProvider>
        <Main />
      </FavouritesProvider>
    </HashRouter>
  );
};

export default App;
