import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'

function Contact(){
    return(
        <>
            <Navbar />
            <main className="contact">
                <div className="contact-card">
                    <h1>Kontakt</h1>
                    <p>Masz pytanie? Napisz lub zadzwoń — chętnie odpowiem.</p>
                    <ul>
                        <li>Email: <a href="mailto:kacper@example.com">kacper@example.com</a></li>
                        <li>Telefon: +48 000 100 200</li>
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Contact