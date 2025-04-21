// App.js
import React from 'react';

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f4f4f4',
    },
    header: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },
    nav: {
        display: 'flex',    
        justifyContent: 'space-around',
        backgroundColor: '#0056b3',
        padding: '10px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px 15px',
    },
    navLinkHover: {
        backgroundColor: '#004494',
    },
    mainContent: {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    mainHeading: {
        color: '#333',
    },
    mainParagraph: {
        lineHeight: 1.6,
        color: '#666',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#218838',
    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    },
};

function App() {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1>Dufan Ancol</h1>
            </header>
            <nav style={styles.nav}>
                <a href="#home" style={styles.navLink}>Home</a>
                <a href="#attractions" style={styles.navLink}>Attractions</a>
                <a href="#tickets" style={styles.navLink}>Tickets</a>
                <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>
            <div style={styles.mainContent}>
                <h1 style={styles.mainHeading}>Welcome to Dufan Ancol</h1>
                <p style={styles.mainParagraph}>
                    Dufan Ancol is one of the most popular amusement parks in Indonesia. 
                    Enjoy thrilling rides and attractions for all ages!
                </p>
                <button style={styles.button}>Buy Tickets</button>
            </div>
            <footer style={styles.footer}>
                <p>&copy; 2023 Dufan Ancol. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;