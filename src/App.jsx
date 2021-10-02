import { useState } from "react";
import { Favorite } from "./components/Favorite";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { FavoriteProvider } from "./Context/favorites";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [newState, setNewState] = useState('')

  return (
    <FavoriteProvider>
      <Header newAddress={(address) => setNewState(address)}/>
      <Map newAddress={newState}/>
      <Favorite />
      <Footer />
      <GlobalStyle/>
    </FavoriteProvider>  
  );
}

