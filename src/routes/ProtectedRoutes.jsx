import { Outlet } from 'react-router-dom';
import { getStorage } from '../services/storage';
import Login from '../pages/Login';

export default function ProtectedRoutes() {
  const authorization = getStorage('token');
  return authorization ? <Outlet /> : <Login />;
}
