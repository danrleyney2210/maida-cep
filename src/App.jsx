import { useState } from "react";
import { Favorite } from "./components/Favorite";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [newState, setNewState] = useState('')

  return (
    <div>
      <Header newAddress={(address) => setNewState(address)}/>
      <Map newAddress={newState}/>
      <Favorite />
      <Footer />
      <GlobalStyle/>
    </div>  
  );
}

