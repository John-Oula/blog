import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
import Nprogress from 'nprogress'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <ChakraProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </Head>
        </>
    )
}

export default MyApp