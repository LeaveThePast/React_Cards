import React from 'react';
import Card from './Card';
import image from './assets/image.png';

const App = () => {
  return (
    <div className="container">
      <h1>My Cards</h1>
      <Card
        imageSrc={image}
        title="Card title"
        buttonLink="https://example.com"
        buttonText="Go somewhere"
      >
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card>
    </div>
  );
};

export default App;
