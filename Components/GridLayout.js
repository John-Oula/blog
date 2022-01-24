import React from 'react';
import {Flex, Grid, GridItem, Heading, Stack} from "@chakra-ui/react";
import PostCard from "./PostCard";
import Column from "./Column";
import HorizontalCard from "./HorizontalCard";
import Partners from "./Partners";

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
                                        <PostCard />
                                        <Column />
                                    </Flex>
                                </>
                                :
                                type === `post` ?
                                    <>
                                        <article>
                                            <Heading>{data.title}</Heading>
                                        </article>
                                    </>
                                    :
                                    <></>
                        }
                        <HorizontalCard />

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