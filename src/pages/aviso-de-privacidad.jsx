import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const MainDiv = styled.div`
    padding: 3vw;

    h1{
        font-family: 'G Bold';
        margin-bottom: 2vw;
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

    span{
        font-family: 'G Bold';
    }

    @media only screen and (max-width: 480px) {
        padding: 6vw;

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
    }
`

const Aviso = () => {
    return (
        <Layout>
            <MainDiv>
                <h1>Aviso de Privacidad</h1>
                <div>
                    <h2>1. INFORMACIÓN AL USUARIO</h2>
                    <p>Grupo TNU SA de CV, como responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.</p>
                    <p>En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales. Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.</p>
                </div>
                <div>
                    <h2>2. CONTACTO</h2>
                    <p>Denominación social: Grupo TNU SA de CV</p>
                    <p>Nombre comercial: Bek Outdoors</p>
                    <p>Domicilio: Calle 1 #4, Alce Blanco, 53370 Naucalpan de Juárez, Méx.</p>
                    <p>e-mail: ventas@bek.mx</p>
                </div>
                <div>
                    <h2>3. PRINCIPIOS CLAVE</h2>
                    <p>Siempre hemos estado comprometidos con prestar nuestros servicios con el más alto grado de calidad, lo que incluye tratar sus datos con seguridad y transparencia. Nuestros principios son:</p>
                    <ul>
                        <li><span>Legalidad: Solo recopilaremos sus Datos personales para fines específicos, explícitos y legítimos.</span></li>
                        <li><span>Minimización de datos: </span>Limitamos la recogida de datos de carácter personal a lo que es estrictamente relevante y necesario para los fines para los que se han recopilado.</li>
                        <li><span>Limitación de la Finalidad: </span>Solo recogeremos sus datos personales para los fines declarados y solo según sus deseos.</li>
                        <li><span>Precisión: </span>Mantendremos sus datos personales exactos y actualizados.</li>
                        <li><span>Seguridad de los Datos: </span>Aplicamos las medidas técnicas y organizativas adecuadas y proporcionales a los riesgos para garantizar que sus datos no sufran daños, tales como divulgación o acceso no autorizado, la destrucción accidental o ilícita o su pérdida accidental o alteración y cualquier otra forma de tratamiento ilícito.</li>
                        <li><span>Acceso y Rectificación: </span>Disponemos de medios para que acceda o rectifique sus datos cuando lo considere oportuno.</li>
                        <li><span>Conservación: </span>Conservamos sus datos personales de manera legal y apropiada y solo mientras es necesario para los fines para los que se han recopilado.</li>
                        <li><span>Marketing Directo y cookies: </span>Cumplimos con la legislación aplicable en materia de publicidad y cookies.</li>
                    </ul>
                </div>
                <div>
                    <h2>4. RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALES</h2>
                    <p>Los tipos de datos que se pueden solicitar y tratar son:</p>
                    <ul>
                        <li>Datos de carácter identificativo.</li>
                    </ul>
                    <p>También recogemos de forma automática datos sobre su visita a nuestro sitio web según se describe en la política de cookies.</p>
                    <p>Siempre que solicitemos sus Datos personales, le informaremos con claridad de qué datos personales recogemos y con qué fin. En general, recogemos y tratamos sus datos personales con el propósito de:</p>
                    <ul>
                        <li>Proporcionar información, servicios, productos, información relevante y novedades en el sector.</li>
                        <li>Envío de comunicaciones.</li>
                    </ul>
                </div>
                <div>
                    <h2>5. LEGITIMIDAD</h2>
                    <p>De acuerdo con la normativa de protección de datos aplicable, sus datos personales podrán tratarse siempre que:</p>
                    <ul>
                        <li>Nos ha dado su consentimiento a los efectos del tratamiento. Por supuesto podrá retirar su consentimiento en cualquier momento.</li>
                        <li>Por requerimiento legal.</li>
                        <li>Por exisitr un interés legítimo que no se vea menoscabado por sus derechos de privacidad, como por ejemplo el envío de información comercial bien por suscripción a nuestra newsletter o por su condición de cliente.</li>
                        <li>Por ser necesaria para la prestación de alguno de nuestros servicios mediante relación contractual entre usted y nosotros.</li>
                    </ul>
                </div>
                <div>
                    <h2>6. COMUNICACIÓN DE DATOS PERSONALES</h2>
                    <p>Los datos pueden ser comunicados a empresas relacionadas con Grupo TNU SA de CV para la prestación de los diversos servicios en calidad de Encargados del Tratamiento. La empresa no realizará ninguna cesión, salvo por obligación legal.</p>
                </div>
                <div>
                    <h2>7. SUS DERECHOS</h2>
                    <p>En relación con la recogida y tratamiento de sus datos personales, puede ponerse en contacto con nosotros en cualquier momento para:</p>
                    <ul>
                        <li>Acceder a sus datos personales y a cualquier otra información indicada en el Artículo 15.1 del RGPD.</li>
                        <li>Rectificar sus datos personales que sean inexactos o estén incompletos de acuerdo con el Artículo 16 del RGPD.</li>
                        <li>Suprimir sus datos personales de acuerdo con el Artículo 17 del RGPD.</li>
                        <li>Limitar el tratamiento de sus datos personales de acuerdo con el Artículo 18 del RGPD.</li>
                        <li>Solicitar la portabilidad de sus datos de acuerdo con el Artículo 20 del RGPD.</li>
                        <li>Oponerse al tratamiento de sus datos personales de acuerdo con el artículo 21 del RGPD.</li>
                    </ul>
                    <p>Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
                    <p>Puede ejercer estos derechos enviando comunicación, motivada y acreditada, a ventas@bek.mx</p>
                </div>
                <div>
                    <h2>8. INFORMACIÓN LEGAL</h2>
                    <p>Los requisitos de esta Política complementan, y no reemplazan, cualquier otro requisito existente bajo la ley de protección de datos aplicable, que será la que prevalezca en cualquier caso.</p>
                </div>
                <div>
                    <h2>9. ACEPTACIÓN DE LOS TÉRMINOS</h2>
                    <p>Esta declaración de Confidencialidad / Privacidad está sujeta a los términos y condiciones del sitio web www.bek.mx, lo cual constituye un acuerdo legal entre el usuario y Bek Outdoors.</p>
                    <p>Si el usuario navega y hace uso de los servicios y/o compra de los productos de Bek Outdoors dentro del sitio web www.bek.mx, significa que ha leído, entendido y acordado los términos antes expuestos.</p>
                </div>
            </MainDiv>    
        </Layout>
    )
}

export default Aviso
