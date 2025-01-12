import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <header style={headerStyles}>
        <div style={heroStyles}>
          <h1>Welcome to Citizen Services Portal</h1>
          <p>Connecting citizens with essential government services</p>
          <nav style={navStyles}>
            <ul>
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
          <h2>Empowering Citizens with Information</h2>
          <p>Your one-stop destination for government services and schemes.</p>
        </section>

        {/* Introduction */}
        <section style={introSectionStyles}>
          <h2>Our Services</h2>
          <p>Explore the various government services designed to make your life easier.</p>
          <div style={serviceCardsStyles}>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Health Service" style={cardImageStyles} />
              <h3>Health Services</h3>
              <p>Access health insurance, medical programs, and wellness initiatives.</p>
            </div>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Education Schemes" style={cardImageStyles} />
              <h3>Education Schemes</h3>
              <p>Find scholarships and financial assistance for students.</p>
            </div>
            <div style={cardStyles}>
              <img src="https://via.placeholder.com/400x300" alt="Housing Assistance" style={cardImageStyles} />
              <h3>Housing Assistance</h3>
              <p>Learn about affordable housing initiatives and subsidies.</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section style={eventsSectionStyles}>
          <h2>Upcoming Events</h2>
          <div style={eventListStyles}>
            <div style={eventCardStyles}>
              <h3>Health Check-up Camp</h3>
              <p>Join us at the community center on 25th January for free check-ups.</p>
            </div>
            <div style={eventCardStyles}>
              <h3>Career Fair for Students</h3>
              <p>Attend the education fair on 30th January for scholarships and career advice.</p>
            </div>
            <div style={eventCardStyles}>
              <h3>Affordable Housing Information</h3>
              <p>Get more information about housing assistance on 5th February at the Town Hall.</p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section style={feedbackSectionStyles}>
          <h2>Citizen Feedback</h2>
          <p>Your opinion matters. Share your thoughts to help us improve our services.</p>
          <Link to="/feedback" style={feedbackButtonStyles}>Give Feedback</Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={footerStyles}>
        <p>Contact Us: info@citizenportal.com | Phone: +123-456-7890</p>
        <p>© 2025 Citizen Services Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Styles (modernized)
const headerStyles = {
  backgroundColor: '#1e1e1e',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

const heroStyles = {
  textAlign: 'center',
  padding: '40px 20px',
};

const navStyles = {
  marginTop: '20px',
};

const linkStyles = {
  color: '#ffffff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '18px',
};

const heroSectionStyles = {
  background: '#f5f5f5',
  padding: '40px 20px',
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
  gap: '20px',
};

const cardStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  width: '30%',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
  textAlign: 'center',
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
};

const eventCardStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  width: '30%',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
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
};

const footerStyles = {
  backgroundColor: '#1e1e1e',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '40px',
};

export default Index;
