import React, {useState} from "react"
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel';
import { DownOutlined } from '@ant-design/icons';
import "../../css/header/style.css"
import "../../css/typography.css"

const MobileHeader = styled.header`
    width: 100vw;
    box-shadow: ${({nav}) => (nav ? "0" : "0 0 5px 0 gray")};
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
`

const MobileMenuLinks = styled.nav`
    position: absolute;
    z-index: 9;
    top: 0;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
    display: flex;
    width: 30vw;
    background-color: #E0D5CAFC;

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
        font-size: 2vw;
    }
`

const Header = () => {
    const [nav, setNav] = useState(false)
    const [productsNav, setProductsNav] = useState(false)

    return (
        <>
        <MobileHeader nav={nav}>
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
        </MobileHeader>

        {nav ? 
        <MobileMenuLinks nav={nav}>
            <ul>
                <li>
                    <p>Home</p>
                    <p>Líneas</p>
                    <p>Proyectos</p>
                    <p productsNav={productsNav} onClick={() => setProductsNav(!productsNav)}>Productos<DownOutlined className='down-outlined-style'/></p>
                        {productsNav ? 
                            <nav productsNav={productsNav} className="living-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                    }}>Producto</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                    }}>Producto2</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                    }}>Producto3</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                    }}>Credenzas</li>
                                </ul>
                            </nav>
                        : null}
                    <p>Contacto</p>
                </li>
        </ul>

    <div style={{width: '20vw'}}>
        <p nav={nav} onClick={() => {setNav(!nav);}}>x</p>
    </div>
    
</MobileMenuLinks>
: null}
    </>
    )
}

export default Header
