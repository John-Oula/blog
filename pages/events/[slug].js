import {client} from "../../sanity";
import {Container, Flex} from "@chakra-ui/react";
import Article from "../../Components/Article";
import React from "react";
import Column from "../../Components/Column";

const postQuery = `*[_type == "post" && slug.current == $slug][0]`

export default function BlogPost({data}) {

    return(
        <Container mt={7}  maxW='container.xl' centerContent>

            <Flex w={`100%`} flexDirection={[`column`,`column`,`row`,`row`,`row`,]}>
                <Flex w={[`100%`,`100%`,`70%`,`70%`,`70%`,]}>

                    <Article data={data} />
                </Flex>
                <Flex >

                    <Column />

                </Flex>

            </Flex>

        </Container>
    )
}



export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "post" && defined(slug.current)]{
        "params" :{
        "slug": slug.current
        }
        }`
    )

    return {
        paths,
        fallback: true,
    }

}

export async function getStaticProps({params}) {


    const {slug} = params;

    const post = await client.fetch(postQuery,{slug})


    return { props :{data :{post}}}

}