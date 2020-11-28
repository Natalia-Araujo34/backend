const mongoose = require('mongoose')


const plantsSchema = mongoose.Schema({
    namePlant: {
        type: String, 
        require: true
    },
    typePlant: {
        type: String, 
        require: true
    },
    familyPlant: {
        type: String, 
        require: true
    }, 
    countryPlant: {
        type: String, 
        require: true
    },
    seasonPlant: {
        type: String, 
        require: true
    }
}, {
    timestamps: true, 
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

module.exports = mongoose.model('plants', plantsSchema)