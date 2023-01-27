import React, {useState} from "react"
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel';
import { CloseOutlined } from '@ant-design/icons';
import "../../css/header/landingHeader.css"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize"
import Logo from "../../images/mobileHeader/LogoWhite.png"
import Whats from "../../icons/landing/Whats.svg"
import Face from "../../icons/landing/Face.svg"
import Insta from "../../icons/landing/Insta.svg"
import { Link } from "gatsby"


const DesktopHeader = styled.header`
    width: 100vw;
    box-shadow: ${({nav}) => (nav ? "0" : "0 0 5px 0 gray")};
    overflow: hidden;
    height: 100vh;
`
const MobileHeader = styled.header`
    width: 100vw;
    overflow: hidden;
    height: 15vw;
`

const MenuIcon = styled.button`
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 50px; 
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    top: 10%;
    right: 5%;
    padding-top: 5px;
    padding-bottom: 6px;

    div {
        width: 35px; 
        height: 3px;
        background: white; 
        border-radius: 5px; 
        transform-origin: 1px;
        position: relative;
    }

    @media only screen and (max-width: 480px) {
        width: 8vw;
        height: 10vw;
        top: 5vw;
        left: 85%;

        div {
            background: white;
            width: 10vw;
            height: .8vw;
        }
    }
`

const MenuLinks = styled.nav`
    position: absolute;
    z-index: 9;
    top: 0;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
    display: flex;
    width: 30vw;
    height: 100vh;
    min-height: 800px;
    background-color: #E0D5CAFC;
    padding-left: 7%;
    padding-top: 5%;

    ul {
        padding: 0 0 0 5%;
        margin-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    li {
        list-style: none;
        padding-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #8C857E;
        font-family: 'L Bold';
        font-size: 5vw;
    }

    li p {
        text-decoration: none;
        color: #3D3F4D;
        font-family: 'G Light';
        font-size: 2.5vw;
    }

    li div p {
        text-decoration: none;
        color: #3D3F4D;
        font-family: 'G Light';
        font-size: 2.5vw;
    }

    @media only screen and (max-width: 480px) {
        top: 0vw;
        width: 70vw;
        padding-left: 10%;
        padding-top: 8%;

        li p {
            font-size: 7.5vw;
        }

        li div p {
            font-size: 7.5vw;
        }
    }
`

const UnorderedList = styled.li`
    position: relative;

    @media only screen and (max-width: 480px) {
        nav li {
            font-size: 5.5vw;
            margin-bottom: 2vw;
        }
    }
`

const CloseDiv = styled.div`
    position: absolute;
    top: -4vw;
    right: -7vw;

    @media only screen and (max-width: 480px) {
        right: -30vw;
    }
`

const Header = () => {
    const [nav, setNav] = useState(false)
    const [productsNav, setProductsNav] = useState(false)
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <>
        <DesktopHeader nav={nav}>
        <Carousel fade controls={false} className='carousel-desktop-version' >
            <Carousel.Item>
                <div className='carousel-item-div-landing'> 
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <div className='header-line'></div>
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div'>
                            <img src={Whats} alt="whats-icon" />
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-header-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-two-landing'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <div className='header-line'></div>
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div'>
                            <img src={Whats} alt="whats-icon" />
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-header-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-three-landing'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <div className='header-line'></div>
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div'>
                            <img src={Whats} alt="whats-icon" />
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-header-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </DesktopHeader>

        {nav ? 
        <MenuLinks nav={nav}>
            <UnorderedList>
                <li>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/catalogos'><p>Catálogos</p></Link>                    
                    <Link to='/proyectos'><p>Proyectos</p></Link>                    
                    <Link to='/contacto'><p>Contacto</p></Link>
                    <CloseDiv>
                        <CloseOutlined nav={nav} onClick={() => {setNav(!nav);}} className='close-outlined-antd-landing'/>
                    </CloseDiv>
                </li>
            </UnorderedList>
        </MenuLinks>
    : null}
        </>
    ) : (
        <>
        <DesktopHeader nav={nav}>
        <Carousel fade controls={false} className='carousel-mobile-version' >
            <Carousel.Item>
                <div className='carousel-item-div-landing'> 
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <img src={Logo} alt="mobile-logo" className='mobile-logo' />
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div-mobile'>
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-mobile-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                    <div className='mobile-circles-one'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='mobile-header-line'></div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-two-landing'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <img src={Logo} alt="mobile-logo" className='mobile-logo' />
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div-mobile'>
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-mobile-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                    <div className='mobile-circles-two'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='mobile-header-line'></div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-three-landing'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                    <img src={Logo} alt="mobile-logo" className='mobile-logo' />
                    <h2>Proyectos diseñados <span>a tu medida</span></h2>
                    <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank">
                        <div className='asesor-div-mobile'>
                            <p>¡Platica con un asesor!</p>
                        </div>
                    </a>
                    <div className='social-mobile-div'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="face-icon" /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215585482303" target="_blank"><img src={Whats} alt="whatsApp-icom" /></a>
                    </div>
                    <div className='mobile-circles-three'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='mobile-header-line'></div>
                </div>
            </Carousel.Item>
        </Carousel>
        </DesktopHeader>

        {nav ? 
        <MenuLinks nav={nav}>
            <UnorderedList>
                <li>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/catalogos'><p>Catálogos</p></Link>                    
                    <Link to='/proyectos'><p>Proyectos</p></Link>                    
                    <Link to='/contacto'><p>Contacto</p></Link>
                </li>
            </UnorderedList>
        </MenuLinks>
    : null}
        </>
)
}

export default Header
