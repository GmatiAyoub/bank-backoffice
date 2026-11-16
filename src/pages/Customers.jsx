import { useEffect, useState } from 'react';
import { customerApi } from '../api/axiosConfig';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    customerApi.get('/')
      .then(res => setCustomers(res.data))
      .catch(err => console.error("Erreur API Client:", err));
  }, []);

  return (
    <div>
      <h1>Liste des Clients</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'white' }}>
        <thead style={{ backgroundColor: '#ecf0f1' }}>
          <tr><th>ID</th><th>Prénom</th><th>Nom</th><th>Email</th><th>Téléphone</th></tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td><td>{c.firstName}</td><td>{c.lastName}</td><td>{c.email}</td><td>{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}