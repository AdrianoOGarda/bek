import React, {useState} from "react"
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import "../../css/header/style.css"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize"
import Logo from "../../images/mobileHeader/Logo.png"
import {Link} from "gatsby"

const DesktopHeader = styled.header`
    width: 100vw;
    box-shadow: ${({nav}) => (nav ? "0" : "0 0 5px 0 gray")};
    overflow: hidden;
    height: 20vw;
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
    width: 2.3vw;
    height: 3vw; 
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    top: 10%;
    left: 5%;
    padding-top: .5%;
    padding-bottom: .6%;

    div {
        width: 2.3vw; 
        height: .2vw;
        background: white; 
        border-radius: 5px; 
        transform-origin: 1px;
        position: relative;
    }

    @media only screen and (max-width: 480px) {
        width: 8vw;
        height: 8.5vw;
        top: 5vw;
        left: 85%;

        div {
            background: #3A3D4C;
            width: 7vw;
            height: .5vw;
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
    height: 20vw;
    background-color: #E0D5CAFC;
    padding-left: 7%;
    padding-top: 2vw;

    ul {
        padding: 0 0 0 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
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
        line-height: 3vw;
    }

    li div p {
        text-decoration: none;
        color: #3D3F4D;
        font-family: 'G Light';
        font-size: 2.5vw;
    }

    @media only screen and (max-width: 480px) {
        top: 15vw;
        width: 70vw;
        padding-left: 10%;
        padding-top: 8%;
        min-height: 70vh;

        li p {
            font-size: 7.5vw;
            line-height: 10vw;
        }

        li div p {
            font-size: 7.5vw;
        }
    }
`

const UnorderedList = styled.li`
    position: relative;

    li p:nth-child(4) {
        cursor: pointer;
    }

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
        <Carousel fade controls={false} >
            <Carousel.Item>
                <div className='carousel-item-div'> 
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-two'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-three'>
                    <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MenuIcon>
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
                        <CloseOutlined nav={nav} onClick={() => {setNav(!nav);}} className='close-outlined-antd'/>
                    </CloseDiv>
                </li>
            </UnorderedList>
        </MenuLinks>
    : null}
        </>
    ) : (
        <>
        <MobileHeader>  
            <div>
                <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuIcon>
                <img src={Logo} alt="BEK-Logo" className='mobile-header-logo'/>
            </div>
        </MobileHeader>

        <div nav={nav}>
        <Carousel fade controls={false} >
            <Carousel.Item>
                <div className='carousel-item-div'> 
                    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-two'>
                    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item-div-three'>
                    
                </div>
            </Carousel.Item>
        </Carousel>
        </div>

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
