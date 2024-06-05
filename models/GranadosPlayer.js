const mongoose=require('mongoose')
const {Schema}=mongoose

const SchemaGranadosPlayer=new Schema({
    code: {
        type : Number,
        required : true,
        unique : true
    },
    name: {
        type: String,
        required : true
    },
    edad: {
        type: Number,
        required : true
    },
    posicion: {
        type: String,
        required : true
    },
    team:
        {
            type : Schema.Types.ObjectId,
            ref : 'teams'
        }
})
module.exports=mongoose.model('GranadosPlayer',SchemaGranadosPlayer)