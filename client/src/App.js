// client/src/App.js
import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ConfigPage from './Components/ConfigPage';
import DataForm from './Components/DataForms';
import axios from 'axios';
import {initialFieldsState} from './Typings'
const App = () => {
  const [submittedData, setSubmittedData] = useState("");
  const [ error ,setError ] = useState("")
  const [fields, setFields] = useState(initialFieldsState);

  const handleFieldsChange = (fieldName) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === fieldName ? { ...field, value: !field.value } : field
      )
    );
  };


  const handleSubmitData = async (formData) => {
    // You can submit the data to the server here
    
    let url='http://localhost:5000/users/'
    try{
      let data = await axios.post(url,formData)
      if(data){
        setSubmittedData("Data Sent");
      }
    }catch(error){
        setError(error)
    }
    console.log('Submitting data:', formData);
  };

  return (
    <Container>
      <Box mt={3}>
          <div>
            <ConfigPage fields={fields} onFieldsChange={handleFieldsChange} />
            <DataForm fields={fields.filter((field) => field.value)} onSubmit={handleSubmitData} />
            {submittedData && <div style={{color:"green"}}>{submittedData}</div>}
            {error &&  <div style={{color:"red"}}>{error}</div>}
          </div>
      </Box>
    </Container>
  );
};

export default App;
