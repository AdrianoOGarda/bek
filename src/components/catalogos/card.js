import * as React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Download from "../../icons/landing/Download.png"


const Card = (props) => {
    const windowSize = useWindowSize();

    return (
        <>
        {windowSize > 480 ? (
             <div style={{display: 'flex', flexDirection: 'column'}}>
             <div style={{backgroundImage:`url(${props.image})`, width: '40vw', height: '40vw',
             backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 0}}>
             </div>
             <div style={{width: '40vw', backgroundColor: `${props.color}`, marginTop: 0, 
             display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1vw 2vw 0 1.5vw'}}>
                 <div>
                     <p style={{fontFamily: 'G Bold', fontSize: '3vw', color: 'white', marginBottom: 0}}>{props.text}</p>
                     <p style={{fontFamily: 'G Book', color: 'white', fontSize: '2vw', marginTop: '-.5vw'}}>Descargar</p>
                 </div>
                 {/* <a href={props.pdf} target="_blank"><img src={Download} alt="download-icon" style={{width: '4vw'}} /></a> */}
             </div>
             </div>
        ) : (
            <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{backgroundImage:`url(${props.image})`, width: '100vw', height: '100vw',
        backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 0}}>
        </div>
        <div style={{width: '100vw', backgroundColor: `${props.color}`, marginTop: 0, 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2vw 2vw 0 2.5vw'}}>
            <div>
                <p style={{fontFamily: 'G Bold', fontSize: '7vw', color: 'white', marginBottom: 0}}>{props.text}</p>
                <p style={{fontFamily: 'G Book', color: 'white', fontSize: '6vw', marginTop: '-.5vw'}}>Descargar</p>
            </div>
            {/* <a href={props.pdf} target="_blank"><img src={Download} alt="download-icon" style={{width: '11vw'}} /></a> */}
        </div>
        </div>        
        )}
        </>
    )
}

export default Card


