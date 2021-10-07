import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import Divider from "../components/general/divider.js"
import useWindowSize from "../hooks/useWindowSize"
import Mapa from "../images/contacto/Mapa.jpg"
import Loc from "../images/contacto/Loc.png"
import Tel from "../images/contacto/Tel.png"
import Mail from "../images/contacto/Mail.png"

const FirstDiv = styled.div`
    display: flex;

    img{
        width: 50vw;
    }
    .green {
        background-color: #64816F;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
    }
    .green h2 {
        font-family: 'G Book';
        font-size: 3vw;
        width: 20vw;
        margin-top: 3vw;
        margin-bottom: 2vw;
    }
    .green span {
        font-family: 'G Bold';
    }
    .green img {
        width: 2vw;
        margin-right: 2vw;
    }
    .green div {
        width: 50vw;
        margin-bottom: 2vw;
        margin-left: 15vw;
    }
    a {
        color: white;
        text-decoration: none;
        font-family: 'G Book';
        font-size: 1.3vw;
        width: 25vw;
    }
    .address-div {
        display: flex;
        align-items: center;
    }
`

const SecondDiv = styled.div`
display: flex;

img{
    width: 50vw;
}
.orange {
    background-color: #B76D51;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
}
.orange h2 {
    font-family: 'G Book';
    font-size: 3vw;
    width: 20vw;
    margin-top: 3vw;
    margin-bottom: 2vw;
}
.orange span {
    font-family: 'G Bold';
}
.orange img {
    width: 2vw;
    margin-right: 2vw;
}
.orange div {
    width: 50vw;
    margin-bottom: 2vw;
    margin-left: 15vw;
}
a {
    color: white;
    text-decoration: none;
    font-family: 'G Book';
    font-size: 1.3vw;
    width: 25vw;
}
.address-div {
    display: flex;
    align-items: center;
}
`

const FirstDivMob = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img{
    width: 100vw;
}
.orange-mob {
    background-color: #B76D51;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vw;
}
.orange-mob h2 {
    font-family: 'G Book';
    font-size: 8vw;
    margin-top: 3vw;
    width: 90vw;
    text-align: center;
    margin-bottom: 4vw;
}
.orange-mob span {
    font-family: 'G Bold';
}
.orange-mob img {
    width: 6vw;
    margin-right: 2vw;
}
.orange-mob div {
    width: 100vw;
    margin-bottom: 2vw;
    margin-left: 15vw;
}
a {
    color: white;
    text-decoration: none;
    font-family: 'G Book';
    font-size: 4vw;
}
.address-div {
    display: flex;
    align-items: center;
}
.green-mob {
    background-color: #64816F;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vw;
}
.green-mob h2 {
    font-family: 'G Book';
    font-size: 8vw;
    margin-top: 3vw;
    width: 90vw;
    text-align: center;
    margin-bottom: 4vw;
}
.green-mob span {
    font-family: 'G Bold';
}
.green-mob img {
    width: 6vw;
    margin-right: 2vw;
}
.green-mob div {
    width: 100vw;
    margin-bottom: 2vw;
    margin-left: 15vw;
}
`

const Contacto = () => {
    const windowSize = useWindowSize();
    const [hasMounted, setHasMounted] = useState(false) 

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return hasMounted ? (
        <>
        {windowSize > 480 ? (
            <>
        <Helmet>
            <title>BEK</title>
            <meta name="description" content="Descripción BEK" />
            <link rel="canonical" href="http://bek.com/" />
            <meta charset="UTF-8" />
            <meta name="author" content="Adriano Ortiz Garda" />
            <meta name="keywords" content="Muebles, BEK" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet> 
        <Layout>
            <Divider text='Contacto'/>
            <FirstDiv>
                <div className='green'>
                    <h2>Muebles <span>BEK Edo. de Mex</span></h2>
                    <div>
                        <img src={Mail} alt="mail" />
                        <a href="">ventas@bek.mx</a>
                    </div>
                    <div>
                        <img src={Tel} alt="Tel" />
                        <a href="">55 8548 2303</a>
                    </div>
                    <div className='address-div'>
                        <img src={Loc} alt="Tel" />
                        <a href="" id='address'>Calle 1 #4, Col. Alce Blanco, Naucalpan Edo. de Mex, 53370</a>
                    </div>
                </div>
                <img src={Mapa} alt="mapa" />
            </FirstDiv>
            <SecondDiv>
                <img src={Mapa} alt="mapa" />
                <div className='orange'>
                    <h2>Muebles <span>BEK Cuernavaca</span></h2>
                    <div>
                        <img src={Mail} alt="mail" />
                        <a href="">ventas@bek.mx</a>
                    </div>
                    <div>
                        <img src={Tel} alt="Tel" />
                        <a href="">55 8548 2303</a>
                    </div>
                    <div className='address-div'>
                        <img src={Loc} alt="Tel" />
                        <a href="" id='address'>Av. Diana 10, Delicias, 62330 Cuernavaca, Morelos</a>
                    </div>
                </div>
            </SecondDiv>
        </Layout>
        </>
        ) : (
<>
        <Helmet>
            <title>BEK</title>
            <meta name="description" content="Descripción BEK" />
            <link rel="canonical" href="http://bek.com/" />
            <meta charset="UTF-8" />
            <meta name="author" content="Adriano Ortiz Garda" />
            <meta name="keywords" content="Muebles, BEK" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet> 
        <Layout>
            <Divider text='Contacto'/>
            <FirstDivMob>
                <img src={Mapa} alt="mapa" />
                <div className='green-mob'>
                    <h2>Muebles <span>BEK Edo. de Mex</span></h2>
                    <div>
                        <img src={Mail} alt="mail" />
                        <a href="">ventas@bek.mx</a>
                    </div>
                    <div>
                        <img src={Tel} alt="Tel" />
                        <a href="">55 8548 2303</a>
                    </div>
                    <div className='address-div'>
                        <img src={Loc} alt="Tel" />
                        <a href="" id='address'>Calle 1 #4, Col. Alce Blanco, Naucalpan Edo. de Mex, 53370</a>
                    </div>
                </div>
                <img src={Mapa} alt="mapa" />
                <div className='orange-mob'>
                    <h2>Muebles <span>BEK Cuernavaca</span></h2>
                    <div>
                        <img src={Mail} alt="mail" />
                        <a href="">ventas@bek.mx</a>
                    </div>
                    <div>
                        <img src={Tel} alt="Tel" />
                        <a href="">55 8548 2303</a>
                    </div>
                    <div className='address-div'>
                        <img src={Loc} alt="Tel" />
                        <a href="" id='address'>Av. Diana 10, Delicias, 62330 Cuernavaca, Morelos</a>
                    </div>
                </div>
            </FirstDivMob>
        </Layout>
        </>
        )}
        </>
    ) : (
        null
    )
}

export default Contacto
