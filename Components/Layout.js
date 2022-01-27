import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Footer from "./Footer";
import {client} from "../sanity";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import NProgress from 'nprogress';
import Router from 'next/router';


function Layout({children}) {

    const [links, setLinks] = useState([]);
    NProgress.configure({showSpinner: false});

    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
    });
    const query = `*[_type == "menu"]{title}`
    useEffect(() => {

        client.fetch(query)
            .then((res) => {
                console.log(res)
                setLinks(res)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <>
            <Head>
                <title>
                    Truenorth hub
                </title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                      integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
                      crossOrigin='anonymous' referrerPolicy='no-referrer'/>
            </Head>

            <Box maxwidth={`1280px`} m={`auto`}>
                <header>
                    <Navbar nav={links}/>

                </header>
                <main>
                    {children}
                    <footer>
                        <Footer/>
                    </footer>
                </main>
            </Box>
        </>
    )
}

export default Layout






