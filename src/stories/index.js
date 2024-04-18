import React, { useState } from 'react';
import Form from '../components/Form';
import Story from '../components/Story';

const stories = [
  {
    title: 'Story 1',
    prompts: ['noun', 'verb', 'adjective', 'adverb'],
    generateStory: (inputs) => `The ${inputs.noun} ${inputs.verb} ${inputs.adjective} ${inputs.adverb}.`,
  },
  // More stories can be added here
];

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
