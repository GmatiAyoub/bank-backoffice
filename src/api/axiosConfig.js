import axios from 'axios';

// On utilise localhost car React tourne sur ton PC (pas dans l'émulateur)
export const customerApi = axios.create({ baseURL: 'http://localhost:8081/api/customers' });
export const accountApi = axios.create({ baseURL: 'http://localhost:8082/api/accounts' });
export const transactionApi = axios.create({ baseURL: 'http://localhost:8083/api/transactions' });
export const notificationApi = axios.create({ baseURL: 'http://localhost:8084/api/notifications' });