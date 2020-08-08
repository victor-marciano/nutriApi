import Food from "../models/foodModel";

class FoodController {
    async getAll(req, res) {
        try {
            const food = await Food.findAll();
            return res.json(food);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getOne(req, res) {
        try {
            const food = await Food.findByPk(req.params.id);
            return res.json(food);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new FoodController();
