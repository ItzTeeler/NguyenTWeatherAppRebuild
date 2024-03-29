const saveToLocalStorage = (location: string) => {
    let favorites = getLocalStorage();

    if (!favorites.includes(location)) {
        favorites.push(location);
    }

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeLocalStorage = (location: string) => {
    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(location);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites))
}

export { saveToLocalStorage, getLocalStorage, removeLocalStorage };