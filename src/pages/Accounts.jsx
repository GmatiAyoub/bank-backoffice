import { useEffect, useState } from 'react';
import { accountApi } from '../api/axiosConfig';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    accountApi.get('/')
      .then(res => setAccounts(res.data))
      .catch(err => console.error("Erreur API Compte:", err));
  }, []);

  return (
    <div>
      <h1>Liste des Comptes</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'white' }}>
        <thead style={{ backgroundColor: '#ecf0f1' }}>
          <tr><th>ID</th><th>Numéro</th><th>Client ID</th><th>Solde</th><th>Statut</th></tr>
        </thead>
        <tbody>
          {accounts.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td><td>{a.accountNumber}</td><td>{a.customerId}</td>
              <td style={{ fontWeight: 'bold', color: 'green' }}>{a.balance} TND</td><td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}