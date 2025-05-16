import React from 'react';
import '../Styles/Home.css';
import image1 from '../assets/Images/gp.jpg';
import { Link } from 'react-router-dom';

// CountdownTimer Component
const CountdownTimer = () => {
  const getNextEventDate = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const may16ThisYear = new Date(`${currentYear}-05-16T00:00:00`);

    // If today's date is past May 16 of this year, return next year's May 16
    return today > may16ThisYear
      ? new Date(`${currentYear + 1}-05-16T00:00:00`)
      : may16ThisYear;
  };

  const calculateTimeLeft = () => {
    const difference = +getNextEventDate() - +new Date();
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

  const timerComponents =
    Object.keys(timeLeft).length === 0 ? (
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
  const today = new Date();
  const currentYear = today.getFullYear();
  const may16ThisYear = new Date(`${currentYear}-05-16`);
  const displayYear = today > may16ThisYear ? currentYear + 1 : currentYear;

  return (
    <div className="home-container">
      <img src={image1} alt="Mama Grace" className="profile-pic" />
      <h2 className="subtitle">
        Alake Yahaya Adebayo lived a life of kindness, strength, and faith.
      </h2>
      <p className="text">Join us in remembering her with love and joy.</p>

      <div className="event-details">
        <h3 className="event-date">📅 May 16, {displayYear}</h3>
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
// This code defines a React component for a homepage that includes a countdown timer to an event, a profile picture, and links to other sections of the site. The countdown timer calculates the time left until May 16 of the current or next year, depending on the current date. The component is styled with CSS classes defined in 'Home.css'.