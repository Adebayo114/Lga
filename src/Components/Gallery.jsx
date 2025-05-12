    import '../Styles/Gallery.css';
    import { Link } from 'react-router-dom';
    import { useEffect, useState } from 'react';
    import grandma1 from "../assets/Image2/Grandma (1).jpg";
    import grandma2 from "../assets/Image2/Grandma (2).jpg";
    import grandma3 from "../assets/Image2/Grandma (3).jpg";
    import grandma4 from "../assets/Image2/Grandma (4).jpg";
    import grandma5 from "../assets/Image2/Grandma (5).jpg";
    import grandma6 from "../assets/Image2/Grandma (6).jpg";
    import grandma7 from "../assets/Image2/Grandma (7).jpg";
    import grandma8 from "../assets/Image2/Grandma (8).jpg";
    import grandma9 from "../assets/Image2/Grandma (9).jpg";
    import grandma10 from "../assets/Image2/Grandma (10).jpg";
    import grandma11 from "../assets/Image2/Grandma (1).mp4";
    import grandma12 from "../assets/Image2/Grandma (2).mp4";
    import grandma13 from "../assets/Image2/Grandma (3).mp4";
    import bgMusic from "../assets/Audio/Simi_Iya_Ni_Wura_Cover_9jaflaver.com_.mp3";

    const images = [
    grandma1,
    grandma2,
    grandma3,
    grandma4,
    grandma5,
    grandma6,
    grandma7,
    grandma8,
    grandma9,
    grandma10
    ];

    const videos = [
    grandma11,
    grandma12,
    grandma13
    ];

    const Gallery = () => {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const audio = new Audio(bgMusic);
        audio.volume = 0.5; // Set volume to 50%
        audio.loop = true; // Loop the music
        audio.play();

        return () => {
        audio.pause(); // Stop the music when the component unmounts
        audio.currentTime = 0; // Reset the audio
        };
    }, []);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="gallery-wrapper">
        <Link to="/" className="back-btn">← Back Home</Link>
        <h2>Photo & Video Gallery</h2>
        <div className="gallery-grid">
            {images.map((src, i) => (
            <img
                key={i}
                src={src}
                alt={`mama-${i}`}
                className="gallery-img"
                onClick={() => openModal(<img src={src} alt={`mama-${i}`} />)}
            />
            ))}
            {videos.map((src, i) => (
            <video
                key={i}
                src={src}
                controls
                className="gallery-video"
                onClick={() => openModal(<video src={src} controls autoPlay />)}
            />
            ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="modal" onClick={closeModal}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-content">{modalContent}</div>
            </div>
        )}
        </div>
    );
    };

    export default Gallery;