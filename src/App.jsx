import { useState } from 'react';
import Navbar from './modules/Navbar';
import Container from './modules/Container';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Container>
        <h1>Nic tu ni ma</h1>
        <p>Stronka będzie updatowana w miarę dalszej nauki.</p>
        <p>Nawet nie wiem co tu dodać</p>
      </Container>
      <Container>
        <h2>PS: Aleksio nie istnieje</h2>
      </Container>
    </main>
    </>
  )
}

export default App
