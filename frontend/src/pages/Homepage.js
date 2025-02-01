import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaCalendarAlt, FaFileAlt, FaBlog, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

import EventPage from './eventpage';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {/* Navbar at the Top (Not Fixed) */}
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}><Link to="/event-dashboard" style={styles.link}>EventDashboard</Link></li>
                <li style={styles.navItem}><Link to="/event-form" style={styles.link}>Create Event</Link></li>
                <li style={styles.navItem}><Link to="/upcoming-events" style={styles.link}>UpcomingEvent</Link></li>
                <li style={styles.navItem}><Link to="/allevents" style={styles.link}>All Events</Link></li>
            </ul>
            <button style={styles.menuButton} onClick={toggleMenu}>☰</button>
        </nav>

        {/* Sidebar */}
        <div style={{ ...styles.sidebar, right: isOpen ? '0' : '-250px' }}>
            <button style={styles.closeButton} onClick={toggleMenu}>×</button>
            <ul style={styles.sidebarList}>
                <li><Link to="#" style={styles.sidebarLink}><FaTachometerAlt /> Dashboard</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaHome /> Home</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaInfoCircle /> About us</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaServicestack /> Services</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaEnvelope /> Contact us</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaCalendarAlt /> Events</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaFileAlt /> Pages</Link></li>
                <li><Link to="#" style={styles.sidebarLink}><FaBlog /> Blogs</Link></li>
                <li><Link to="/signin" style={styles.sidebarLink}><FaSignOutAlt /> Logout</Link></li>
             </ul>

        </div>
        <EventPage />
        </>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#498BEE',
        padding: '10px 0',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
    },
    navItem: {
        margin: '0 15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        transition: 'color 0.3s ease',
    },
    menuButton: {
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '24px',
        cursor: 'pointer',
    },
    //icons
    sidebarLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    transition: 'background 0.3s ease',
    gap: '10px', 
},

    sidebar: {
        position: 'fixed',
        top: 0,
        // marginTop: '80px',
        right: '-250px',
        // width: '250px',
         height: '100%',
        backgroundColor: '#498BEE',
        padding: '20px',
        transition: 'right 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: '#fff',
        fontSize: '24px',
        cursor: 'pointer',
        alignSelf: 'flex-end',
    },
    sidebarList: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
        textAlign: 'center',
       
    },
  
};

export default HomePage;
