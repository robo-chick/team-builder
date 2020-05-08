import React, { useState } from 'react';
import './App.css';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Tasha Hollingsworth',
    email: 'tashingsworth@gmail.com',
    role: 'front end developer'
  }])

  const addNewMember = member => {
    const addMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, addMemner])
  }
  return (
    <div className='App'>
      <h1>Team Members</h1>
      
    </div>
  );
}

export default App;
