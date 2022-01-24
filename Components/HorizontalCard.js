import React from 'react';
import {Box, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Image from "next/image";
import image from '../assets/images/slide2.png'
import { Wrap, WrapItem } from '@chakra-ui/react'

function HorizontalCard() {
    const data = [
        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },        {
            title:"Study in China",
            image: image,
            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse labore nemo provident tempore. Adipisci aliquam aperiam autem consequatur dignissimos ipsum laudantium maxime nesciuntpariatur quaerat quo, totam? Sed, voluptate!"
        },

    ]

    return (
        <Flex flexDirection={`column`} mb={5} width={`100%`} overflowWrap={`break-word`}>
            <Flex mb={5} width={`inherit`} bg={`gray.300`} p={3} alignItems={`center`}>

                <Heading as={`h3`} size={`md`}>DIASPORA</Heading>
                <ArrowForwardIcon/>
            </Flex>

            <Flex p={4}>
                <Grid h='fit-content' templateRows='repeat(1, 1fr)' templateColumns='repeat(2, 1fr)' gap={4} w={`inherit`}>
                    {
                        data.slice(0,4).map(each =>{
                            return(
                                <GridItem colSpan={1} >
                                    <Flex flexGrow={1} justifyContent={`center`} alignItems={`center`}>
                                        <Box  mr={4}  width={100} >
                                            <Image src={each.image}/>
                                        </Box>

                                        <Wrap  spacing={`5px`} w={200}>
                                            <Heading as={`h5`} size={`md`}>{each.title}</Heading>
                                            <WrapItem>
                                                {each.content.substring(0,50) + '...'}
                                            </WrapItem>
                                        </Wrap>
                                    </Flex>
                                </GridItem>
                            )
                        })
                    }

                </Grid>
            </Flex>
        </Flex>
    );
}

export default HorizontalCard;