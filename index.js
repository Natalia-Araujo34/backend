const app = require('./bin/express')
const plants = require('../module/plants/plants-schema')
const mongoose = require('mongoose')
const port = 3000

app.get('/', (req, res) => {
    const pk = plants.create({
    
        namePlant: 'Girassol',
        typePlant: 'Planta Ornamental',
        familyPlant: 'Asteraceae', 
        countryPlant: 'Ucrânia',
        seasonPlant: 'Outono'
    })

    const all = plants.find()
    res.status(200).send(all)
});


app.listen(port, () => {
    console.log(`Api initialize success in port ${port}`)
})

