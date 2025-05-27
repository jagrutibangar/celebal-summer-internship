import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you're using the correct hook

const FormBody = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    let isValid = true;

    if (!firstNameRef.current.value) {
      formErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastNameRef.current.value) {
      formErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!emailRef.current.value) {
      formErrors.email = 'Email is required';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      const formData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      };

      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div>
      <h2>Fill out the Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input type="text" ref={firstNameRef} />
          <span style={{ color: 'red' }}>{errors.firstName}</span>
        </div>
        <div>
          Last Name: <input type="text" ref={lastNameRef} />
          <span style={{ color: 'red' }}>{errors.lastName}</span>
        </div>
        <div>
          Email: <input type="email" ref={emailRef} />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormBody;
