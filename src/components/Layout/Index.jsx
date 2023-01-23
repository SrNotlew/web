import React from "react";
import Footer from "../Footer";
import VideoList from "../VideoList"

import Header from "../Header"
import { Container } from "./styles"

export default function Layout(){
    return(
        <Container>
            <Header/>
            <VideoList />
            <Footer/>
        </Container>
    )
}