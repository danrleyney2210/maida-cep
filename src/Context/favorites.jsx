import { createContext, useContext, useEffect, useState } from 'react'

const ContextFavorite = createContext()

export function FavoriteProvider({ children }) {
  const [ favoritos, setFavoritos ] = useState(() => {
    const getFavorites = localStorage.getItem('MAIDACEP:favorites')
    const favoritesStorage = JSON.parse(getFavorites)
    
    return favoritesStorage || []
  }) 

  function verifyExistCepInLocalStorage(newAddress) {
    const getFavorites = localStorage.getItem('MAIDACEP:favorites')
    const favoritesStorage = JSON.parse(getFavorites)
    
    const newAddressFormated = {...newAddress, isFavorite: false}

    if(favoritesStorage !== null) {
        const values = [...favoritos]
        const findCepNewAddress = favoritesStorage.findIndex(address => address.cep === newAddress.cep)

        if(findCepNewAddress > -1 && !values[findCepNewAddress].isFavorite) {
          values[findCepNewAddress] = {
            ...values[findCepNewAddress],
            isFavorite: true
          }
          
          newAddressFormated.isFavorite = true
          setFavoritos(values)
        }

        setFavoritos(values)
        
        return {
          exist: findCepNewAddress > -1,
          newAddresFormated: newAddressFormated
        }
    }

    return {
      exist: false,
      newAddresFormated: newAddressFormated
    }
  }

  function favorito(newAddress) {
    const { exist } = verifyExistCepInLocalStorage(newAddress)

    if(exist) {
      return 
    }

    setFavoritos([...favoritos, newAddress])
    localStorage.setItem('MAIDACEP:favorites', JSON.stringify([...favoritos, newAddress]))
  }

  return (
    <ContextFavorite.Provider value={{favoritos, favorito, verifyExistCepInLocalStorage}}>
      {children}
    </ContextFavorite.Provider>
  )
}

export function useFavorite() {
  const context = useContext(ContextFavorite)

  return context
}