import React, { useState } from 'react';

function Form({ onSubmit, story }) {
  const [values, setValues] = useState(story.prompts.reduce((acc, prompt) => ({ ...acc, [prompt]: '' }), {}));

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {story.prompts.map((prompt) => (
        <input key={prompt} name={prompt} value={values[prompt]} onChange={handleChange} required />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
