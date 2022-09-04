import express from 'express';

const userRouter = express.Router();

userRouter.get('/profile', async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.send({
			_id: user._id,
			name: user.name,
			age: user.age,
			BMI: user.BMI,
			activityLevel: user.activityLevel,
		});
	} else {
		res.status(404).send({ message: 'User not found' });
	}
});

userRouter.put('/profile', async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		user.fullName = req.body.fullName || user.fullName;
		user.age = req.body.age || user.age;
		user.BMI = req.body.BMI || user.BMI;
		user.activityLevel = req.body.activityLevel || user.activityLevel;
		const updatedUser = await user.save();
		res.send({
			_id: updatedUser._id,
			name: updatedUser.name,
			age: updatedUser.age,
			BMI: updatedUser.BMI,
			activityLevel: updatedUser.activityLevel,
		});
	} else {
		res.status(404).send({ message: 'User not found' });
	}
});

export default userRouter;
