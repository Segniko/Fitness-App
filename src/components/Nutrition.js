
import React, { useState } from "react";

const Nutrition = () => {
    const [nutrition, setNutrition] = useState({ calories: "", protein: "", carbs: "", fats: "" });
    const [progress, setProgress] = useState([]);

    const handleNutritionChange = (e) => {
        const { name, value } = e.target;
        setNutrition({ ...nutrition, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProgress([...progress, nutrition]);
        setNutrition({ calories: "", protein: "", carbs: "", fats: "" });
    };

    return (
        <div className="position">
            <div className="flex flex-col items-center justify-center h-screen font-sans bg-gray-100">
                <h2 className="text-3xl font-bold mb-4 text-center">Nutrition Tracker</h2>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="number"
                        name="calories"
                        value={nutrition.calories}
                        onChange={handleNutritionChange}
                        placeholder="Calories"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="protein"
                        value={nutrition.protein}
                        onChange={handleNutritionChange}
                        placeholder="Protein (g)"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="carbs"
                        value={nutrition.carbs}
                        onChange={handleNutritionChange}
                        placeholder="Carbs (g)"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="fats"
                        value={nutrition.fats}
                        onChange={handleNutritionChange}
                        placeholder="Fats (g)"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add</button>
                </form>
                <h3 className="text-xl font-semibold mb-2">Progress</h3>
                <ul>
                    {progress.map((entry, index) => (
                        <li key={index} className="border-b py-2">
                            {`Calories: ${entry.calories}, Protein: ${entry.protein}g, Carbs: ${entry.carbs}g, Fats: ${entry.fats}g`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nutrition;
