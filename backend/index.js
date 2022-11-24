const express = require('express')
const app = express()
const port = 4000;

app.get( '/', (req,res) => {
    console.log('welcome to homme')
    res.send('hello')

})

app.listen(port,  () => {
    console.log(`Example app listening on port ${port}`);
})