import React, {useEffect, useState} from 'react'
import '../../styles/gallery.css'

import paisaje1 from '../../assets/paisaje1.jpg'
import paisaje2 from '../../assets/paisaje2.jpg'
import paisaje3 from '../../assets/paisaje3.jpg'
import paisaje4 from '../../assets/paisaje4.jpg'


function Gallery(){

    //useEffect que me diga la ruta completa de la ubicación del archivo
    useEffect(() => {
        console.log(window.location.href)
    }, [])

    //Funcion que escriba por consola a que ruta llego usando src=../assets/ttt.png
    const [ruta, setRuta] = useState('')
    useEffect(() => {
        console.log(ruta)
    }, [ruta])
    
    return (
        <>
        <div className="gallery-container">
            <div>
                <meta charSet="UTF-8" />
                <title>Gallery 04</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" />
                <div className="gallery">
                <article className="card">
                    <figure>
                    <img src={paisaje3} alt="TicTacToe" />
                    <figcaption>
                        <h3>TicTacToe</h3>
                    </figcaption>
                    </figure>
                </article>
                <article className="card">
                    <figure>
                    <img src={paisaje1} alt="Lavender Field" />
                    <figcaption>
                        <h3>Lavender Field</h3>
                    </figcaption>
                    </figure>
                </article>
                <article className="card">
                    <figure>
                    <img src={paisaje2} alt="Wooden Bridge" />
                    <figcaption>
                        <h3>Wooden Bridge</h3>
                    </figcaption>
                    </figure>
                </article>
                <article className="card">
                    <figure>
                    <img src={paisaje4} alt="Wooden Bridge" />
                    <figcaption>
                        <h3>Wooden Bridge</h3>
                    </figcaption>
                    </figure>
                </article>

                

                </div>            
            </div> 
        </div>
        </>
    );
}

export default Gallery;
