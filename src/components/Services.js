import React from 'react';

const Services = () => {
<<<<<<< HEAD
  return (
    <div>
      <h2>Our Services</h2>
      <p>We provide a variety of online services to simplify the process of interacting with the government:</p>
      <ul>
        <li><strong>Online Registration:</strong> Register for public services, health benefits, and schemes online.</li>
        <li><strong>Document Submission:</strong> Submit required documents for various services directly through the portal.</li>
        <li><strong>Appointment Scheduling:</strong> Schedule appointments for government services, such as medical checkups or passport applications.</li>
        <li><strong>Information Access:</strong> Get updated information about the status of your applications or public schemes.</li>
      </ul>
=======
  // Inline CSS in a JS object
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '40px 0',
    fontFamily: "'Arial', sans-serif",
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const headerTextStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  };

  const headerDescriptionStyle = {
    fontSize: '1.1rem',
    color: '#34495e',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  };

  const itemStyle = {
    backgroundColor: '#ecf0f1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const itemTitleStyle = {
    fontSize: '1.7rem',
    color: '#2980b9',
    marginBottom: '15px',
  };

  const itemDescriptionStyle = {
    fontSize: '1rem',
    color: '#7f8c8d',
  };

  const itemHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '60px',
    fontSize: '1.1rem',
    color: '#34495e',
  };

  const footerTextStyle = {
    fontSize: '1.1rem',
    color: '#2c3e50',
    maxWidth: '800px',
    margin: '20px auto',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headerTextStyle}>Our Services</h2>
        <p style={headerDescriptionStyle}>
          We provide a variety of online services to simplify the process of interacting with the government. Explore below to see how we can assist you.
        </p>
      </div>

      <div style={listStyle}>
        <div style={itemStyle}>
          <h3 style={itemTitleStyle}><strong>Online Registration</strong></h3>
          <p style={itemDescriptionStyle}>Register for public services, health benefits, and schemes online. Easily submit your details and access government benefits without the hassle of visiting multiple offices.</p>
        </div>

        <div style={itemStyle}>
          <h3 style={itemTitleStyle}><strong>Document Submission</strong></h3>
          <p style={itemDescriptionStyle}>Submit the necessary documents for various services directly through our secure online portal, making your process quicker and more convenient.</p>
        </div>

        <div style={itemStyle}>
          <h3 style={itemTitleStyle}><strong>Appointment Scheduling</strong></h3>
          <p style={itemDescriptionStyle}>Schedule appointments for essential government services such as medical checkups, passport applications, and more from the comfort of your home.</p>
        </div>

        <div style={itemStyle}>
          <h3 style={itemTitleStyle}><strong>Information Access</strong></h3>
          <p style={itemDescriptionStyle}>Stay updated on the status of your applications or public schemes, get notifications, and track your requests efficiently.</p>
        </div>
      </div>

      <div style={footerStyle}>
        <p style={footerTextStyle}>If you have any questions, feel free to reach out to our support team for further assistance.</p>
      </div>
>>>>>>> 74b3555cbe89cb756c81c66c9dc7fa6e41ed2783
    </div>
  );
};

export default Services;
<<<<<<< HEAD
=======

>>>>>>> 74b3555cbe89cb756c81c66c9dc7fa6e41ed2783
