require('dotenv').config()

const fetchFilm = async (film) => {
    let films = await fetch(`https://www.omdbapi.com/?t=${film}&apikey=${process.env.SAVE_API_KEY}`);
    return films;
}

module.exports = {
    fetchFilm
}