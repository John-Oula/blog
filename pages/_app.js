import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'


import Layout from "../components/Layout";
import ContextWrapper from "../Components/ContextWrapper";


function MyApp({ Component, pageProps }) {
    return (
        <>

                <ChakraProvider>

                   <ContextWrapper>
                       <Layout>

                           <Component {...pageProps} />

                       </Layout>
                   </ContextWrapper>

                </ChakraProvider>
        </>
    )
}

export default MyApp
