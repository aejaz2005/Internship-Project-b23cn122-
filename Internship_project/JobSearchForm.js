import { useState } from 'react';

function JobSearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, location, rank });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input placeholder="Job Title" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
      <input placeholder="Veteran Rank" value={rank} onChange={e => setRank(e.target.value)} required />
      <button type="submit">Search</button>
    </form>
  );
}

export default JobSearchForm;
