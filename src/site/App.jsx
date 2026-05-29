import { useState } from 'react';
import { useNavigate } from 'react-router';
import Container from '../modules/Container';
import Navbar from '../modules/Navbar';
import Footer from '../modules/footer';
import './App.css';


function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (login.trim() === "" || password.trim() === "") {
      alert("Both fields are required.");
      return;
    }
    //przekazanie loginu w stanie nawigacji i przekierowanie do podstrony
    if (login ==="admin" && password ==="admin") {
      navigate("/welcome", { state: { login } });
    } else if (login !=="admin") {
      alert("Invalid login. Please try again.");
    }else {
      alert("Invalid password. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            <br/>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br/>
            <button type="submit" className='submit'>Zaloguj</button>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
