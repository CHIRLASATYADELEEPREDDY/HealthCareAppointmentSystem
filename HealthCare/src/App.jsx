import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('/home.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
    },
    header: {
      width: '100%',
      padding: '20px 0',
      textAlign: 'center',
      position: 'absolute',
      top: '20px',
      left: '0',
      right: '0',
      /* Removed the grey background */
      borderRadius: '10px',
      padding: '15px',
    },
    marquee: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#f8f8f8',
    },
    body: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      /* Removed the grey background */
      borderRadius: '10px',
      padding: '30px',
    },
    button: {
      padding: '15px 30px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white',
      background: '#ff5733',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
    },
    buttonHover: {
      background: '#d84315',
      transform: 'scale(1.1)',
    }
  };

  return (
    <div style={styles.container}>
      {/* Fixed header */}
      <div style={styles.header}>
        <div><marquee style={styles.marquee}>WELCOME TO HEALTH CARE APPOINTMENT SYSTEM</marquee></div>
      </div>

      {/* Centered body content */}
      <div style={styles.body}>
        <h2>In order to book and check the availability of appointments</h2>
        <button
          style={styles.button}
          onMouseOver={(e) => e.target.style.background = styles.buttonHover.background}
          onMouseOut={(e) => e.target.style.background = styles.button.background}
          onClick={() => navigate('/page1')}
        >
          Click Here to Proceed
        </button>
      </div>
    </div>
  );
}