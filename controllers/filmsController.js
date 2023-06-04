const filmsAPI = require("../utils/filmsAPI")

const getFilm = async (req, res) => {

    const film = await filmsAPI.fetchFilm(req.params.title)
    const filmData = film.json()

    filmData.then(response => {
        res.status(200).json({...response})
    })
}
  
const createFilm = async (req, res) => {
    res.status(200).json({message: `Se ha guardado: ${req.params.title}` });
}

const deleteFilm = async (req, res) => {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    res.status(202).json({id, "message": `Se ha actualizado ${req.params.title}`});
} 

const editFilm = async (req, res) => {
    res.status(200).json({message: `Se ha editado ${req.params.title}`});
}



module.exports = {
    createFilm,
    getFilm,
    deleteFilm,
    editFilm
}

//http://localhost:3000/products?API_KEY="12354djd"