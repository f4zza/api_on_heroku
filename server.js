const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const PORT = 8000

app.use(cors())

const names = {
    'ali':{
        'age': 30,
        'birthname': 'Ali',
        'location': 'Mumbai'
        },
    'layla':{
        'age': 28,
        'birthname': 'Layla',
        'location': 'Mumbai'
        },
    'aline':{
        'age': 26,
        'birthname': 'Aline',
        'location': 'Mumbai'
        },
    '404':{
            'age': 404,
            'birthname': 'Not Found',
            'location': 'Not Here'
            }    
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/names/:name', (req,res)=>{
    const name = req.params.name.toLowerCase()
    console.log(name)
    if(names[name]){
        res.json(names[name])
    }else{
        res.json(names[404])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})