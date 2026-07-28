import { useNavigate } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundPage
      onGoHome={() => navigate('/')}
      onGoBack={() => navigate(-1)}
    />
  );
}
