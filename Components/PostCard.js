import React from 'react';
import {Box, Button, Heading, Image, Text} from "@chakra-ui/react";
import {PortableText, urlFor} from "../sanity";

function PostCard({post}) {

    return (
        <>

            {
                post.map(each =>{
                    if (each?.position === 1){

                        return(
                            <Box maxW='xl' key={each._id } borderWidth='1px' overflow='hidden'>
                                <Image src={urlFor(each.image).url()} width={`500px`} h={`auto`} />

                                <Box bgColor={`white`}>
                                    <Box fontWeight='semibold' as='h3' lineHeight='tight'  bgColor={`#0c3344`} color={`white`} p={5}>
                                        <Heading as='h4' size='md'>
                                            {each?.title}
                                        </Heading>
                                    </Box>

                                    <Box p={3} >

                                       <Text>{each?.body[0].children[0].text.substring(0,50) + '...'}</Text>

                                    </Box>
                                    <Button  borderColor={` #d6d9dc`} variant='outline' borderRadius={`0px`} bgColor={`white`}>Read More ...</Button>

                                </Box>
                            </Box>
                        )
                    }
                    else null
                })
            }

        </>


    );
}

export default PostCard;