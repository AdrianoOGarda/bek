import * as React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css';

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
