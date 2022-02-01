import {client} from "../../sanity";
import {Container} from "@chakra-ui/react";
import GridLayout from "../../Components/GridLayout";
import React from "react";

const postQuery = `*[_type == "post" && slug.current == $slug][0]`

export default function Post({data}) {
    const  {post} = data
    return(
        <Container  maxW='container.xl' centerContent>
        <GridLayout type={`post`} data={post}/>
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