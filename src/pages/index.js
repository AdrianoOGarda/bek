import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout/indexLanding"
import ImageSlider from "../components/slider";
import { IMAGES } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import LandingGif from "../gifs/landing.gif"
import LandingMob from "../gifs/landingMob.gif"
import QuienesGif from "../gifs/quienes.gif"
import QuienesGifMob from "../gifs/quienesMob.gif"
import Exterior from "../images/catLand/Exterior.png"
import Bancos from "../images/catLand/Bancos.png"
import Columpios from "../images/catLand/Columpios.png"
import Deco from "../images/catLand/Deco.png"
import Sombrillas from "../images/catLand/Sombrillas.png"
import Download from "../icons/landing/Download.png"
import Hotel from "../images/proyectos/Hotel.png"
import Condominio from "../images/proyectos/Condominio.png"
import ExteriorPro from "../images/proyectos/Exterior.png"
import useWindowSize from "../hooks/useWindowSize"
import BancosPdf from "../pdfs/Bancos.pdf"
import ColumpiosPdf from "../pdfs/Columpios.pdf"
import DecoracionPdf from "../pdfs/Decoración.pdf"
import ExteriorPdf from "../pdfs/Exterior.pdf"
import SombrillasPdf from "../pdfs/Sombrillas.pdf"
import Puntos from "../images/general/Puntos.png"

const FirstDiv = styled.div`
  position: relative;
  color: white;
  font-family: 'G Book';

  img {
    width: 100vw;
  }
  > div {
    display: flex;
    position: absolute;
    justify-content: space-between;
    width: 41vw;
    right: 6vw;
    top: 5vw;
  }
  p {
    width: 35vw;
    font-size: 1.3vw;
  }
  span {
    font-family: 'G Bold';
  }
  h2 {
    font-size: 3vw;
  }
  #first-separator {
    height: 20vw;
    width: 1vw;
    border-right: 2px solid white;
  }

  @media only screen and (max-width: 480px) {
    > div {
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    right: 0;
    top: 70vw;
  }
  p {
    width: 80vw;
    font-size: 4.5vw;
  }
  span {
    font-family: 'G Bold';
  }
  h2 {
    font-size: 8vw;
  }
  #first-separator {
    height: 1vw;
    width: 40vw;
    border-right: 0;
    border-bottom: 2px solid white;
    margin-bottom: 7vw;
  }
  >div div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  }
`

const SecondDiv = styled.div`
  display: flex;
  color: white;

  div:nth-child(1) {
    background-color: #7D9EB1;
    width: 50vw;
    padding: 5vw;
  }
  img{
    width: 50vw;
  }
  h2 {
    font-family: 'G Bold';
    font-size: 2.5vw;
    width: 20vw;
    margin-bottom: 1.5vw;
  }
  span {
    font-family: 'G Book';
  }
  p {
    font-family: 'G Book';
    font-size: 1.2vw;
    margin-bottom: .1vw;
    line-height: 1.8vw;
  }
  h3 {
    font-family: 'G Bold';
    font-size: 1.8vw;
    margin: 1.5vw 0 .5vw 0;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;

    div:nth-child(2) {
      background-color: #7D9EB1;
      width: 100vw;
      padding: 13vw 8vw 13vw 8vw;
    }
    img {
      width: 100vw;
    }
    h2 {
      font-family: 'G Bold';
      font-size: 8vw;
      width: 70vw;
      margin-bottom: 1.5vw;
    }
    span {
      font-family: 'G Book';
    }
    p {
      font-family: 'G Book';
      font-size: 5vw;
      margin-bottom: .1vw;
      line-height: 7vw;
    }
    h3 {
      font-family: 'G Bold';
      font-size: 6.5vw;
      margin: 5vw 0 2vw 0;
    }
  }
`

const ThirdDiv = styled.div`
  padding: 5vw 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
      font-family: 'G Bold';
      margin-bottom: 3vw;
      font-size: 2.7vw;
      color: #3D3F4D;
    }
    .first-catal-section {
      padding: 0 7.5vw 0 7.5vw;
      display: flex;
      justify-content: space-between;
      width: 100vw;
    }
    .exterior-div {
      background-image: url(${Exterior});
      background-size: cover;
      width: 27vw;
      height: 30vw;
      position: relative;
    }
    .sombrillas-div {
      background-image: url(${Sombrillas});
      background-size: cover;
      width: 27vw;
      height: 30vw;
      position: relative;
    }
    .columpios-div {
      background-image: url(${Columpios});
      background-size: cover;
      width: 27vw;
      height: 30vw;
      position: relative;
    }
    .catal-absolute-div {
      position: absolute;
      bottom: 0;
      color: white;
    }
    .catal-absolute-div img {
      width: 3vw;
      height: 3vw;
    }
    .catal-inside-div {
      display: flex;
      justify-content: space-between;
      width: 25vw;
      align-items: center;
      padding: 0 0 .2vw 1.5vw;
    }
    .catal-absolute-div h3 {
      font-family: 'G Bold';
      font-size: 2.5vw;
      margin-bottom: 0;
    }
    .catal-absolute-div p {
      font-family: 'G Book';
      font-size: 1.5vw;
      margin: 0 0 0 0;
    }
    .second-catal-section {
      padding: 1.9vw 7.5vw 0 7.5vw;
      display: flex;
      justify-content: space-between;
      width: 100vw;
    }
    .deco-div {
      background-image: url(${Deco});
      background-size: cover;
      width: 41.4vw;
      height: 30vw;
      position: relative;
    }
    .bancos-div {
      background-image: url(${Bancos});
      background-size: cover;
      width: 41.4vw;
      height: 30vw;
      position: relative;
    }
    .catal-inside-div-two {
      display: flex;
      justify-content: space-between;
      width: 39vw;
      align-items: center;
      padding: 0 0 .2vw 1.5vw;
    }
`

const ThirdDivMob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6vw;

    h2 {
      font-family: 'G Bold';
      margin-bottom: 6vw;
      font-size: 8vw;
      color: #3D3F4D;
    }
    .exterior-div-mob {
      background-image: url(${Exterior});
      background-size: cover;
      background-position: center;
      width: 100vw;
      height: 75vw;
      position: relative;
    }
    .sombrillas-div-mob {
      background-image: url(${Sombrillas});
      background-size: cover;
      background-position: center;
      width: 100vw;
      height: 75vw;
      position: relative;
    }
    .columpios-div-mob {
      background-image: url(${Columpios});
      background-size: cover;
      width: 100vw;
      height: 75vw;
      position: relative;
      background-position: center;
    }
    .bancos-div-mob {
      background-image: url(${Bancos});
      background-size: cover;
      width: 100vw;
      height: 75vw;
      position: relative;
      background-position: center;
    }
    .deco-div-mob {
      background-image: url(${Deco});
      background-size: cover;
      width: 100vw;
      height: 75vw;
      position: relative;
      background-position: center;
    }
    .catal-absolute-div-mob {
      position: absolute;
      bottom: 0;
      color: white;
    }
    .catal-absolute-div-mob img {
      width: 11vw;
      height: 11vw;
    }
    .catal-inside-div-mob {
      display: flex;
      justify-content: space-between;
      width: 95vw;
      align-items: center;
      padding: 0 0 1vw 1.5vw;
    }
    .catal-absolute-div-mob h3 {
      font-family: 'G Bold';
      font-size: 7vw;
      margin-bottom: 0;
    }
    .catal-absolute-div-mob p {
      font-family: 'G Book';
      font-size: 5.5vw;
      margin: 0 0 0 0;
    }
`

const GalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vw 0 0 0;

    h2 {
      font-family: 'G Bold';
      margin-bottom: 3vw;
      font-size: 2.7vw;
      color: #3D3F4D;
    }

    @media only screen and (max-width: 480px) {
      padding: 7vw 0 0 0;

      h2 {
      font-family: 'G Bold';
      margin-bottom: 6vw;
      font-size: 8vw;
      color: #3D3F4D;
    }
    }
`

const FourthDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 5vw 3vw 5vw;

  > div {
    width: 25vw;
    height: 35vw;
    position: relative;
  }
  > div:nth-child(1) {
      background-image: url(${ExteriorPro});
      background-size: cover;
      background-position: center;
      position: relative;
  }
  > div:nth-child(2) {
      background-image: url(${Hotel});
      background-size: cover;
      background-position: center;
      position: relative;
  }
  > div:nth-child(3) {
      background-image: url(${Condominio});
      background-size: cover;
      background-position: center;
      position: relative;
  }
  .proyectos-inside-div {
    color: white;
    position: absolute;
    bottom: 0;
    padding: 0 0 0 2vw;
  }
  p {
    font-family: 'G Book';
    font-size: 2vw;
  }
  h3 {
    font-family: 'G Bold';
    font-size: 2.3vw;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 0 0 0;
    padding-bottom: 0;

  > div {
    width: 100vw;
    height: 80vw;
    position: relative;
    margin-bottom: 5vw;
  }
  .proyectos-inside-div {
    top: 10vw;
    left: 5vw;
    padding: 0 0 0 2vw;
  }
  p {
    font-family: 'G Book';
    font-size: 8vw;
  }
  h3 {
    font-family: 'G Bold';
    font-size: 8vw;
    margin-bottom: 0;
  }
  }
`

const IndexPage = () => {
  const windowSize = useWindowSize();
  const [hasMounted, setHasMounted] = useState(false) 

    useEffect(() => {
        setHasMounted(true)
    }, [])

  return hasMounted ? (
    <>
      <Layout>
      <Helmet>
        <title>BEK</title>
        <meta name="description" content="Descripción BEK" />
        <link rel="canonical" href="http://bek.com/" />
        <meta charset="UTF-8" />
        <meta name="author" content="Adriano Ortiz Garda" />
        <meta name="keywords" content="Muebles, BEK" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <FirstDiv>
      {windowSize > 480 ? (
        <img src={QuienesGif} alt="quienes-gif" />
      ) : (
        <img src={QuienesGifMob} alt="quienes-gif" />
      ) }
        <div>
          <div id='first-separator'></div>
          <div>
            <h2><span>Quienes</span> Somos</h2>
            <p>Fabricamos muebles y accesorios vanguardistas que se ajustan perfectamente al diseño, esapcio, concepto y necesidades del cliente. Entre nuestras principales características se destaca la armonía que creamos con la textura y colores de nuestros muebles que van de la mano con el concepto de diseño que se requiera.</p>
          </div>
        </div>
      </FirstDiv>
      <SecondDiv>
        {windowSize > 480 ? (
          null
        ) : (
          <img src={LandingMob} alt="landing-gif" />        
        ) }
        <div>
          <h2>Nueva apertura <span>en Cuernavaca</span></h2>
          <p>Los mejores muebles para exteriores, ¡¡ahora más cerca de ti!!</p>
          <p>Adquiere en BEK, salas, comedores, camastros, sillas, bancas y todo lo que necesitas para tu hogar o negocio.</p>
          <h3>¡Te esperamos!</h3>
          <p>Av. Diana 10, Delicias, 62330, Cuernavaca, Morelos</p>
        </div>
        {windowSize > 480 ? (
          <img src={LandingGif} alt="landing-gif" />
        ) : (
          null        
        ) }
      </SecondDiv>
      {windowSize > 480 ? (
        <ThirdDiv>
        <h2>Catálogos</h2>
        <div className='first-catal-section'>

          <div className='exterior-div'>
            <div className='catal-absolute-div'>
              <div className='catal-inside-div'>
                <div>
                  <h3>Exterior</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={ExteriorPdf} target="_blank" ><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='sombrillas-div'>
            <div className='catal-absolute-div'>
              <div className='catal-inside-div'>
                <div>
                  <h3>Sombrillas</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={SombrillasPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div> 
          </div>

          <div className='columpios-div'>
            <div className='catal-absolute-div'>
              <div className='catal-inside-div'>
                <div>
                  <h3>Columpios</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={ColumpiosPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div> 
          </div>
        </div>
        <div>
        </div>
        
        <div className='second-catal-section '>
        <div className='bancos-div'>
            <div className='catal-absolute-div'>
              <div className='catal-inside-div-two'>
                <div>
                  <h3>Bancos</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={BancosPdf} target="_blank" ><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='deco-div'>
            <div className='catal-absolute-div'>
              <div className='catal-inside-div-two'>
                <div>
                  <h3>Decoración</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={DecoracionPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div> 
          </div>
        </div>
      </ThirdDiv>
        ) : (
      <ThirdDivMob>
        <h2>Catálogos</h2>
        <div className='exterior-div-mob'>
            <div className='catal-absolute-div-mob'>
              <div className='catal-inside-div-mob'>
                <div>
                  <h3>Exterior</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={ExteriorPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='sombrillas-div-mob'>
            <div className='catal-absolute-div-mob'>
              <div className='catal-inside-div-mob'>
                <div>
                  <h3>Sombrillas</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={SombrillasPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='columpios-div-mob'>
            <div className='catal-absolute-div-mob'>
              <div className='catal-inside-div-mob'>
                <div>
                  <h3>Columpios</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={ColumpiosPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='bancos-div-mob'>
            <div className='catal-absolute-div-mob'>
              <div className='catal-inside-div-mob'>
                <div>
                  <h3>Bancos</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={BancosPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>

          <div className='deco-div-mob'>
            <div className='catal-absolute-div-mob'>
              <div className='catal-inside-div-mob'>
                <div>
                  <h3>Decoración</h3>
                  <p>Descargar</p>
                </div>
                {/* <a href={DecoracionPdf} target="_blank"><img src={Download} alt="download-icon" /></a> */}
              </div>
            </div>  
          </div>
      </ThirdDivMob>       
        ) }
      <GalleryDiv>
        <h2>Galería</h2>
      </GalleryDiv>
      <ImageSlider images={IMAGES} slidesToShow={5} />
      <GalleryDiv>
        <h2>Nuestros Proyectos</h2>
      </GalleryDiv>
      <FourthDiv>
        <div>
          <div className='proyectos-inside-div'>
            <h3>Proyecto</h3>
            <p>Exterior</p>
          </div>
        </div>
        <div>
          <div className='proyectos-inside-div'>
            <h3>Proyecto</h3>
            <p>Hotel</p>
          </div>
        </div>
        <div style={{marginBottom: 0}}>
          <div className='proyectos-inside-div'>
            <h3>Proyecto</h3>
            <p>Condominio</p>
          </div>
        </div>
      </FourthDiv>
      <img src={Puntos} alt="mapa" style={{width: '100vw'}} />
      </Layout>
    </>
  ) : (
    null
  )
}

export default IndexPage
