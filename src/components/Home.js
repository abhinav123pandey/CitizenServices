import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <header style={headerStyles}>
        <div style={heroStyles}>
          <h1 style={heroTitleStyles}>Welcome to Citizen Services Portal</h1>
          <p style={heroSubtitleStyles}>Connecting citizens with essential government services</p>
          <nav style={navStyles}>
            <ul style={navListStyles}>
              <li><Link to="/" style={linkStyles}>Home</Link></li>
              <li><Link to="/about" style={linkStyles}>About</Link></li>
              <li><Link to="/schemes" style={linkStyles}>Schemes</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section style={heroSectionStyles}>
          <h2 style={sectionTitleStyles}>Empowering Citizens with Information</h2>
          <p style={sectionSubtitleStyles}>Your one-stop destination for government services and schemes.</p>
        </section>

        {/* Our Services Section */}
        <section style={introSectionStyles}>
          <h2 style={sectionTitleStyles}>Our Services</h2>
          <p style={sectionSubtitleStyles}>Explore the various government services designed to make your life easier.</p>
          <div style={serviceCardsStyles}>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Health Service" style={cardImageStyles} />
              <h3 style={cardTitleStyles}>Health Services</h3>
              <p style={cardDescriptionStyles}>Access health insurance, medical programs, and wellness initiatives.</p>
            </div>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Education Schemes" style={cardImageStyles} />
              <h3 style={cardTitleStyles}>Education Schemes</h3>
              <p style={cardDescriptionStyles}>Find scholarships and financial assistance for students.</p>
            </div>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Housing Assistance" style={cardImageStyles} />
              <h3 style={cardTitleStyles}>Housing Assistance</h3>
              <p style={cardDescriptionStyles}>Learn about affordable housing initiatives and subsidies.</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section style={eventsSectionStyles}>
          <h2 style={sectionTitleStyles}>Upcoming Events</h2>
          <div style={eventListStyles}>
            <div style={eventCardStyles}>
              <h3 style={eventCardTitleStyles}>Health Check-up Camp</h3>
              <p style={eventCardDescriptionStyles}>Join us at the community center on 25th January for free check-ups.</p>
            </div>
            <div style={eventCardStyles}>
              <h3 style={eventCardTitleStyles}>Career Fair for Students</h3>
              <p style={eventCardDescriptionStyles}>Attend the education fair on 30th January for scholarships and career advice.</p>
            </div>
            <div style={eventCardStyles}>
              <h3 style={eventCardTitleStyles}>Affordable Housing Information</h3>
              <p style={eventCardDescriptionStyles}>Get more information about housing assistance on 5th February at the Town Hall.</p>
            </div>
          </div>
        </section>

        {/* Citizen Feedback Section */}
        <section style={feedbackSectionStyles}>
          <h2 style={sectionTitleStyles}>Citizen Feedback</h2>
          <p style={sectionSubtitleStyles}>Your opinion matters. Share your thoughts to help us improve our services.</p>
          <Link to="/feedback" style={feedbackButtonStyles}>Give Feedback</Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={footerStyles}>
        <p style={footerTextStyles}>Contact Us: info@citizenportal.com | Phone: +123-456-7890</p>
        <p style={footerTextStyles}>© 2025 Citizen Services Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Modernized Styles
const headerStyles = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '50px 20px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const heroStyles = {
  textAlign: 'center',
  padding: '40px 20px',
};

const heroTitleStyles = {
  fontSize: '48px',
  fontWeight: 'bold',
  margin: '0',
};

const heroSubtitleStyles = {
  fontSize: '20px',
  marginTop: '10px',
  fontWeight: '300',
};

const navStyles = {
  marginTop: '20px',
};

const navListStyles = {
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyles = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};

const linkHoverStyles = {
  color: '#f7c948',
};

const heroSectionStyles = {
  backgroundColor: '#f5f5f5',
  padding: '50px 20px',
  textAlign: 'center',
};

const introSectionStyles = {
  padding: '60px 20px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
};

const serviceCardsStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '30px',
  marginTop: '30px',
};

const cardStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  width: '30%',
  padding: '25px',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  textAlign: 'center',
  boxSizing: 'border-box',
};

const cardTitleStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const cardDescriptionStyles = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '20px',
};

const cardImageStyles = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const eventsSectionStyles = {
  padding: '60px 20px',
  textAlign: 'center',
  backgroundColor: '#e9e9e9',
};

const eventListStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '30px',
};

const eventCardStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  width: '30%',
  padding: '25px',
  transition: 'transform 0.3s ease-in-out',
};

const eventCardTitleStyles = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const eventCardDescriptionStyles = {
  fontSize: '16px',
  color: '#555',
};

const feedbackSectionStyles = {
  padding: '60px 20px',
  backgroundColor: '#ffffff',
  textAlign: 'center',
};

const feedbackButtonStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '15px 30px',
  fontSize: '18px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
};

const footerStyles = {
  backgroundColor: '#343a40',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '40px',
  boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
};

const footerTextStyles = {
  margin: '5px 0',
  fontSize: '14px',
  color: '#ccc',
};

// Define missing styles
const sectionTitleStyles = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '15px',
};

const sectionSubtitleStyles = {
  fontSize: '18px',
  color: '#555',
  marginBottom: '30px',
};

export default Index;
