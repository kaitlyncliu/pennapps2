import mongoose from 'mongoose';
import RestaurantScreen from '../../frontend/src/screens/RestaurantScreen';

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	relativePortionSize: { type: Number, required: true },
	image: { type: String, required: true },
});

const Restaurant = new mongoose.Model('Restaurant', restaurantSchema);
export default Restaurant;
