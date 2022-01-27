import React, {useEffect, useState} from 'react';
import {Box, Flex, Grid, GridItem, Heading, Image, Wrap, WrapItem} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {urlFor} from "../sanity";

function HorizontalCard({post,position}) {
    const [cardTitle, setCardTitle] = useState('')
    let temp = []


    useEffect(()=>{
        if(post){
            post.filter(each => {
                if(each.position === position){
                    console.log(each.category)
                    temp.push(each.category)
                }


            })
            setCardTitle(temp[0])
        }
    },[])


    return (
        <Flex flexDirection={`column`} mb={5} width={`100%`} overflowWrap={`break-word`}>
            <Flex mb={5} width={`inherit`} bg={`gray.300`} p={3} alignItems={`center`}>

                <Heading as={`h3`} size={`md`}>{ cardTitle }</Heading>
                <ArrowForwardIcon/>
            </Flex>

            <Flex p={4}>
                <Grid h='fit-content' templateRows='repeat(1, 1fr)' templateColumns='repeat(2, 1fr)' gap={4} w={`inherit`}>
                    { post != undefined &&
                        post?.slice(0,5).map((each,index) =>{
                            if(each.position === position){
                                return(
                                    <GridItem colSpan={1} key={each._id + index.toString()}>
                                        <Flex flexGrow={1} justifyContent={`center`} alignItems={`center`}>
                                            <Box  mr={4}  width={100} >
                                                <Image src={urlFor(each.image).url()} width={`auto`} h={`auto`} />
                                            </Box>

                                            <Wrap  spacing={`5px`} w={200}>
                                                <Heading as={`h5`} size={`sm`}>{each.title}</Heading>
                                                <WrapItem>
                                                    {each?.body[0].children[0].text.substring(0,50) + '...'}
                                                </WrapItem>
                                            </Wrap>
                                        </Flex>
                                    </GridItem>
                                )
                            }
                            else null
                        })
                    }

                </Grid>
            </Flex>
        </Flex>
    );
}

export default HorizontalCard;