import { useState } from 'react';
import Navbar from './modules/Navbar';
import Container from './modules/Container';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Container >
        <h2>PS: Aleksio nie istnieje</h2>
      </Container>
      <Container className="span-2">
        <h1>Nic tu ni ma</h1>
        <p>Stronka będzie updatowana w miarę dalszej nauki.</p>
        <p>Nawet nie wiem co tu dodać</p>  
      </Container>
      <Container>
        <h1>Nowy kontener</h1>
        <p>To jest nowy kontener dodany do siatki.</p>
      </Container>
    </main>
    </>
  )
}

export default App
