import React from 'react';

const Footer = () => {
  // Inline CSS styles
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '30px 0',
    textAlign: 'center',
    fontFamily: "'Arial', sans-serif",
  };

  const footerTextStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '15px',
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.3rem',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#2980b9',
  };

  return (
    <footer style={footerStyle}>
      <p style={footerTextStyle}>© 2025 Citizen Services | All Rights Reserved</p>

      {/* Social Media Links */}
      <div style={socialLinksStyle}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = '#2980b9')}
          onMouseLeave={(e) => (e.target.style.color = '#ecf0f1')}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = '#2980b9')}
          onMouseLeave={(e) => (e.target.style.color = '#ecf0f1')}
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = '#2980b9')}
          onMouseLeave={(e) => (e.target.style.color = '#ecf0f1')}
        >
          LinkedIn
        </a>
      </div>

      {/* Footer Text */}
      <p style={footerTextStyle}>Made with ❤️ by Citizen Services Team</p>
    </footer>
  );
};

export default Footer;

