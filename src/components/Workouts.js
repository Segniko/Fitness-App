import React, { useState } from 'react';

const Workouts = () => {
    // Sample data
    const [workoutChallenges] = useState([
        { id: 1, name: '30-Day Push-Up Challenge', status: 'Completed' },
        { id: 2, name: '5K Run Challenge', status: 'Ongoing' }
    ]);

    const [achievements] = useState([
        { id: 1, title: 'First 5K Run', date: '2024-01-15' },
        { id: 2, title: '100th Workout Completed', date: '2024-03-10' }
    ]);

    const [feedbacks] = useState([
        { id: 1, workout: 'Push-Up Challenge', feedback: 'Great challenge! Really pushed my limits.' },
        { id: 2, workout: '5K Run Challenge', feedback: 'I loved the motivation and tracking.' },
        { id: 3, workout: '30-Day Push-Up Challenge', feedback: 'The daily progress updates were very motivating!' },
        { id: 4, workout: '5K Run Challenge', feedback: 'Fantastic experience! The running tips were helpful.' }
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
        'Ensure proper warm-up and cool-down during workouts.'
    ]);

    return (
        <div className="workouts-container">
            <h1 className="section-title">Workouts</h1>

            <section className="challenges-section">
                <h2 className="section-heading">Workout Challenges</h2>
                <ul className="challenges-list">
                    {workoutChallenges.map(challenge => (
                        <li key={challenge.id} className="challenge-item">
                            <span className="challenge-name">{challenge.name}</span>
                            <span className={`challenge-status ${challenge.status.toLowerCase()}`}>{challenge.status}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="achievements-section">
                <h2 className="section-heading">Achievements</h2>
                <ul className="achievements-list">
                    {achievements.map(achievement => (
                        <li key={achievement.id} className="achievement-item">
                            <span className="achievement-title">{achievement.title}</span>
                            <span className="achievement-date">{achievement.date}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="feedback-section">
                <h2 className="section-heading">Feedback and Ratings</h2>
                <ul className="feedback-list">
                    {feedbacks.map(feedback => (
                        <li key={feedback.id} className="feedback-item">
                            <span className="feedback-workout">{feedback.workout}:</span>
                            <span className="feedback-text">"{feedback.feedback}"</span>
                        </li>
                    ))}
                </ul>
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
