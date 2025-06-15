const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'components')); // Custom views folder

app.get('/', (req, res) => {
   const product =[
    {name : 'Iphone 14', price : 1000},
    {name : 'Iphone 15', price : 1200},
    {name : 'Iphone 16', price : 1400},
   ]
   res.render('index', {products : product});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})