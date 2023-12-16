// client/src/components/ConfigPage.js
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

const ConfigPage = ({ fields, onFieldsChange }) => {
  const handleCheckboxChange = (field) => {
    onFieldsChange(field);
  };

  return (
    <FormGroup>
      <h2>Configuration Page</h2>
      <Grid container spacing={1}>
        {fields.map((field) => (
          <Grid item key={field.name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={field.value}
                  onChange={() => handleCheckboxChange(field.name)}
                />
              }
              label={field.label}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

export default ConfigPage;
