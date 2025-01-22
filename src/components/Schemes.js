import React from 'react';

const schemesData = [
  { id: 1, name: 'Health Insurance Scheme', description: 'Access affordable healthcare through government insurance programs.' },
  { id: 2, name: 'Scholarship Programs', description: 'Find scholarships and grants to fund your education.' },
  { id: 3, name: 'Affordable Housing', description: 'Explore financial assistance for purchasing or renting homes.' },
];

const Schemes = () => {
  return (
    <div>
      <header style={headerStyles}>
        <h1>Government Schemes</h1>
        <nav style={navStyles}>
          <ul>
            <li><Link to="/" style={linkStyles}>Home</Link></li>
            <li><Link to="/about" style={linkStyles}>About</Link></li>
            <li><Link to="/schemes" style={linkStyles}>Schemes</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section style={schemesSectionStyles}>
          <h2>List of Government Schemes</h2>
          <div style={schemesListStyles}>
            {schemesData.map(scheme => (
              <div style={schemeCardStyles} key={scheme.id}>
                <h3>{scheme.name}</h3>
                <p>{scheme.description}</p>
              </div>
            ))}
          </div>
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

const schemesSectionStyles = {
  padding: '60px 20px',
  textAlign: 'center',
};

const schemesListStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const schemeCardStyles = {
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  width: '30%',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
};

const footerStyles = {
  backgroundColor: '#1e1e1e',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '40px',
};

export default Schemes;
