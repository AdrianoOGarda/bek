import * as React from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Layout />
      <Helmet>
        <title>BEK</title>
        <meta name="description" content="Descripción BEK" />
        <link rel="canonical" href="http://bek.com/" />
        <meta charset="UTF-8" />
        <meta name="author" content="Adriano Ortiz Garda" />
        <meta name="keywords" content="Muebles, BEK" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet> 
    </>
  )
}

export default IndexPage
