import { useEffect, useState } from 'react';
import { transactionApi } from '../api/axiosConfig';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionApi.get('/')
      .then(res => setTransactions(res.data))
      .catch(err => console.error("Erreur API Transaction:", err));
  }, []);

  return (
    <div>
      <h1>Historique des Transactions</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'white' }}>
        <thead style={{ backgroundColor: '#ecf0f1' }}>
          <tr><th>ID</th><th>Compte Source</th><th>Compte Dest.</th><th>Montant</th><th>Statut</th><th>Date</th></tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td><td>{t.sourceAccountId}</td><td>{t.destinationAccountId}</td>
              <td>{t.amount} TND</td>
              <td style={{ fontWeight: 'bold', color: t.status === 'COMPLETED' ? 'green' : 'red' }}>{t.status}</td>
              <td>{t.transactionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}