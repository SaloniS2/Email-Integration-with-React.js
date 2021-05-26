import './App.css';
import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

function App() {

    const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    // message: '',
    to_email:''
        
  });
  

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'your service id',
      'your template id',
      toSend,
      'your user id'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
   
<div className="App">
<form onSubmit={onSubmit}>
  <div className="container1">
    <div>
      <p>FROM NAME</p>
      <input
        type='text'
        name='from_name'
        placeholder='from name'
        value={toSend.from_name}
        onChange={handleChange}
    />
    </div>
    <div>
      <p>TO NAME</p>
      <input
          type='text'
          name='to_name'
          placeholder='to name'
          value={toSend.to_name}
          onChange={handleChange}
        />
    </div>
  </div>
  <div className="container2">
    <p>Email ID</p>
    <input
      id='email_input'
      type='email'
      name='to_email'
      placeholder='enter to_email'
      value={toSend.to_email}
      onChange={handleChange}
    />
  </div>
  <div className="container3">
    <button >RESET</button>
    <button type='submit'>SHARE</button>
  </div>
    
</form>
</div>
  );
}

export default App;