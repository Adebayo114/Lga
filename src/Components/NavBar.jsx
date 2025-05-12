    import { Link } from 'react-router-dom';
    import '../Styles/Nav.css';

    const NavBar = () => (
    <header className="header">
        <h1 className="title">Remembering Alake Awawu Yahaya (Adebayo)</h1>
        <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/quiz" className="nav-link">Quiz</Link>
        </nav>
    </header>
    );

    export default NavBar;
// This code defines a navigation bar component for a React application. It uses React Router's Link component to create links to the home page and quiz page. The component is styled with CSS classes defined in 'Header.css'.