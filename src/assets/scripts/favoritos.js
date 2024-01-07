export const toggleFavorite = (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const index = favorites.indexOf(id);

    if (index !== -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
};
