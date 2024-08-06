const mongoose=require('mongoose')
//const URL="mongodb+srv://jairouptc:nyxmeR-zusjoz-8zubda@cluster0.9lfyrk5.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery')
mongoose.connect(URL)
    .then(()=>console.log('Connect Succes'))
.catch(err=>console.log(err))
module.exports=mongoose
