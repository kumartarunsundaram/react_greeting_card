import React from 'react';
import GreetingCard from './GreetingCard';

const App = () => {
  return (
    <div>
      {/* Default greeting card */}
      <GreetingCard name="John" />

      {/* Greeting card with custom greeting and colors */}
      <GreetingCard
        name="Jane"
        greeting="Hi"
        backgroundColor="#ffcccb"
        textColor="#800000"
      />
    </div>
  );
};

export default App;
