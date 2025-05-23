    import '../Styles/Gallery.css';
    import { Link } from 'react-router-dom';
    import { useEffect, useState } from 'react';

    // Background music
    import bgMusic from "../assets/Audio/Simi_Iya_Ni_Wura_Cover_9jaflaver.com_.mp3";

    // Alake Adebayo (Grandma)
    import alake1 from "../assets/Image2/Grandma (1).jpg";
    import alake2 from "../assets/Image2/Grandma (2).jpg";
    import alake3 from "../assets/Image2/Grandma (3).jpg";
    import alake4 from "../assets/Image2/Grandma (4).jpg";
    import alake5 from "../assets/Image2/Grandma (5).jpg";
    import alake6 from "../assets/Image2/Grandma (6).jpg";
    import alake7 from "../assets/Image2/Grandma (7).jpg";
    import alake8 from "../assets/Image2/Grandma (8).jpg";
    import alake9 from "../assets/Image2/Grandma (9).jpg";
    import alake10 from "../assets/Image2/Grandma (10).jpg";

    // Her Children
    import child1 from "../assets/image3/children-1.jpg";
    import child2 from "../assets/image3/children-5.jpg";
    import child3 from "../assets/image3/children-6.jpg";
    import child4 from "../assets/image3/children-2.jpg";
    import child5 from "../assets/image3/children-3.jpg";
    import child6 from "../assets/image3/children-7.jpg";
    import child7 from "../assets/image3/children-4.jpg";
    import child8 from "../assets/image3/children-8.jpg";
    import child9 from "../assets/image3/children-9.jpg";

    // Wives
    import wife1 from "../assets/image3/wives (1).jpg";
    import wife2 from "../assets/image3/wives (2).jpg";
    import wife3 from "../assets/image3/wives (3).jpg";

    // Grandchildren & Great-grandchildren
    import grand1 from "../assets/image3/GrandChildren (1).jpg";
    import grand2 from "../assets/image3/GrandChildren (2).jpg";
    import grand3 from "../assets/image3/GrandChildren (3).jpg";
    import grand4 from "../assets/image3/GrandChildren (4).jpg";
    import grand5 from "../assets/image3/GrandChildren (5).jpg";
    import grand6 from "../assets/image3/GrandChildren (6).jpg";

    // Family Friends
    import friend1 from "../assets/image3/Family-Friends (1).jpg";
    import friend2 from "../assets/image3/Family-Friends (2).jpg";
    import friend3 from "../assets/image3/Family-Friends (3).jpg";
    import friend4 from "../assets/image3/Family-Friends (4).jpg";
    import friend5 from "../assets/image3/Family-Friends (5).jpg";
    import friend6 from "../assets/image3/Family-Friends (6).jpg";
    import friend7 from "../assets/image3/Family-Friends (7).jpg";

    // Grouped media
    const alakeImages = [
    alake1, alake2, alake3, alake4, alake5,
    alake6, alake7, alake8, alake9, alake10,
    "/vids-1.mp4", "/vids-2.mp4", "/vids-3.mp4"
    ];

    const childrenImages = [
    child1, child2, child3, child4, child5,
    child6, child7, child8, child9
    ];

    const wifeImages = [wife1, wife2, wife3];

    const grandMedia = [
    grand1, grand2, grand3, grand4, grand5, grand6
    ];

    const friendMedia = [
    friend1, friend2, friend3, friend4, friend5, friend6, friend7
    ];

    let bgAudio; // Global audio reference

    const Gallery = () => {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
        bgAudio = new Audio(bgMusic);
        bgAudio.volume = 0.5;
        bgAudio.loop = true;
        bgAudio.play();

        return () => {
        bgAudio.pause();
        bgAudio.currentTime = 0;
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

    const renderSection = (title, mediaArray) => (
        <div className="gallery-section">
        <h3>{title}</h3>
        <div className="gallery-grid">
            {mediaArray.map((src, i) => {
            const isVideo = typeof src === 'string' && src.endsWith('.mp4');
            return isVideo ? (
                <video
                key={i}
                controls
                muted
                preload="metadata"
                className="gallery-video"
                onClick={(e) => {
                    e.stopPropagation();
                    openModal(
                    <video
                        src={src}
                        controls
                        autoPlay
                        muted
                        preload="auto"
                        style={{ maxWidth: '90vw', maxHeight: '80vh' }}
                        onPlay={() => {
                        if (bgAudio) bgAudio.volume = 0.1;
                        }}
                        onPause={() => {
                        if (bgAudio) bgAudio.volume = 0.5;
                        }}
                        onEnded={() => {
                        if (bgAudio) bgAudio.volume = 0.5;
                        }}
                    />
                    );
                }}
                >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            ) : (
                <img
                key={i}
                src={src}
                alt={`Photo of ${title.replace(/-/g, ' ')}`}
                className="gallery-img"
                loading="lazy"
                onClick={() =>
                    openModal(
                    <img
                        src={src}
                        alt={`Photo of ${title.replace(/-/g, ' ')}`}
                    />
                    )
                }
                />
            );
            })}
        </div>
        </div>
    );

    return (
        <div className="gallery-wrapper">
        <Link to="/" className="back-btn">← Back Home</Link>
        <h2>Photo & Video Gallery</h2>

        {renderSection("Alake Yahaya Adebayo", alakeImages)}
        {renderSection("Her Children", childrenImages)}
        {renderSection("Her Wives", wifeImages)}
        {renderSection("Grandchildren & Great-Grandchildren", grandMedia)}
        {renderSection("Family Friends", friendMedia)}

        {isModalOpen && (
            <div className="modal" onClick={closeModal}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-content">{modalContent}</div>
            </div>
        )}

        <button
            className="scroll-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            ↑ Top
        </button>
        </div>
    );
    };

    export default Gallery;
