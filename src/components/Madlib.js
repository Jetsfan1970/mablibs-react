import React, { useState } from 'react';
import Form from './Form';
import Story from './Story';
import stories from '../stories';

function Madlib() {
  const [storyId, setStoryId] = useState(null);
  const [inputs, setInputs] = useState(null);

  const handleFormSubmit = (inputs) => {
    setInputs(inputs);
  };

  const handleRestart = () => {
    setInputs(null);
  };

  if (inputs === null) {
    return <Form onSubmit={handleFormSubmit} story={stories[storyId]} />;
  } else {
    return <Story inputs={inputs} story={stories[storyId]} onRestart={handleRestart} />;
  }
}

export default Madlib;
