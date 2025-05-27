import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation hook for accessing state

const SuccessPage = () => {
  const { state } = useLocation(); // Access the form data passed via navigate

  if (!state || !state.formData) {
    return <div>No data available!</div>;
  }

  const { firstName, lastName, email, phone } = state.formData;

  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <h3>Submitted Data:</h3>
      <pre>
        First Name: {firstName}
        <br />
        Last Name: {lastName}
        <br />
        Email: {email}
        <br />
        Phone Number: {phone}
      </pre>
    </div>
  );
};

export default SuccessPage;
