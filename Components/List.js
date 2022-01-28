import React from 'react';
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import Link from "next/link";
import {TimeIcon} from "@chakra-ui/icons";
import Moment from "react-moment";
import {PortableText} from "../sanity";

function List({posts}) {
    return (
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
    );
}

export default List;