import React from 'react';
import './SchemeCard.css'; // Import the CSS for styling

const SchemeCard = ({ scheme }) => {
  return (
    <div className="scheme-card">
      <div className="card-content">
        <h3 className="scheme-title">{scheme.name}</h3>
        <p className="scheme-description">{scheme.description}</p>
      </div>
      <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn-learn-more">Learn More</a>
    </div>
  );
};

export default SchemeCard;
