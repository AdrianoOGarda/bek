import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import Divider from "../components/general/divider.js"
import useWindowSize from "../hooks/useWindowSize"
import Hoteles from "../images/proyectosPage/Hoteles.png"
import Bares from "../images/proyectosPage/Bares.png"
import Casas from "../images/proyectosPage/Casas.png"
import Centros from "../images/proyectosPage/Centros.png"
import Condominios from "../images/proyectosPage/Condominios.png"
import Exteriores from "../images/proyectosPage/Exteriores.png"
import Jardines from "../images/proyectosPage/Jardines.png"
import Restaurantes from "../images/proyectosPage/Restaurantes.png"
import Terrazas from "../images/proyectosPage/Terrazas.png"
import { height } from "dom-helpers";

const FirstDiv = styled.div`
    display: flex;
    justify-content: center;
`

const HotelesDiv = styled.div`
    background-image: url(${Hoteles});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;
    margin-bottom: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        left: 2vw;
        top: 1.5vw;
    }
`

const BaresDiv = styled.div`
    background-image: url(${Bares});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        right: 4vw;
        bottom: 1.5vw;
    }
`

const RestaurantesDiv = styled.div`
    background-image: url(${Restaurantes});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 35vw;
    height: 45vw;
    margin-bottom: 1vw;
    margin-left: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        left: 2vw;
        bottom: 1.5vw;
    }
`

const CondominiosDiv = styled.div`
    background-image: url(${Condominios});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 35vw;
    height: 45vw;
    margin-bottom: 1vw;
    margin-right: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        left: 2vw;
        top: 1.5vw;
    }
`

const CentrosDiv = styled.div`
    background-image: url(${Centros});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        right: 4vw;
        bottom: 1.5vw;
        width: 20vw;
        text-align: right;
    }
`

const JardinesDiv = styled.div`
    background-image: url(${Jardines});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;
    margin-bottom: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        right: 4vw;
        top: 1.5vw;
    }
`

const CasasDiv = styled.div`
    background-image: url(${Casas});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;
    margin-bottom: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        left: 2vw;
        top: 1.5vw;
    }
`

const ExterioresDiv = styled.div`
    background-image: url(${Exteriores});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 45vw;
    height: 22vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        right: 4vw;
        bottom: 1.5vw;
    }
`

const TerrazasDiv = styled.div`
    background-image: url(${Terrazas});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 35vw;
    height: 45vw;
    margin-bottom: 1vw;
    margin-left: 1vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 2.8vw;
        left: 2vw;
        top: 1.5vw;
    }
`

const HotelesDivMob = styled.div`
    background-image: url(${Hoteles});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
    }
`
const BaresDivMob = styled.div`
    background-image: url(${Bares});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
    }
`
const RestaurantesDivMob = styled.div`
    background-image: url(${Restaurantes});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100vw;
    height: 130vw;
    margin-bottom: 4vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        left: 6vw;
        top: 6vw;
    }
`
const JardinesDivMob = styled.div`
    background-image: url(${Jardines});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
    }
`
const CentrosDivMob = styled.div`
    background-image: url(${Centros});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        width: 50vw;
    }
`
const CondominiosDivMob = styled.div`
    background-image: url(${Condominios});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100vw;
    height: 130vw;
    margin-bottom: 4vw;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        left: 6vw;
        top: 6vw;
    }
`
const CasasDivMob = styled.div`
    background-image: url(${Casas});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        width: 50vw;
    }
`
const ExterioresDivMob = styled.div`
    background-image: url(${Exteriores});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vw;
    margin-bottom: 3.5vw;
    display: flex;
    align-items: center;
    padding-left: 6vw;

    p {
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        width: 50vw;
    }
`
const TerrazasDivMob = styled.div`
    background-image: url(${Terrazas});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100vw;
    height: 130vw;
    margin-bottom: 0;

    p {
        position: absolute;
        color: white;
        font-family: 'G Bold';
        font-size: 8.3vw;
        left: 6vw;
        top: 6vw;
    }
`

const Proyectos = () => {
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
            <Divider text='Proyectos'/>
            
            <FirstDiv>
                <div>
                    <HotelesDiv>
                        <p>Hoteles</p>
                    </HotelesDiv>
                    <BaresDiv>
                        <p>Bares</p>
                    </BaresDiv>
                </div>
                <div>
                    <RestaurantesDiv>
                        <p>Restaurantes</p>
                    </RestaurantesDiv>
                </div>
            </FirstDiv>
            <FirstDiv>
                <div>
                    <CondominiosDiv>
                        <p>Condominios</p>
                    </CondominiosDiv>
                </div>
                <div>
                    <JardinesDiv>
                        <p>Jardines</p>
                    </JardinesDiv>
                    <CentrosDiv>
                        <p>Centros Comerciales</p>
                    </CentrosDiv>
                </div>
            </FirstDiv>
            <FirstDiv>
                <div>
                    <CasasDiv>
                        <p>Casas</p>
                    </CasasDiv>
                    <ExterioresDiv>
                        <p>Exteriores</p>
                    </ExterioresDiv>
                </div>
                <div>
                    <TerrazasDiv>
                        <p>Terrazas</p>
                    </TerrazasDiv>
                </div>
            </FirstDiv>
            <div style={{height: '5vw'}}></div>
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
            <Divider text='Proyectos'/>
            <HotelesDivMob>
                <p>Hoteles</p>
            </HotelesDivMob>
            <BaresDivMob>
                <p>Bares</p>
            </BaresDivMob>
            <RestaurantesDivMob>
                <p>Restaurantes</p>
            </RestaurantesDivMob>
            <JardinesDivMob>
                <p>Jardines</p>
            </JardinesDivMob>
            <CentrosDivMob>
                <p>Centros Comerciales</p>
            </CentrosDivMob>
            <CondominiosDivMob>
                <p>Condominios</p>
            </CondominiosDivMob>
            <CasasDivMob>
                <p>Casas</p>
            </CasasDivMob>
            <ExterioresDivMob>
                <p>Exteriores</p>
            </ExterioresDivMob>
            <TerrazasDivMob>
                <p>Terrazas</p>
            </TerrazasDivMob>
        </Layout>
        </>
        )}
        </>
    ) :
    (
        null
    )
}

export default Proyectos
