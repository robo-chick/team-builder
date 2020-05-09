import React, { useState } from 'react';
import './App.css';
import styles from './styles.css';
import MemberForm from './components/Form';
import MemberCard from './components/MemberCard';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'Tasha Hollingsworth',
    email: 'tashingsworth@gmail.com',
    role: 'front end developer'
  }])

 const handleSubmit = (member) => {
   setMembers([...members, member]);
 };

  return (
    <div className='App'>
      <h1>Team Members</h1>
      <MemberForm onSubmit={handleSubmit} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
