import React from 'react';
import { useState } from 'react';

function DonationForm({ handleSubmit, handleChange, amount }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          min="0.50"
          step="0.50"
          value={amount}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Donate</button>
    </form>
  );
}

function CharityList({ charities, handleSelect }) {
  return (
    <ul>
      {charities.map(charity => (
        <li key={charity.id}>
          <input
            type="radio"
            name="charity"
            id={charity.id}
            value={charity.id}
            onChange={handleSelect}
          />
          <label htmlFor={charity.id}>{charity.name}</label>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [amount, setAmount] = useState('');
  const [selectedCharityId, setSelectedCharityId] = useState('');
  const charities = [
    { id: '1', name: 'Charity A' },
    { id: '2', name: 'Charity B' },
    { id: '3', name: 'Charity C' },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    // Code to handle the submission of the donation form, such as sending the donation to the selected charity
  }

  function handleChange(event) {
    setAmount(event.target.value);
  }

  function handleSelect(event) {
    setSelectedCharityId(event.target.value);
  }

  return (
    <div>
      <h1>Donate</h1>
      <DonationForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        amount={amount}
      />
      <CharityList
        charities={charities}
        handleSelect={handleSelect}
        selectedCharityId={selectedCharityId}
      />
    </div>
  );
}

export default App;

