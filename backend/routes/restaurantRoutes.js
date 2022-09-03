import express from 'express';

const restaurantRouter = express.Router();

restaurantRouter.get('/get-restaurant/*', (req,res) => { 
    const dbConnect = dbo.getDb();
    var restaurantInfo = dbConnect.findOne({name: req}); 
    if (restaurantInfo) {
        print(restaurantInfo.tojson);
    }
});

export default restaurantRouter;
