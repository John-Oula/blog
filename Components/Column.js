import React from 'react';
import {Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";

function Column({type}) {
    const content = [
        {
            content: 'Professional Training Institutes for Foreigners'
        }, {
            content: 'Professional Training Institutes for Foreigners'
        }, {
            content: 'Professional Training Institutes for Foreigners'
        }, {
            content: 'Professional Training Institutes for Foreigners'
        }
    ]
    const tab = [
        {
            title:'LATEST',
            content:[

                {
                    content: ' Training Institutes for Foreigners'
                }, {
                    content: ' Training Institutes for Foreigners'
                }, {
                    content: ' Training Institutes for Foreigners'
                }, {
                    content: 'Professional Training Institutes for Foreigners'
                }
            ]
        },
        {
            title:'TRENDING',
            content:[

                {
                    content: ' Training Institutes '
                }, {
                    content: ' Training Institutes '
                }, {
                    content: ' Training Institutes for Foreigners'
                }, {
                    content: ' Training Institutes for Foreigners'
                }
            ]
        }
    ]

    return (

        <>

            { type != 'tab' ?
                <Flex ml={4} height={`fit-content`} maxWidth={250} width={`fit-content`}
                   border={type === 'color' ? `solid` : type === 'transparent' ? `none` : `solid`} borderWidth={`1px`}
                   borderColor={` #d6d9dc`} flexDirection={`column`}>
                <Box color={`white`}
                     bgColor={type === 'color' ? "#0c3344" : type === 'transparent' ? `transparent` : "#0c3344"}>
                    <Heading as='h4' size='md' p={5}
                             color={type === 'color' ? `white` : type === 'transparent' ? `#444444` : `white`}>
                        TRENDING
                    </Heading>
                </Box>

                {content?.map((each) => {
                    return (
                        <Box overflowWrap={`break-word`} borderTopWidth={`1px`} borderColor={` #d6d9dc`}
                             color={`#800000`}>
                            <Text p={3}>
                                {each.content}
                            </Text>
                        </Box>
                    )
                })
                }
            </Flex>
            :
                <Tabs variant='unstyled' height={`fit-content`} maxWidth={250} width={`fit-content`}>
                    <TabList>
                        {
                            tab.map((each) =>{
                                return(
                                    <Tab _selected={{ color: 'white', bg: '#fdb150' }}>{each.title}</Tab>
                                )
                            })
                        }

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {
                                tab.map((each) =>{
                                    each.content.map((l) =>{
                                        return(
                                            <Text>{l.content}</Text>
                                        )

                                    })



                                })
                            }

                        </TabPanel>

                    </TabPanels>
                </Tabs>
            }
        </>

    );
}

export default Column;