import React from 'react';
import {Box, Button, Container, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import {TimeIcon} from "@chakra-ui/icons";
import Moment from "react-moment";
import {client, PortableText} from "../../sanity";
import Link from 'next/link'
import Column from "../../Components/Column";



const postQuery = `*[_type == "post"]`


function Posts({posts}) {
    return (
        <Container maxW='container.xl' centerContent>

            <Grid h='fit-content' templateRows='repeat(1, 1fr)' templateColumns='repeat(6, 1fr)' gap={4} w={`inherit`}>
                <GridItem  colSpan={4}  >
                    <Flex flexDirection={`column`} >


                                    <>
                                        <Box border={`solid`}  borderWidth={`1px`} borderColor={` #d6d9dc`} flexDirection={`column`} >
                                            <Flex border={`solid`}  borderWidth={`1px`} borderColor={` #d6d9dc`} flexDirection={`column`} >
                                                {
                                                    posts?.map( (each,index )=> {
                                                        return(
                                                            <Box borderBottom={`solid`} p={3} borderBottomWidth={`1px`} borderColor={` #d6d9dc`} key={each._id + index.toString() }>
                                                                <Heading mb={3} size={`sm`} as={`h5`}><Link href={`/events/${each.slug.current}`} passHref >{each?.title}</Link></Heading>
                                                                <Flex alignItems={`center`}>
                                                                    <TimeIcon mr={3}/>
                                                                    <Moment format="D MMM YYYY" >

                                                                        <Text fontSize={`sm`}> { each?._updatedAt}</Text>
                                                                    </Moment>

                                                                </Flex>

                                                                <PortableText data={each?.body} />
                                                                <Button  borderColor={` #d6d9dc`} variant='outline' borderRadius={`0px`} bgColor={`white`}>Read More ...</Button>
                                                            </Box>
                                                        )
                                                    })
                                                }
                                                
                                            </Flex>
                                        </Box>
                                    </>


                    </Flex>
                </GridItem>
                <GridItem colSpan={2}  >
                    <Flex alignItems={`center`}  flexDirection={'column'}>
                        <Column />

                    </Flex>
                </GridItem>

            </Grid>


        </Container>
    );
}

export default Posts

export async function getStaticProps() {
    
    const posts = await client.fetch(postQuery)
    
    return { props :{posts :posts}}

}