import React from 'react';

const About = () => {
  return (
    <div>
      <header style={headerStyles}>
        <h1>About Us</h1>
        <nav style={navStyles}>
          <ul>
            <li><Link to="/" style={linkStyles}>Home</Link></li>
            <li><Link to="/about" style={linkStyles}>About</Link></li>
            <li><Link to="/schemes" style={linkStyles}>Schemes</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section style={aboutIntroStyles}>
          <h2>Our Mission</h2>
          <p>We strive to empower citizens by providing easy access to public services and schemes, ensuring transparency and enhancing the quality of life.</p>
        </section>

        <section style={historySectionStyles}>
          <h2>Our History</h2>
          <p>Founded in 2020, the Citizen Services Portal was developed to streamline the distribution of government benefits to all citizens, regardless of location or background.</p>
        </section>

        <section style={objectivesSectionStyles}>
          <h2>Our Objectives</h2>
          <ul>
            <li>Provide easy access to all government services and schemes.</li>
            <li>Ensure transparency in government programs.</li>
            <li>Promote digital literacy and self-service options for citizens.</li>
          </ul>
        </section>
      </main>

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

const navStyles = {
  marginTop: '20px',
};

const linkStyles = {
  color: '#ffffff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '18px',
};

const aboutIntroStyles = {
  padding: '60px 20px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
};

const historySectionStyles = {
  padding: '60px 20px',
  backgroundColor: '#e9e9e9',
  textAlign: 'center',
};

const objectivesSectionStyles = {
  padding: '60px 20px',
  textAlign: 'center',
};

const footerStyles = {
  backgroundColor: '#1e1e1e',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '40px',
};

export default About;
