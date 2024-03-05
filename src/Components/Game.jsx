import React, { useState } from 'react';

function Game() {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>Hello....WELCOME..!</h2>
        <button onClick={handleShowMessage} className="btn btn-primary">Click Me</button>
        {showMessage && (
          <div className="alert alert-info mt-3" role="alert" style={{ maxWidth: '300px' }}>
            <strong>HYRR ASSESSMENT</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
