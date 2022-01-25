import React from 'react';
import {Box, Center, Flex, Grid, GridItem, Heading, Image, Wrap, WrapItem} from "@chakra-ui/react";
import {urlFor} from "../sanity";


function Partners({data}) {


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
                    data != undefined && data[0].partner.slice(0,10).map((each,index) =>{
                        return(
                            <GridItem key={each._id+ index.toString()} colSpan={1} >
                                <Flex flexGrow={1} >
                                    <Box  mr={4}  width={200} height={200}>
                                        <Image src={urlFor(each.image).url()} width={`auto`} h={`auto`} />
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