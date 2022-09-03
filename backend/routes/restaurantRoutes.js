import express from 'express';

const restaurantRouter = express.Router();

restaurantRouter.get('/get-restaurant/:portion', expressAsyncHandler(async (req, res) => { 
    console.log("Starting find")
    await User.find({relativePortionSize: req.params.portion})
    // await User.findOne({name:'McDonalds'})
                .then(result => {
                    console.log("Received restaurant info");
                    res.send(result)
                    })
                // .catch(err => {
                //         res.sendStatus(404).send("Link Not Found")
                //     })
    }));

export default restaurantRouter;
