    import React from 'react';
    import '../Styles/Home.css';
    import image1 from '../assets/Images/gp.jpg';
    import { Link } from 'react-router-dom';

    // CountdownTimer Component
    const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-05-16T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timerComponents = Object.keys(timeLeft).length === 0 ? (
        <p className="countdown-text">🎉 The remembrance is today!</p>
    ) : (
        <p className="countdown-text">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
    );

    return (
        <div className="countdown-timer">
        <h3>Countdown to Event:</h3>
        {timerComponents}
        </div>
    );
    };

    const Homepage = () => {
    return (
        <div className="home-container">
        <img src={image1} alt="Mama Grace" className="profile-pic" />
        <h2 className="subtitle">
            Alake Yahaya Adebayo lived a life of kindness, strength, and faith.
        </h2>
        <p className="text">Join us in remembering her with love and joy.</p>

        <div className="event-details">
            <h3 className="event-date">📅 May 16, 2025</h3>
            <p className="event-location">
            🕙 10:00 AM • 📍 No 9, Oladipupo Close, Tipper Garage, Akute Ogun State
            </p>
            <CountdownTimer />
        </div>

        <div className="home-links">
            <Link to="/biography" className="home-button">📖 View Biography</Link>
            <Link to="/gallery" className="home-button">🖼️ View Gallery</Link>
            <Link to="/quiz" className="quiz-button">📝 Take the Quiz</Link>
        </div>
        </div>
    );
    };

    export default Homepage;
