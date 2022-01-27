import React from 'react';
import {Flex, Grid, GridItem} from "@chakra-ui/react";
import PostCard from "./PostCard";
import Column from "./Column";
import HorizontalCard from "./HorizontalCard";

function GridLayout({data}) {
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
                                <>
                                    <Flex mb={4}  flexDirection={`row`}>
                                        <PostCard post={data}/>
                                        <Column  position={2}/>
                                    </Flex>
                                </>


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