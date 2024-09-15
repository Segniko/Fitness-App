import React, { useState } from "react";
import { FaFire, FaDrumstickBite, FaBreadSlice, FaPizzaSlice } from 'react-icons/fa';

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

    // Calculate total stats dynamically
    const totalCalories = progress.reduce((acc, curr) => acc + parseInt(curr.calories), 0);
    const totalProtein = progress.reduce((acc, curr) => acc + parseInt(curr.protein), 0);
    const totalCarbs = progress.reduce((acc, curr) => acc + parseInt(curr.carbs), 0);
    const totalFats = progress.reduce((acc, curr) => acc + parseInt(curr.fats), 0);

    return (
        <div className="nutrition-container">
            <h2 className="text-4xl font-bold mb-6 text-center">Nutrition Tracker</h2>

            {/* Dashboard Stats */}
            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="icon"><FaFire /></div>
                    <h3>Total Calories</h3>
                    <p>{totalCalories} kcal</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaDrumstickBite /></div>
                    <h3>Total Protein</h3>
                    <p>{totalProtein} g</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaBreadSlice /></div>
                    <h3>Total Carbs</h3>
                    <p>{totalCarbs} g</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaPizzaSlice /></div>
                    <h3>Total Fats</h3>
                    <p>{totalFats} g</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="nutrition-form">
                <div className="form-group mb-4">
                    <input
                        type="number"
                        name="calories"
                        value={nutrition.calories}
                        onChange={handleNutritionChange}
                        placeholder="Calories"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        type="number"
                        name="protein"
                        value={nutrition.protein}
                        onChange={handleNutritionChange}
                        placeholder="Protein (g)"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        type="number"
                        name="carbs"
                        value={nutrition.carbs}
                        onChange={handleNutritionChange}
                        placeholder="Carbs (g)"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <input
                        type="number"
                        name="fats"
                        value={nutrition.fats}
                        onChange={handleNutritionChange}
                        placeholder="Fats (g)"
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full font-bold">Add Nutrition</button>
            </form>

            <div className="progress-section">
                <h3 className="text-2xl font-semibold mb-4">Progress</h3>
                {progress.length === 0 ? (
                    <p>No nutrition data yet.</p>
                ) : (
                    <ul>
                        {progress.map((entry, index) => (
                            <li key={index} className="mb-4">
                                <span>Calories: {entry.calories}</span>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${(entry.calories / 2500) * 100}%` }}></div>
                                </div>
                                <span>Protein: {entry.protein}g</span>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${(entry.protein / 150) * 100}%` }}></div>
                                </div>
                                <span>Carbs: {entry.carbs}g</span>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${(entry.carbs / 300) * 100}%` }}></div>
                                </div>
                                <span>Fats: {entry.fats}g</span>
                                <div className="progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${(entry.fats / 70) * 100}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Nutrition;
