import React from 'react';

const GoogleForm = () => {
  return (
    <div className="google-form-container">
      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_URL_HERE/viewform?embedded=true"
        title="Google Form"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;

