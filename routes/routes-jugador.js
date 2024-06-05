const routes=require('express').Router();
const{
    getBooks,saveBooks,updateBooks,deleteBooks
   
}=require('../controllers/controller-jugador');
routes.get('/',getBooks)
routes.post('/:id',saveBooks)
routes.put('/:id',updateBooks)
routes.delete('/:id',deleteBooks)


module.exports=routes
