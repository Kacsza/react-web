import { useLocation, Navigate } from 'react-router';
import Container from '../modules/Container';
import './App.css';

function Welcome() {
  const location = useLocation();
  // pobierz login ze stanu przekazanego przez nawigację
  const login = location.state?.login;

  // jeżeli brak loginu w stanie, przekieruj na stronę główną
  if (!login) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <main>
        <Container>
          <h1>Welcome, {login}</h1>
        </Container>
      </main>
    </>
  );
}

export default Welcome;
