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
        <div className="nutrition-container flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Nutrition Tracker</h2>
            <form onSubmit={handleSubmit} className="nutrition-form bg-white p-6 rounded shadow-lg w-full max-w-md">
                <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">Calories</label>
                    <input
                        type="number"
                        name="calories"
                        value={nutrition.calories}
                        onChange={handleNutritionChange}
                        placeholder="Enter Calories"
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="protein">Protein (g)</label>
                    <input
                        type="number"
                        name="protein"
                        value={nutrition.protein}
                        onChange={handleNutritionChange}
                        placeholder="Enter Protein"
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carbs">Carbs (g)</label>
                    <input
                        type="number"
                        name="carbs"
                        value={nutrition.carbs}
                        onChange={handleNutritionChange}
                        placeholder="Enter Carbs"
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fats">Fats (g)</label>
                    <input
                        type="number"
                        name="fats"
                        value={nutrition.fats}
                        onChange={handleNutritionChange}
                        placeholder="Enter Fats"
                        className="border border-gray-300 rounded p-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full font-bold hover:bg-blue-600 transition">
                    Add Nutrition
                </button>
            </form>

            <div className="progress-section w-full max-w-2xl mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Progress</h3>
                {progress.length === 0 ? (
                    <p className="text-gray-500">No nutrition data yet.</p>
                ) : (
                    <ul className="bg-white rounded-lg shadow-lg p-6">
                        {progress.map((entry, index) => (
                            <li key={index} className="mb-2 p-4 bg-gray-100 rounded">
                                <span className="font-bold text-gray-700">Calories:</span> {entry.calories},
                                <span className="font-bold text-gray-700"> Protein:</span> {entry.protein}g,
                                <span className="font-bold text-gray-700"> Carbs:</span> {entry.carbs}g,
                                <span className="font-bold text-gray-700"> Fats:</span> {entry.fats}g
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Nutrition;
