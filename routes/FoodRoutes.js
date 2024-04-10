const express = require('express');
const foodController = require('../controller/FoodController');

const router = express.Router();

router.post('/food/pushData', foodController.pushFoodData);
router.get('/food/fetchAllFood', foodController.fetchAllFoodData);
router.get('/food/fetchFoodById/:id', foodController.fetchFoodDataById);
router.delete('/food/deleteFoodById/:id', foodController.deleteFoodData);

module.exports = router;