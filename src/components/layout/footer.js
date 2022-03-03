import * as React from "react"
import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import Contacto from "../../images/footer/Contacto.png"
import Whats from "../../icons/landing/Whats.svg"
import Face from "../../icons/landing/Face.svg"
import Insta from "../../icons/landing/Insta.svg"
import { Link } from "gatsby"

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3D3F4D;
    color: white;

    p:nth-child(1) {
        font-family: 'G Bold';
        font-size: 2vw;
        margin-top: 4vw;
    }
    p:nth-child(2) {
        font-size: 1.2vw;
        font-family: 'G Book';
        width: 30vw;
        text-align: center;
        margin-bottom: 5vw;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45vw;
    }
    form > div {
        display: flex;
        justify-content: space-between;
        width: 45vw;
        margin-bottom: 2vw;
    }
    label {
        font-family: 'G Book';
        font-size: 1.2vw;
        margin-bottom: -3vw;
    }
    input {
        background-color: #3D3F4D;
        border: none;
        border-bottom: 2px solid white;
        color: white;
        font-family: 'G Book';
        width: 13vw;
    }
    input:focus {
        outline: none;
    }
    form label:nth-child(2) {
        margin-bottom: -1.6vw;
    }
    #form-product {
        margin-bottom: 3vw;
    }
    #form-submit {
        border: 1px solid #707070;
        padding: .6vw 1vw 1vw 1vw;
        width: 7.5vw;
        height: 3vw;
        margin-bottom: 3vw;
        font-size: 1.3vw;
    }

    @media only screen and (max-width: 480px) {

    p:nth-child(1) {
        font-size: 6vw;
        margin-top: 10vw;
    }
    p:nth-child(2) {
        font-size: 4.5vw;
        width: 90vw;
        margin-bottom: 10vw;
    }
    form {
        width: 85vw;
        align-items: flex-start;
    }
    label {
        font-size: 4.5vw;
        margin-bottom: -5vw;
    }
    input {
        border-bottom: 2px solid white;
        width: 80vw;
        font-size: 4vw;
        margin-bottom: 7vw;
    }
    form label:nth-child(2) {
        margin-bottom: -1.6vw;
    }
    
    #form-submit {
        border: 2px solid #707070;
        padding: 1vw 1vw 1vw 1vw;
        width: 30vw;
        height: 15vw;
        margin-bottom: 6vw;
        font-size: 4.5vw;
        align-self: center;
        margin-top: 5vw;
    }
    }
`

const SecondDiv = styled.div`
    background-image: url(${Contacto});
    background-size: cover;
    display: flex;
    padding: 5vw 0 5vw 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(1) {
        background-color: #6C9FB4;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .terms-main-div {
        display: flex;
        color: white;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 2vw;
    }
    
    > div:nth-child(1) > p:nth-child(1) {
        font-family: 'G Bold';
        font-size: 1.8vw;
        margin-top: 1.5vw;
        margin-bottom: 2vw;
        color: white;
    }
    .text-footer-div {
        font-family: 'G Medium';
        font-size: .9vw;
    }
    .text-footer-div p, .text-footer-div a {
        margin-bottom: .1vw;
        color: white;
        text-decoration: none;
    }
    .footer-social-div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 1.5vw;
    }
    .footer-social-div img {
        width: 1.7vw;
    }
    #facebook-footer-icon {
        width: .9vw;
    }
    .footer-separator {
        border-bottom: 2px solid white;
        width: 3vw;
        margin: .8vw 0 .8vw 0;
    }
`

const SecondDivMob = styled.div`
    background-color: #6C9FB4;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        font-family: 'G Bold';
        font-size: 8vw;
        margin: 10vw 0 12vw 0;
    }
    .text-footer-div-mob {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10vw;
    }
    .text-footer-div-mob p, 
    .text-footer-div-mob a {
        margin-bottom: 1.5vw;
        font-size: 5vw;
        color: white;
        text-decoration: none;
        font-family: 'G Medium';
    }
    .footer-separator-mob {
        border-bottom: 3px solid white;
        width: 25%;
        margin: 4vw 0 4.8vw 0;
    }
    .footer-social-div-mob {
        margin-top: 4vw;
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
`

const ThirdDiv = styled.div`
    img {
        width: 100vw;
    }
`

const Footer = () => {
    const windowSize = useWindowSize();

    return (
        <>
        <FirstDiv>
            <p>¿Buscas una cotización?</p>
            <p>Deja tu contacto aquí para que un asesor se ponga en contacto contigo lo antes posible.</p>
            <form action="https://formspree.io/f/xleakapl" method="POST">
                {windowSize > 480 ? (
                <div>
                    <div>
                        <label for="Nombre">Nombre</label><br />
                        <input type="text" id="form-name" name="Nombre" />
                    </div>
                    <div>
                        <label for="Teléfono">Teléfono</label><br />
                        <input type="text" id="form-phone" name="Teléfono" />
                    </div> 
                </div>
                ) : (
                <>
                <label for="Nombre">Nombre</label><br />
                <input type="text" id="form-name" name="Nombre" />
                <label for="Teléfono">Teléfono</label><br />
                <input type="text" id="form-phone" name="Teléfono" />
                </>
                )}
                <input type="submit" value='Enviar' id="form-submit" />
            </form>
        </FirstDiv>
        {windowSize > 480 ? (
            <SecondDiv>
                <div>
                <p>Visítanos</p>
                <div className='terms-main-div'>
                    <div className='text-footer-div'>
                        <p><Link to="/aviso-de-privacidad">Aviso de privacidad</Link></p>
                        <p>Términos y condiciones</p>
                        <p><Link to="/cookies">Cookies</Link></p>
                        <div className='footer-social-div'>
                            <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="facebook-icon" id='facebook-footer-icon' /></a>
                            <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                            <a href="https://api.whatsapp.com/send?phone=5215559895595" target="_blank"><img src={Whats} alt="whats-icon" /></a>
                        </div>
                    </div>
                    <div className='text-footer-div'>
                        <a href="mailto:ventas@bek.mx">ventas@bek.mx</a>
                        <p>bek.mx</p>
                        <a href="tel:+525585482303" target="_blank">55 8548 2303</a>
                    </div>
                    <div className='text-footer-div'>
                        <a href="https://goo.gl/maps/YZFtjpfiRNR2Mz8x5" target="_blank">
                            <p>Calle 1 #4,</p>
                            <p>Col. Alce Blanco, Naucalpan</p>
                            <p>Edo. de Mex. 53370</p>
                        </a>
                        <div className='footer-separator'></div>
                        <a href="https://goo.gl/maps/4Q8YfgTvkjf46Z3z7" target="_blank">
                            <p>Av. Diana 10,</p>
                            <p>Delicias, 62330</p>
                            <p>Cuernavaca, Morelos</p>
                        </a>
                    </div>
                </div>
                </div>
            </SecondDiv>
        ) : (
            <>
            <SecondDivMob>
                <p>Visítanos</p>
                <div className='text-footer-div-mob'>
                <a href="https://goo.gl/maps/YZFtjpfiRNR2Mz8x5" target="_blank">
                    <p>Calle 1 #4,</p>
                    <p>Col. Alce Blanco, Naucalpan</p>
                    <p>Edo. de Mex. 53370</p>
                </a>
                    <div className='footer-separator-mob'></div>
                    <a href="https://goo.gl/maps/4Q8YfgTvkjf46Z3z7" target="_blank">
                        <p>Av. Diana 10,</p>
                        <p>Delicias, 62330</p>
                        <p>Cuernavaca, Morelos</p>
                    </a>
                </div>
                <div className='text-footer-div-mob'>
                    <a href="mailto:ventas@bek.mx">ventas@bek.mx</a>
                    <p>bek.mx</p>
                    <a href="tel:+525585482303" target="_blank">55 8548 2303</a>
                </div>
                <div className='text-footer-div-mob'>
                    <p><Link to="/aviso-de-privacidad">Aviso de privacidad</Link></p>
                    <p>Términos y condiciones</p>
                    <p><Link to="/cookies">Cookies</Link></p>
                    <div className='footer-social-div-mob'>
                        <a href="https://m.facebook.com/BekOutdoorsMx" target="_blank"><img src={Face} alt="facebook-icon" id='facebook-footer-icon-mob' /></a>
                        <a href="https://instagram.com/bek.outdoors?utm_medium=copy_link" target="_blank"><img src={Insta} alt="insta-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5215559895595" target="_blank"><img src={Whats} alt="whats-icon" /></a>
                    </div>
                </div>
            </SecondDivMob>
            <ThirdDiv>
                <img src={Contacto} alt="contact-photo" />
            </ThirdDiv>
            </>
        )}
        </>
    )
}

export default Footer
