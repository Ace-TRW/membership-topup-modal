import React, { useState } from 'react';
import MembershipTopUpModal from './components/MembershipTopUpModal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h1>Membership Top-Up Modal Demo</h1>
        <p>Click the button below to view the modal component</p>
        <button 
          className="demo-button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
      {showModal && <MembershipTopUpModal />}
    </div>
  );
}

export default App;