import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import Divider from "../components/general/divider.js"
import Card from "../components/catalogos/card.js"
import SpecialCard from "../components/catalogos/specialCard.js"
import Exterior from "../images/catLand/Exterior.png"
import Bancos from "../images/catLand/Bancos.png"
import Deco from "../images/catLand/Deco.png"
import Sombrillas from "../images/catLand/Sombrillas.png"
import useWindowSize from "../hooks/useWindowSize"
import BancosPdf from "../pdfs/Bancos.pdf"
import DecoracionPdf from "../pdfs/Decoración.pdf"
import ExteriorPdf from "../pdfs/Exterior.pdf"
import SombrillasPdf from "../pdfs/Sombrillas.pdf"
import InteriorPdf from "../pdfs/Interior.pdf"
import Interior from "../images/catalogos/Interior.png"

const CatDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 6vw 0 6vw;
    margin: 3vw 0 5vw 0;
`
const SpecialDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5vw;
`

const Catalogos = () => {
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
            <Divider text='Catálogos'/>
            <CatDiv>
                <Card image={Exterior} color='#54826F' text='Exterior' pdf={ExteriorPdf}/>
                <Card image={Sombrillas} color='#7D9EB1' text='Sombrillas' pdf={SombrillasPdf}/>
            </CatDiv>
            <CatDiv>
                <Card image={Bancos} color='#B76D51' text='Bancos' pdf={BancosPdf}/>
                <Card image={Deco} color='#E0D5CA' text='Decoración' pdf={DecoracionPdf}/>
            </CatDiv>
            <CatDiv>
                <SpecialCard image={Interior} color='#54826F' text='Interior' pdf={InteriorPdf}/>
            </CatDiv>
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
            <Divider text='Catálogos'/>
            <Card image={Exterior} color='#54826F' text='Exterior' pdf={ExteriorPdf}/>
            <Card image={Sombrillas} color='#7D9EB1' text='Sombrillas' pdf={SombrillasPdf}/>
            <Card image={Bancos} color='#B76D51' text='Bancos' pdf={BancosPdf}/>
            <Card image={Deco} color='#E0D5CA' text='Decoración' pdf={DecoracionPdf}/>
            <Card image={Interior} color='#54826F' text='Interior' pdf={InteriorPdf}/>
        </Layout>
        </>
        )}
        </>
    ) : (
        null
    )
}

export default Catalogos
