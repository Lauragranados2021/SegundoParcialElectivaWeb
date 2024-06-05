const mongoose=require('mongoose')
const {Schema}=mongoose


const schemaTeams=new Schema({
    name: {
        type :String,
        required : true,
        unique : true
    },
    year: {
        type: Number,
        required : true
    },
    titles: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
    
})
module.exports=mongoose.model('teams',schemaTeams)