import { createContext, useContext, useEffect, useState } from 'react'

const ContextFavorite = createContext()

export function FavoriteProvider({ children }) {
  const [ favoritos, setFavoritos ] = useState(() => {
    const getFavorites = localStorage.getItem('MAIDACEP:favorites')
    const favoritesStorage = JSON.parse(getFavorites)
    
    return favoritesStorage || []
  }) 

  function favorito(newAddress) {
    const getFavorites = localStorage.getItem('MAIDACEP:favorites')
    const favoritesStorage = JSON.parse(getFavorites)

    if(favoritesStorage !== null) {
      const findCepNewAddress = favoritesStorage.some(address => address.cep === newAddress.cep)

      if(findCepNewAddress) {
        return 
      }
    }

    setFavoritos([...favoritos, newAddress])
    localStorage.setItem('MAIDACEP:favorites', JSON.stringify([...favoritos, newAddress]))
  }

  return (
    <ContextFavorite.Provider value={{favoritos, favorito}}>
      {children}
    </ContextFavorite.Provider>
  )
}

export function useFavorite() {
  const context = useContext(ContextFavorite)

  return context
}