import React, {useEffect, useState} from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import {client} from "../sanity";

function TabColumn(props) {
    const query = `*[_type == "menu"]{title}`
    const [post,setPost] = useState([]);
    useEffect(() =>{

        client.fetch(query)
            .then((res) =>{
                console.log(res)
                setPost(res)
            })
            .catch(error =>{
                console.log(error)
            })

    },[])
    return (
        <Tabs variant='unstyled' height={`fit-content`} maxWidth={250} width={`fit-content`}>
            <TabList>
                {
                    post.map((each) =>{
                        return(
                            <Tab _selected={{ color: 'white', bg: '#fdb150' }}>{each.title}</Tab>
                        )
                    })
                }

            </TabList>
            <TabPanels>
                <TabPanel>
                    {
                        post.map((each) =>{
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
    );
}

export default TabColumn;