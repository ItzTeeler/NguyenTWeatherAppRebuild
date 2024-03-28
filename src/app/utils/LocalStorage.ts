const saveToLocalStorage = (digimon: any) => {
    let favorites = getLocalStorage();

    if(!favorites.includes(digimon)){
        favorites.push(digimon);
    }

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeLocalStorage = (digimon: any) => {
    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(digimon);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites))
}

export{saveToLocalStorage, getLocalStorage, removeLocalStorage};