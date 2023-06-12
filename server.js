const express = require('express')
const app = express()
const PORT = 1000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.render('login.ejs')
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})