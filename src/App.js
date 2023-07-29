import React from 'react';

// GreetingCard component
const GreetingCard = (props) => {
  // Destructure the props for easy access
  const { name, greeting, backgroundColor, textColor } = props;

  // Style object to apply custom background and text color
  const cardStyle = {
    backgroundColor: backgroundColor || '#f0f0f0',
    color: textColor || '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      <h2>{greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`}</h2>
      <p>Hope you have a great day!</p>
    </div>
  );
};

export default GreetingCard;
