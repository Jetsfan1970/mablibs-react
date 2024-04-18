import React from 'react';

function Story({ inputs, story, onRestart }) {
  return (
    <div>
      <p>{story.generateStory(inputs)}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Story;
