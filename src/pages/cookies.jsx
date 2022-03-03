import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const MainDiv = styled.div`
    padding: 3vw;

    h1{
        font-family: 'G Bold';
    }

    h2, p{
        font-family: 'G Book'
    }

    p{
        margin-bottom: .5vw;
        font-size: 1.3vw;
    }

    ul li{
        margin-bottom: .5vw;
        font-family: 'G Book';
        font-size: 1.3vw;
    }

    div {
        margin-bottom: 2vw;
    }
    table tr th {
        padding-right: 2vw;
        font-family: 'G Bold';
        font-size: 1.3vw;
    }
    td{
        padding-bottom: 1vw;
        font-family: 'G Book';
        font-size: 1.3vw;
    }

    @media only screen and (max-width: 480px) {
        padding: 3vw;

        h1{
            font-size: 8vw;
        }
        h2{
            font-size: 6vw;
        }
        p{
            font-size: 4vw;
        }
        div {
            margin-bottom: 5vw;
        }
        ul li {
            font-size: 4vw;
        }
        table tr th {
            padding-right: 2vw;
            font-family: 'G Bold';
            font-size: 4vw;
        }
        td{
            padding-bottom: 4vw;
            font-family: 'G Book';
            font-size: 4vw;
        }
    }
`

const Aviso = () => {
    return (
        <Layout>
            <MainDiv>
                <div>
                    <h1>Política de Cookies</h1>
                    <p>Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar.</p>
                </div>
                
                <div>
                    <h2>Tipos de Cookies que utilizamos</h2>
                    <p>Esta página web utiliza cookies de terceros que son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</p>
                    <p>En este caso las Cookies son utilizadas con fines estadísticos relacionados con las visitas que recibe y las páginas que se consultan, quedando aceptado su uso al navegar por ella.</p>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>COOKIE (Y PROVEEDOR)</th>
                            <th>DURACIÓN</th>
                            <th>DESCRIPCIÓN</th>
                        </tr>
                        <tr>
                            <td>__cfduid (notin.es)</td>
                            <td>Sesión</td>
                            <td>Publicidad</td>
                        </tr>
                        <tr>
                            <td>personalization_id (twitter.com)</td>
                            <td>Sesión</td>
                            <td>Twitter</td>
                        </tr>
                        <tr>
                            <td>Facebook</td>
                            <td>Publicidad, estadísticas y mediciones</td>
                            <td>Coloca Cookies en el ordenador o dispositivo y recibe la información almacenada en ellas cuando utilizas o visitas servicios prestados por otras empresas que utilizan los servicios de Facebook.</td>
                        </tr>
                        <tr>
                            <td>_ga (Google)</td>
                            <td>2 años</td>
                            <td>Se usa para distinguir a los usuarios.</td>
                        </tr>
                        <tr>
                            <td>_gid (Google)</td>
                            <td>24 horas</td>
                            <td>Se usa para distinguir a los usuarios.</td>
                        </tr>
                        <tr>
                            <td>_gat (Google)</td>
                            <td>1 minuto</td>
                            <td>Se usa para limitar el porcentaje de solicitudes. Si has implementado Google Analytics mediante Google Tag Manager, esta cookie se llamará _dc_gtm_property-id.</td>
                        </tr>
                        <tr>
                            <td>_gali (Google)</td>
                            <td>30s</td>
                            <td>Atribución de enlace mejorada.</td>
                        </tr>
                        <tr>
                            <td>_unam (SHARETHIS)</td>
                            <td>Persistente</td>
                            <td>Su finalidad es cuantificar el número de Usuarios que comparten un determinado contenido y cuántas páginas web son visitadas a raíz de esa acción.</td>
                        </tr>
                        <tr>
                            <td>WordPress</td>
                            <td>2 años</td>
                            <td>Utilizado para el correcto funcionamiento del gestor de contenido WordPress.</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <p>La utilización de cookies no será utilizada para identificar a los usuarios, con excepción de los casos en que se investiguen posibles actividades fraudulentas.</p>
                    <p>La Ley garantiza los derechos de los titulares de datos personales, tales derechos son conocidos como ARCO, los cuales consisten en:</p>
                    <p>A = Derecho de acceso a la información de sus datos personales.</p>
                    <p>R = Derecho a la rectificación de sus datos personales.</p>
                    <p>C = Derecho a la cancelación de sus datos personales.</p>
                    <p>O = Derecho de oposición al uso de sus datos personales.</p>
                </div>
                <div>
                    <p>La seguridad y la confidencialidad de los datos que los usuarios proporcionen al contratar un servicio o comprar un producto en línea estarán protegidos por un servidor seguro bajo el protocolo Secure Socket Layer (SSL), de tal forma que los datos enviados se transmitirán encriptados para asegurar su resguardo.</p>
                </div>
            </MainDiv>    
        </Layout>
    )
}

export default Aviso
