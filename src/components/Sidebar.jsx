import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ width: '250px', minHeight: '100vh', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
      <h2>🏦 Bank Admin</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '20px 0' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>📊 Dashboard</Link></li>
        <li style={{ margin: '20px 0' }}><Link to="/customers" style={{ color: 'white', textDecoration: 'none' }}>👥 Clients</Link></li>
        <li style={{ margin: '20px 0' }}><Link to="/accounts" style={{ color: 'white', textDecoration: 'none' }}>🏦 Comptes</Link></li>
        <li style={{ margin: '20px 0' }}><Link to="/transactions" style={{ color: 'white', textDecoration: 'none' }}>💸 Transactions</Link></li>
      </ul>
    </div>
  );
}