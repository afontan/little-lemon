import Logo from '../assets/logo.png';
import "./styles/Footer.css";

function Footer() {
    return <footer>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Accra</li>
                            <li>Kumasi</li>
                            <li>Cape Coast</li>
                            <li>Tamale</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Thu: 16:30 - 24:00</li>
                            <li>Fri: 16:30 - 1:00</li>
                            <li>Sat - Sun: 10:30 - 1:00</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>You know where!</li>
                            <li>Tel: 987 6543 2101</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2025 Little Lemon. All rights reserved.</p>
            </div>
        </div>
        </div>
    </footer>;
}

export default Footer;