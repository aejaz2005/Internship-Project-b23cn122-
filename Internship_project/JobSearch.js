import { useState } from 'react';
import JobSearchForm from './JobSearchForm';

function JobSearch() {
  const [results, setResults] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleSearch = async ({ keyword, location, rank }) => {
    try {
      const query = new URLSearchParams({ keyword, location, rank }).toString();
      const res = await fetch(`http://localhost:4005/JobSearch?${query}`);
      const data = await res.json();
      setResults(Array.isArray(data) ? data : []);
      setShowTable(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowTable = async () => {
    try {
      const res = await fetch('http://localhost:4005/JobTable');
      const data = await res.json();
      setTableData(Array.isArray(data) ? data : []);
      setShowTable(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#fff' }}>
      <JobSearchForm onSearch={handleSearch} />
      <button onClick={handleShowTable}>Show All Jobs Table</button>

      {showTable && (
        <table border="1" cellPadding="6" style={{ marginTop: '20px', width: '100%',color:'black' }}>
          <thead>
            <tr>
              <th>JobID</th>
              <th>JobTitle</th>
              <th>Location</th>
              <th>Salary</th>
              <th>RequiredVeteranRank</th>
              <th>ApplyLink</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr><td colSpan="6">No jobs in table.</td></tr>
            ) : (
              tableData.map(job => (
                <tr key={job.JobID}>
                  <td>{job.JobID}</td>
                  <td>{job.JobTitle}</td>
                  <td>{job.Location}</td>
                  <td>₹{job.Salary}</td>
                  <td>{job.RequiredVeteranRank}</td>
                  <td><a href={job.ApplyLink} target="_blank" rel="noreferrer">Apply</a></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {!showTable && results.length > 0 && (
        <ul style={{ marginTop: '20px', color:'black'}}>
          {results.map(job => (
            <li key={job.JobID} style={{ marginBottom: '10px' }}>
              <strong>{job.JobTitle}</strong> - {job.Location} - ₹{job.Salary}<br />
              Rank: {job.RequiredVeteranRank}<br />
              <a href={job.ApplyLink} target="_blank" rel="noreferrer">Apply</a>
            </li>
          ))}
        </ul>
      )}

      {!showTable && results.length === 0 && (
        <p style={{ marginTop: '20px' }}>No jobs found. Please search by location and rank. Keyword is optional.</p>
      )}
    </div>
  );
}

export default JobSearch;
