import React from 'react'
import './OMnie.css'
import Navbar from '../../components/Navbar/Navbar'

function OMnie(){
    return(
        <>
            <Navbar />
            <main>
                <div className="home">
                    <h1>O mnie</h1>
                    <p>Z tej strony Kacper</p>
                    <p>Uczeń programistyki, pracuje z Reactem i PHP</p>
                </div>
            </main>
        </>
    )
}
export default OMnie