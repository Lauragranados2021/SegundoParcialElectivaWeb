const routes=require('express').Router();
const{
    getTeams,findById  
   
}=require('../controllers/controller-teams');
routes.get('/',getTeams)
routes.get('/:id',findById)

module.exports=routes