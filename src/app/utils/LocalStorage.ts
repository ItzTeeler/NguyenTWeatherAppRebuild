const saveToLocalStorage = (name:string | undefined, lat: string | number, lon:string | number) => {
    let favorites = getLocalStorage();

    if (!favorites.some((fav: {name:string,  lat: string | number, lon: string | number }) => fav.lat === lat && fav.lon === lon && fav.name === name)) {
        favorites.push({name: name, lat: lat, lon: lon });
        localStorage.setItem("Favorites", JSON.stringify(favorites));
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

const removeLocalStorage = (favorite: any) => {
    let favorites = getLocalStorage();

    favorites = favorites.filter((fav: { name:string, lat: string | number; lon: string | number }) => {
        return fav.lat !== favorite.lat || fav.lon !== favorite.lon || fav.name !== favorite.name;
    });

    localStorage.setItem("Favorites", JSON.stringify(favorites));
};




export{saveToLocalStorage, getLocalStorage, removeLocalStorage};