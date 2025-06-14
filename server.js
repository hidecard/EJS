const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'components')); // Custom views folder

app.get('/', (req, res) => {
    const item = ["apple" , "orange" , "Kiwi"]
    res.render('nav', { item : item})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})