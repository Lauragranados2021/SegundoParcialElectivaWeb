const authors=require('../models/teams');
module.exports={
    getTeams:async(req,res)=>{
        try{
            const result = await authors.find({})
            return res.status(200).json({data:result})

        }catch(err){
            return res.status(500).json({err:err})

        }
    }, findById : async( req,res )=>{
        try{
          const {id} = req.params
          const result = await authors.findById(id)
    
          return res.status(200).json({data:result})
        }catch(err){
            console.log(err)
          return res.status(500).json({error:err})
        }
      },
   
    }