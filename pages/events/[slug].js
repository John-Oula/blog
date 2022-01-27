import {client, PortableText, urlFor} from "../../sanity";
import {Box, Button, Container, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import GridLayout from "../../Components/GridLayout";
import React from "react";
import {TimeIcon} from "@chakra-ui/icons";
import Moment from "react-moment";
import Link from "next/link";
import Column from "../../Components/Column";

const postQuery = `*[_type == "post" && slug.current == $slug][0]`

export default function Post({data}) {

    return(
        <Container  maxW='container.xl' centerContent>
            <>
                <Grid
                    h='fit-content'
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    w={`inherit`}
                >
                    <GridItem  colSpan={4}  >
                        <Flex flexDirection={`column`} >



                                <Box border={`solid`}  borderWidth={`1px`} borderColor={` #d6d9dc`} flexDirection={`column`} >
                                    <Flex border={`solid`}  borderWidth={`1px`} borderColor={` #d6d9dc`} flexDirection={`column`} >

                                        <Box border={`solid`} p={3} borderWidth={`1px`}
                                             borderColor={` #d6d9dc`} flexDirection={`column`} >
                                            <Heading mb={3} size={`md`} as={`h5`}>{data.post?.title}</Heading>
                                            <Flex alignItems={`center`}>
                                                <TimeIcon mr={3}/>
                                                <Moment format="D MMM YYYY" >

                                                    <Text fontSize={`sm`}> { data.post?._updatedAt}</Text>
                                                </Moment>

                                            </Flex>

                                            <PortableText data={data.post?.body} />
                                        </Box>
                                    </Flex>
                                </Box>



                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2}  >
                        <Flex alignItems={`center`}  flexDirection={'column'}>
                            <Column />

                        </Flex>
                    </GridItem>

                </Grid>


            </>
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