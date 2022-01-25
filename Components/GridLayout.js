import React from 'react';
import {Box, Flex, Grid, GridItem, Heading, Spacer, Stack, Text} from "@chakra-ui/react";
import PostCard from "./PostCard";
import Column from "./Column";
import HorizontalCard from "./HorizontalCard";
import Partners from "./Partners";
import {PortableText} from "../sanity";
import Moment from "react-moment";
import {TimeIcon} from '@chakra-ui/icons'

function GridLayout({type,data}) {
    return (
        <>
            <Grid
                h='fit-content'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                w={`inherit`}
            >
                <GridItem  colSpan={4}  >
                    <Flex flexDirection={`column`} mt={4}>

                        {
                            type === `home` ?
                                <>
                                    <Flex mb={4}  flexDirection={`row`}>
                                        <PostCard post={data}/>
                                        <Column post={data} position={2}/>
                                    </Flex>
                                </>
                                :
                                type === `post` ?
                                    <>
                                        <Box border={`solid`} p={3} borderWidth={`1px`}
                                             borderColor={` #d6d9dc`} flexDirection={`column`} >
                                            <Heading mb={3} size={`md`} as={`h5`}>{data?.title}</Heading>
                                            <Flex alignItems={`center`}>
                                                <TimeIcon mr={3}/>
                                                <Moment format="D MMM YYYY" >

                                                    <Text fontSize={`sm`}> { data?._updatedAt}</Text>
                                                </Moment>

                                            </Flex>

                                            <PortableText data={data?.body} />
                                        </Box>
                                    </>
                                    :
                                    <></>
                        }
                        <HorizontalCard position={3} post={data}/>
                        <HorizontalCard position={4} post={data}/>
                        <HorizontalCard position={5} post={data}/>

                    </Flex>
                </GridItem>
                <GridItem colSpan={2}  >
                    <Flex alignItems={`center`}  flexDirection={'column'}>
                        <Column type={`transparent`} />
                        <Column type={`tab`} />
                    </Flex>
                </GridItem>

            </Grid>


        </>

    );
}

export default GridLayout;