import React, { useState } from 'react';

const Workouts = () => {
    //Data
    const [workoutTypes] = useState([
        { id: 1, type: 'Strength Training', exercises: ['Squats', 'Deadlifts', 'Bench Press'] },
        { id: 2, type: 'Cardio', exercises: ['Running', 'Cycling', 'Jump Rope'] },
        { id: 3, type: 'Flexibility', exercises: ['Yoga', 'Pilates', 'Stretching'] },
        { id: 4, type: 'High-Intensity Interval Training', exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats'] },
        { id: 5, type: 'Endurance', exercises: ['Long-distance running', 'Swimming', 'Rowing'] },
        { id: 6, type: 'Balance Training', exercises: ['Single-leg stand', 'Balance board exercises', 'Tai Chi'] },
        { id: 7, type: 'Mobility Training', exercises: ['Dynamic stretches', 'Foam rolling', 'Joint rotations'] },
        { id: 8, type: 'Core Training', exercises: ['Planks', 'Russian twists', 'Bicycle crunches'] },
        { id: 9, type: 'Plyometrics', exercises: ['Box jumps', 'Jump lunges', 'Depth jumps'] },
        { id: 10, type: 'Circuit Training', exercises: ['Battle ropes', 'Kettlebell swings', 'Medicine ball slams'] },
        { id: 11, type: 'Circuit Training', exercises: ['Bodyweight squats', 'Push-ups', 'Lateral lunges'] },
        { id: 12, type: 'Sport-Specific Training', exercises: ['Agility ladder drills', 'Kettlebell swings', 'Medicine ball throws'] }
    ]);

    const [restTips] = useState([
        'Get at least 7-8 hours of sleep per night.',
        'Incorporate rest days into your workout routine.',
        'Stay hydrated and eat balanced meals.',
        'Try stretching exercises to improve flexibility.',
        'Consider yoga or meditation for relaxation.',
        'Use foam rollers to ease muscle tension.',
        'Maintain a balanced diet with adequate proteins and carbs.',
        'Avoid overtraining by listening to your body’s signals.',
        'Ensure proper warm-up and cool-down during workouts.',
        'Establish a consistent sleep schedule to regulate your body clock.',
        'Limit caffeine and electronic device usage before bedtime.',
        'Practice deep breathing exercises to reduce stress.',
        'Include light activities, like walking, on rest days to promote recovery.',
        'Seek massage therapy to help relieve soreness and tension.',
        'Monitor and adjust your training intensity based on how you feel.',
        'Prioritize mental well-being with activities you enjoy.'
    ]);

    return (
        <div className="workouts-container">
            <h1 className="section-title">Workouts</h1>

            <section className="workout-types-section">
                <h2 className="section-heading">Types of Workouts</h2>
                <div className="workout-types-grid">
                    {workoutTypes.map(workout => (
                        <div key={workout.id} className="workout-card">
                            <h3 className="workout-type">{workout.type}</h3>
                            <ul className="exercise-list">
                                {workout.exercises.map((exercise, index) => (
                                    <li key={index} className="exercise-item">{exercise}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rest-tips-section">
                <h2 className="section-heading">Rest and Recovery Tips</h2>
                <ul className="rest-tips-list">
                    {restTips.map((tip, index) => (
                        <li key={index} className="rest-tip">{tip}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Workouts;
