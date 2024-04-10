const database = require('../database/DatabaseConnection');

class FoodService {
    // function to push food data to database
    async pushFoodData(foodData) {
        try {
            console.log(foodData);

            const query = 'INSERT INTO food (food_name, food_stars, food_rating, food_price) VALUES (?, ?, ?, ?)';
            const values = [
                foodData.foodName,
                foodData.foodStars,
                foodData.foodRating,
                foodData.foodPrice
            ];
            const connection = await database.getConnection();
            const [rows, fields] = await connection.execute(query, values);

            connection.release();

            console.log('Inserted data successfully:', rows.affectedRows);
            return rows.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }


    // function to get food data
    async fetchAllFoodData() {
        try {
            const query = 'SELECT * from food';
            const [rows, fields] = await database.execute(query);
            console.log('Fetched all food data:', rows);
            return rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // function to fetch food data by id
    async fetchFoodDataById(foodId) {
        try {
            const query = 'SELECT * FROM food WHERE food_id = ?';
            const [rows, fields] = await database.execute(query, [foodId]);
            console.log('Fetched food data by ID:', rows);
            return rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // function to delete food data
    async deleteFoodData(foodId) {
        try {
            const query = 'DELETE FROM food WHERE food_id = ?';
            const [rows, fields] = await database.execute(query, [foodId]);
            console.log('Deleted food data with ID:', foodId);
            return rows.affectedRows > 0;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = new FoodService();