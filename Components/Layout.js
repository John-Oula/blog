import Head from 'next/head'
import { Box } from '@chakra-ui/react'


import Footer from "./Footer";


const Layout = ({children}) => (
    <>
        <Head>
            <title>
                Sanity
            </title>
        </Head>
        <Box maxwidth={`1280px` } m={`auto`}>
            <header>
                {/*<Navbar />*/}

            </header>
            <main>
                {children}
                <Footer />
            </main>
        </Box>
    </>
)

export default Layout