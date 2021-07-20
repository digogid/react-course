import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  
  // Necessário passar uma função para dentro do setUserFavorites pq, assim, 
  // não corro o risco de atualizar o valor do state antes de ele terminar de processar alguma outra chamada
  function addFavorite(favoriteMeetup) {
    setUserFavorites((prev) => { return prev.concat(favoriteMeetup); });
  }

  function removeFavorite(meetupId) {
    setUserFavorites((prev) => { return prev.filter(meetup => meetup.id !== meetupId); });
  }

  function isFavorite(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite,
    removeFavorite,
    isFavorite
  };
  
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
