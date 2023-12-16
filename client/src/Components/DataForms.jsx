// client/src/Components/DataForms.js
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DataForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Data Form</h2>
      {fields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          variant="outlined"
          fullWidth
          autoComplete
          margin="normal"
          value={formData[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
        />
      ))}
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DataForm;
