import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

function Home(){
    return(
        <>
            <Navbar />
            <main>
                <div className="home">
                    <h1>Witam na stronie</h1>
                    <p>Jest to zwykła strona, zrobiona jako zaliczenie w szkole średniej.</p>
                    <p>Projekt zawiera galerię zdjęć oraz kilka podstron.</p>
                </div>
            </main>
        </>
    )
}
export default Home