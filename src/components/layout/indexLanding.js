import * as React from "react"
import styled from "styled-components"
import Header from "./landingHeader"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer"

const Layout = ({children}) => {
    return (
        <>
            <Header />
                <main style={{overflow: 'hidden'}}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
