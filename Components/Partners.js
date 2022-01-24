import React from 'react';
import {Box, Center, Flex, Grid, GridItem, Heading, Wrap, WrapItem} from "@chakra-ui/react";
import Image from "next/image";
import image from '../assets/images/slide2.png'

function Partners() {
    let data = [image,image,image,image,image,image,image,image,image,image,image,image,image,image,image,image,]
    return (
        <Box width={`100%`}>
            <Box width={`inherit`} bg={`gray.300`} p={4}>
                <Center>
                    <Heading as={`h6`} size={`sm`}>
                        Our Partners & Network
                    </Heading>
                </Center>
            </Box>
            <Grid p={4} h='fit-content' templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={4} w={`inherit`}>
                {
                    data.slice(0,10).map(each =>{
                        return(
                            <GridItem colSpan={1} >
                                <Flex flexGrow={1} >
                                    <Box  mr={4}  width={200} height={200}>
                                        <Image src={each}/>
                                    </Box>

                                </Flex>
                            </GridItem>
                        )
                    })
                }

            </Grid>
        </Box>
    );
}

export default Partners;