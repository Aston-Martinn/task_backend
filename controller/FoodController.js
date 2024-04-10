const foodService = require('../service/FoodService');

class FoodController {
    // Api to push food data
    async pushFoodData(req, res) {
        const { foodData } = req.body;
        console.log(foodData);

        try {
            const pushData = await foodService.pushFoodData(foodData);
            if (pushData) {
                res.status(200).json({ message: 'Data inserted successfully' });
            } else {
                res.status(500).json({ error: 'Failed to insert data' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to insert data' });
        }
    }

    // API to fetch all food data
    async fetchAllFoodData(req, res) {
        try {
            const fetchedFoodData = await foodService.fetchAllFoodData();
            console.log("Food data ", fetchedFoodData);

            if (fetchedFoodData !== null) {
                res.status(200).json({ message: 'Food data fetched successfully', data: fetchedFoodData});
            } else {
                res.status(500).json({ error: 'Failed to fetch food data' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch food data' });
        }
    }

    // API to fetch food data by id
    async fetchFoodDataById(req, res) {
        try {
            const { id } = req.params;

            const fetchedFoodData = await foodService.fetchFoodDataById(id);
            console.log("Food data ", fetchedFoodData);

            if (fetchedFoodData !== null) {
                res.status(200).json({ message: 'Food data fetched successfully', data: fetchedFoodData});
            } else {
                res.status(500).json({ error: 'Failed to fetch food data' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch food data' });
        }
    }

    // API to delete food data by id
    async deleteFoodData(req, res) {
        const { id } = req.params;
    
        try {
            const result = await foodService.deleteFoodData(id);
            if (result) {
                res.status(200).json({ message: 'Food data deleted successfully' });
            } else {
                res.status(404).json({ error: 'Food data not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to delete food data' });
        }
    }
}

module.exports = new FoodController();