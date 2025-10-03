import React from 'react';

const Content = ({ title, className, content }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>This is the {title} home page.</p>
      <div>
        {content}
     </div>
    </div>

  );
}

export default Content;