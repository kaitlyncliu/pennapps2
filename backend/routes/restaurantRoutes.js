import express from 'express';
import Restaurant from '../models/restaurantModel.js'

const restaurantRouter = express.Router();

restaurantRouter.get('/:portion', (req, res) => { 
    console.log("Starting find")
    Restaurant.find({name:'Mcdonalds'})
        // relativePortionSize: req.params.portion})
                .then(result => {
                    console.log("Received restaurant info");
                    res.send(result)
                    })
                .catch(err => {
                        res.sendStatus(404).send("Link Not Found")
                    })
    });

export default restaurantRouter;
