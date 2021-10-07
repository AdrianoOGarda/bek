import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import Divider from "../components/general/divider.js"
import Card from "../components/catalogos/card.js"
import SpecialCard from "../components/catalogos/specialCard.js"
import Exterior from "../images/catLand/Exterior.png"
import Bancos from "../images/catLand/Bancos.png"
import Columpios from "../images/catLand/Columpios.png"
import Deco from "../images/catLand/Deco.png"
import Sombrillas from "../images/catLand/Sombrillas.png"
import useWindowSize from "../hooks/useWindowSize"

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
                <Card image={Exterior} color='#54826F' text='Exterior'/>
                <Card image={Sombrillas} color='#7D9EB1' text='Sombrillas'/>
            </CatDiv>
            <CatDiv>
                <Card image={Columpios} color='#3D3F4D' text='Columpios'/>
                <Card image={Bancos} color='#B76D51' text='Bancos'/>
            </CatDiv>
            <SpecialDiv>
                <SpecialCard image={Deco} color='#E0D5CA' text='Decoración' />
            </SpecialDiv>
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
            <Card image={Exterior} color='#54826F' text='Exterior'/>
            <Card image={Sombrillas} color='#7D9EB1' text='Sombrillas'/>
            <Card image={Columpios} color='#3D3F4D' text='Columpios'/>
            <Card image={Bancos} color='#B76D51' text='Bancos'/>
            <Card image={Deco} color='#E0D5CA' text='Decoración'/>
        </Layout>
        </>
        )}
        </>
    ) : (
        null
    )
}

export default Catalogos
