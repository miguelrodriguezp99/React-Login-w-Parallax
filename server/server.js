const express = require('express')
const mongoose = require('mongoose')
const { Auth, isAuthenticated } = require('./controllers/authController')
const app = express();


//Transforma los json de las peticiones en un objeto de JavaScript y las asigna al body
app.use(express.json())


//CONNECT TO BD 
mongoose.connect('mongodb+srv://miguelrodriguezp99:3001@cluster0.pyomyip.mongodb.net/myapp?retryWrites=true&w=majority')


// ---- PATHS -----------------------------------------------------------------------------------------------------------

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

//Paths users
app.post("/login", Auth.login)
app.post('/register', Auth.register)


app.get('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.listen(5000, () => {console.log("Server started on port 5000")})

