import React, { useState } from 'react';
import './index.css';


/**
 * Main component that comprises of the React Form
 */
const App = () => {

  // `useState(initialValue)` takes in an argument to set the initial state
  // ... it then returns a reference to the state and 
  // ... and function to allow changing the state at a later stage 
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });


  return (
    <div className="form-container">
      <form className="register-form">

        {/* <div class="success-message">Success! Thank you for registering</div> */}

        <TextInput
          id="first-name"
          name="firstName"
          placeholder="First Name"
          title="Enter your first name"
          value={values.firstName}
          setValues={setValues}
        />

        <TextInput
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          title="Enter your last name"
          value={values.lastName}
          setValues={setValues}
        />

        <TextInput
          id="email"
          name="email"
          placeholder="Email"
          title="Enter your email address"
          value={values.email}
          setValues={setValues}
        />

        <button className="form-field" type="submit" title="Submit registration form">
          Register
        </button>

      </form>
    </div>
  );
};


/**
 * TextInput component that defines the input
 * along with the associated error message
 */
const TextInput = props => {

  /* onChange event handler to ensure that new values are updated in the state */
  const handleChange = event => {

    // if `event.target.*` was used direclty within the callback
    // this would be required due to the asynchronous event handling
    // and to avoid even being "pooled"
    // event.persist();

    // this approach is better for performance
    // instead of trying to hold up `event` for callback use through `event.persist`
    const name = event.target.name;
    const value = event.target.value;

    // the fat arrow function is builing a new values object for the state
    // ... and the resulting object literal is implicitly being returned to `setValues`
    // please note that without the paranthesis around the object literal, 
    // ... the braces would be mistaken for the function body!
    props.setValues(oldValues => ({
      ...oldValues,
      [name]: value
    }));
  };


  return (
    <input
      type="text"
      className="form-field"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      title={props.title}
      value={props.value}
      onChange={handleChange}
    />

    /* <span id={props.id + '-error'}>{props.title}</span> */
  );
};

export default App;
