const routes=require('express').Router();
const{
    getBooks,saveBooks,updateBooks,deleteBooks,findById
   
}=require('../controllers/controller-jugador');
routes.get('/',getBooks)
routes.post('/:id',saveBooks)
routes.put('/:id',updateBooks)
routes.delete('/:id',deleteBooks)
routes.get('/:id',findById)



module.exports=routes
