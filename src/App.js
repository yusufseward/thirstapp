import React, { useState } from 'react';
import Topbar from './components/Navbar';

function CharityBox({ charity }) {
  return (
    <div className={`bg-${charity.color} rounded-md p-4 flex-shrink-0`}>
      <div className="text-sm">
        <h2 className="font-medium text-gray-700">{charity.name}</h2>
        <p className="text-gray-600">{charity.description}</p>
      </div>
    </div>
  );
}

function CharityList({ charities }) {
  return (
    <div className="flex flex-wrap -mx-4">
      {charities.map(charity => (
        <CharityBox key={charity.id} charity={charity} />
      ))}
    </div>
  );
}

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

function App() {
  const [amount, setAmount] = useState('');
  const charities = [
    { id: '1', name: 'Charity A', color: 'red', description: 'Charity A is a great charity that does a lot of good for people in need' },
    { id: '2', name: 'Charity B', color: 'green', description: 'Charity B is a great charity that does a lot of good for people in need' },
    { id: '3', name: 'Charity C', color: 'blue', description: 'Charity C is a great charity that does a lot of good for people in need' },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    // Code to handle the submission of the donation form, such as sending the donation to the selected charity
    console.log(`Donating $${amount} to selected charity`)
  }

  function handleChange(event) {
    setAmount(event.target.value);
  }

  return (
    <div>
      <Topbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium mb-6">Donate</h1>    
        <DonationForm handleSubmit={handleSubmit} handleChange={handleChange} amount={amount} />
        <CharityList charities={charities} />
      </div>
    </div>
  );
}

export default App;