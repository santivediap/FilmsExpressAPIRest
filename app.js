const express = require('express')
const filmsRoutes = require("./routes/filmroutes")
const {error404, error500} = require('./middlewares/errors');
const app = express();
const port = 3000

app.use(express.json())
app.use('/api/film', filmsRoutes);

app.use(error404);
app.use(error500);

app.listen(port, () => {
    console.log(`Servidor funcionando en https://localhost:${port}`)
})