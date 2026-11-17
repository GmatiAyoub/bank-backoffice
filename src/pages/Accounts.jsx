import { useEffect, useState } from 'react';
import { accountApi } from '../api/axiosConfig';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  // Fonction pour charger les comptes
  const fetchAccounts = () => {
    accountApi.get('')
      .then(res => setAccounts(res.data))
      .catch(err => console.error("Erreur API Compte:", err));
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Fonction pour approuver un compte
  const handleApprove = (id) => {
    // On ajoute un petit message de confirmation avant d'approuver
    if (window.confirm("Voulez-vous vraiment approuver ce compte ?")) {
      accountApi.put(`/${id}/approve`)
        .then(() => {
          alert("Compte approuvé avec succès !");
          fetchAccounts(); // On recharge la liste pour voir le changement
        })
        .catch(err => {
          console.error("Erreur d'approbation:", err);
          alert("Erreur lors de l'approbation du compte.");
        });
    }
  };

  return (
    <div>
      <h1>Liste des Comptes</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'white' }}>
        <thead style={{ backgroundColor: '#ecf0f1' }}>
          <tr>
            <th>ID</th>
            <th>Numéro</th>
            <th>Client ID</th>
            <th>Solde</th>
            <th>Statut</th>
            <th>Action</th> {/* Nouvelle colonne */}
          </tr>
        </thead>
        <tbody>
          {accounts.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.accountNumber}</td>
              <td>{a.customerId}</td>
              <td style={{ fontWeight: 'bold', color: 'green' }}>{a.balance} TND</td>
              
              {/* Affichage du statut avec des couleurs */}
              <td style={{ 
                fontWeight: 'bold', 
                color: a.status === 'ACTIVE' ? 'green' : (a.status === 'PENDING' ? 'orange' : 'red') 
              }}>
                {a.status}
              </td>

              {/* Bouton d'action */}
              <td>
                {a.status === 'PENDING' ? (
                  <button 
                    onClick={() => handleApprove(a.id)}
                    style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    Approuver
                  </button>
                ) : (
                  <span style={{ color: 'gray', fontStyle: 'italic' }}>Aucune action</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}