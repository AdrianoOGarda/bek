import * as React from "react"
import Header from "./header"
import Footer from "./proyectosFooter"

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
