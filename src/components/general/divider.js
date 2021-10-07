import * as React from "react"
import styled from "styled-components"
import Logo from "../../images/mobileHeader/Logo.png"
import useWindowSize from "../../hooks/useWindowSize"

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 5vw;

    p {
        font-family: 'G Medium';
        color: #3D3F4D;
        font-size: 2.5vw;
    }
    div {
        border-bottom: 2px solid #3D3F4D;
        width: 55vw;
        height: 2px;
    }
    img {
        width: 10vw;
    }
`

const MainMob = styled.div`
    display: flex;
    justify-content: center;
    padding: 8vw 0 3vw 0;

    p {
        font-family: 'G Medium';
        font-size: 8vw;
        color: #3D3F4D;
    }
`

const Divider = (props) => {
    const windowSize = useWindowSize();

    return (
        <>
        {windowSize > 480 ? (
             <Main>
                <p>{props.text}</p>
                <div></div>
                <img src={Logo} alt="Logo-BEK" />
            </Main>
        ) : (
            <MainMob>
                <p>{props.text}</p>
            </MainMob>        
        )}
        </>
    )
}

export default Divider
