            // components/Quiz.jsx
            import { useState, useEffect } from 'react';
            import { useNavigate } from 'react-router-dom';
            import '../Styles/quiz.css';

            // Original questions
            const originalQuestions = [
            {
                question: "What was Mama Alake’s favorite food?",
                options: ["Pounded Yam", "Jollof Rice", "Amala", "Eba"],
                answer: "Eba"
            },
            {
                question: "Which city did she love most?",
                options: ["Lagos", "Ibadan", "Abuja", "Benin"],
                answer: "Lagos"
            },
            {
                question: "What year did she die?",
                options: ["2025", "2023", "2024", "2022"],
                answer: "2024"
            },
            {
                question: "What is her favourite drink?",
                options: ["Exotic Chivita", "Pepsi", "Ice Tea", "Tea"],
                answer: "Pepsi"
            },
            {
                question: "What is her favourite soup?",
                options: ["Efo", "Egusi", "Ewedu", "Ogbono"],
                answer: "Ogbono"
            },
            {
                question: "What does she wear most?",
                options: ["Wrapper", "Buba", "Ankara gown", "Laces"],
                answer: "Wrapper"
            },
            {
                question: "Best Bible Verse",
                options: ["Psalm 24", "John 3:16", "Psalm 91", "Proverbs 3:5"],
                answer: "Psalm 24"
            },
            {
                question: "Her Favourite Genre of song",
                options: [ "Fuji","Cherubim Hymns", "Gospel Highlife", "Apala"],
                answer: "Cherubim Hymns"
            },
            {
                question: "Favourite Radio Station",
                options: ["Radio Lagos (107.5 FM)","OGBC (90.5 FM)","Eko FM (89.7 FM)","RayPower (100.5 FM)"],
                answer: "Radio Lagos (107.5 FM)"
            },
            {
                question: "Favourite TV Station",
                options: [ "NTA", "Galaxy TV", "AIT", "BCOS"],
                answer: "AIT"
            },
            {
                question: "Praying Habit (Fond Of)",
                options: [ "Loud Prayers Only","Praying + Story", "Silent Meditation", "Praying with Hymns"],
                answer: "Praying + Story"
            },
            {
                question: "Best Protein",
                options: [ "Beef", "Fish", "Chicken", "Turkey"],
                answer: "Chicken"
            },
            {
                question: "Best Nut",
                options: [ "Groundnut", "Cashew nut", "Kola nut", "Walnut"],
                answer: "Walnut"
            },
            {
                question: "Nature type",
                options: ["Fan air type", "Cold water lover", "Natural air type (breeze)", "Rainy-day person"],
                answer: "Natural air type (breeze)"
            },
            {
                question: "What is that very special gift Alake Awawu Yahaya Adebayo had?",
                options: ["A Peacemaker", "A Giver", "A Teacher", "A Prayer Warrior"],
                answer: "A Giver"
            },
            {
                question: "What is Alake Awawu Yahaya Adebayo Favourite Balm?",
                options: ["Robb", "Tiger Balm", "Moko Balm", "Aboniki Balm"],
                answer: "Aboniki Balm"
            }
            ];

            // Shuffle utility
            const shuffleArray = (array) => {
            return [...array].sort(() => Math.random() - 0.5);
            };

            const Quiz = () => {
            const [questions, setQuestions] = useState([]);
            const [current, setCurrent] = useState(0);
            const [score, setScore] = useState(0);
            const [showResult, setShowResult] = useState(false);
            const navigate = useNavigate();

            useEffect(() => {
                // Shuffle questions and their options on load
                const shuffled = shuffleArray(originalQuestions).map(q => ({
                ...q,
                options: shuffleArray(q.options)
                }));
                setQuestions(shuffled);
            }, []);

            const handleAnswer = (option) => {
                if (option === questions[current].answer) {
                setScore(score + 1);
                }
                const next = current + 1;
                if (next < questions.length) {
                setCurrent(next);
                } else {
                setShowResult(true);
                }
            };

            if (questions.length === 0) return <p>Loading quiz...</p>;
            const handleBack = () => {
                navigate('/');
            };


            const handleRetry = () => {
                setCurrent(0);
                setScore(0);
                setShowResult(false);
            };


            return (
                <div className="quiz-container">
                {showResult ? (
                    <div className="result">
                    <h3>You scored {score} out of {questions.length}!</h3>
                    <p className="congrats">
                        {score === questions.length
                        ? "🎉 Perfect! Mama would be so proud!"
                        : score >= questions.length * 0.7
                        ? "👏 Well done! You really knew her well."
                        : "🙂 Good try! Thanks for honoring her memory."}
                    </p>

                    <div className="result-buttons">
                <button onClick={handleRetry} className="option-btn">Try Again</button>
                <button onClick={handleBack} className="option-btn">Back</button>
            </div>
                    </div>
                ) : (
                    <div className="question-block">
                    <h4 className="question">{questions[current].question}</h4>
                    {questions[current].options.map((opt, idx) => (
                        <button
                        key={idx}
                        className="option-btn"
                        onClick={() => handleAnswer(opt)}
                        >
                        {opt}
                        </button>
                    ))}
                    </div>
                )}
                </div>
            );
            };

            export default Quiz;
