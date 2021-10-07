import * as React from "react"
import Download from "../../icons/landing/Download.png"


const Card = (props) => {

    return (
             <div style={{display: 'flex', flexDirection: 'column'}}>
             <div style={{backgroundImage:`url(${props.image})`, width: '88vw', height: '30vw',
             backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 0}}>
             </div>
             <div style={{width: '88vw', backgroundColor: `${props.color}`, marginTop: 0, 
             display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1vw 2vw 0 1.5vw'}}>
                 <div>
                     <p style={{fontFamily: 'G Bold', fontSize: '3vw', color: 'white', marginBottom: 0}}>{props.text}</p>
                     <p style={{fontFamily: 'G Book', color: 'white', fontSize: '2vw', marginTop: '-.5vw'}}>Descargar</p>
                 </div>
                 <a href=""><img src={Download} alt="download-icon" style={{width: '4vw'}} /></a>
             </div>
             </div>
    )
}

export default Card


