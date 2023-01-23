import React from 'react';
import { useState } from 'react';
import Topbar from './components/Navbar';

function DonationForm({ handleSubmit, handleChange, amount }) {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-gray-700 mb-2">
        Amount:
      </label>
      <input
        type="number"
        min="0.50"
        step="0.50"
        value={amount}
        onChange={handleChange}
        className="form-input rounded-md"
      />
      <button type="submit" className="bg-indigo-500 text-white rounded-md py-2 px-4 mt-4">
        Donate
      </button>
    </form>
  );
}

function CharityList({ charities, handleSelect }) {
  return (
    <ul className="mt-6">
      {charities.map(charity => (
        <li key={charity.id} className="flex items-center mb-2">
          <input
            type="radio"
            name="charity"
            id={charity.id}
            value={charity.id}
            onChange={handleSelect}
            className="form-radio"
          />
          <label htmlFor={charity.id} className="ml-2 text-gray-700">
            {charity.name}
          </label>
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
    <div className="container mx-auto">
      <Topbar/>
      <h1 className="text-3xl font-medium mb-6">Donate</h1>
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