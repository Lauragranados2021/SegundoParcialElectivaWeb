const books=require('../models/GranadosPlayer')
const authors=require('../models/teams')

module.exports={
    getBooks:async(req,res)=>{
        try{
            const result=await books.find({})
            return res.status(200).json({data:result})


        }catch(err){
            return res.status(500).json({data:result})

        }
    },
    
    saveBooks:async(req,res)=>{
        try{
            const {id}=req.params
            const result=new books(req.body)
            const author=await authors.findById(id)
            const consulta=await books.findOne({code:result.code})
            if(author){
                result.team=id  
                const book=await result.save()
               
                return res.status(200).json({state:true,data:book})
                 
            } else{
                return res.status(404).json({message:"team no Existe"})

            }

        }catch(err){
            console.log(err)
            return res.status(500).json({state:false,err:err})

        }
    },updateBooks: async (req, res) => {
        try {
            const { id } = req.params;
            const { code, name,edad,posicion,team } = req.body;
            const book = await books.findById(id);
            if (book) {
                // Encuentra el autor antiguo 
                const oldAuthor = await authors.findById(book.team);
                if (oldAuthor) {
                    console.log("entro aqui")
                // Encuentra el nuevo autor 
                const newAuthor = await authors.findById(team);
                if (newAuthor) {
                    console.log("entro aqui x2")
                    // Actualiza el libro
                book.code = code;
                book.name = name;
                book.edad = edad;
                book.posicion = posicion;   
                book.team= team;

                const updatedBook = await book.save();
                return res.status(200).json({ state: true, data: updatedBook });
                }
                
                }
                else{
                    return res.status(404).json({ message: "team no existe" });
                }
    
                
            } else {
                return res.status(404).json({ message: "jugador no existe" });
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({ state: false, err: err });
        }
    },deleteBooks:async(req,res)=>{
        try{
            const {id}=req.params
            const book=await books.findById(id);
            if(book){
               
                const result=await books.findByIdAndDelete(id)
                return res.status(200).json({state:true,data:result})
            }
            else{
                
                return res.status(404).json({ message: "jugador no existe" });
            }    

        }catch(err){
            console.log(err)
            return res.status(500).json({state:false,err:err})

        }
    },findById : async( req,res )=>{
        try{
          const {id} = req.params
          const result = await books.findById(id)
    
          return res.status(200).json({data:result})
        }catch(err){
            console.log(err)
          return res.status(500).json({error:err})
        }
      },
}