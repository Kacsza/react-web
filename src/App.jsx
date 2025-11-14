import {useState} from 'react';
import { useNavigate } from 'react-router';
import Container from './modules/Container';
import './App.css';

function App() {
  const [login,setLogin] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin= (event) => {
    event.preventDefault();
    console.log("Login:", login);
    console.log("Password:", password);
    if(login.trim() === "" || password.trim() === ""){
      alert("Both fields are required.");
      return;
    }
    navigate("/welcome",{state:login});
  }
  return (
    <>
    <main>
      <Container>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='login' value={login} onChange={(event)=>{setLogin(event.target.value)}} /><br/>
          <input type="password" placeholder='password' value={password} onChange={(event)=>{setPassword(event.target.value)}} /><br/>
          <button type="submit">Zaloguj</button>
        </form>
      </Container>
    </main>
    </>
  )
}

export default App
