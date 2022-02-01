import React from 'react';
import {Box, Button, Heading, Image, Text} from "@chakra-ui/react";
import {urlFor} from "../sanity";
import Link from "next/link";
import {useRouter} from "next/router";

function PostCard({post,position}) {
    const router = useRouter();
    return (
        <>

            {
                post.map(each =>{
                    if (each?.position === position){

                        return(
                            <Box h={`auto`} w={["100%","100%","fit-content%","100%","100%"]} key={each?.posts[0]._id } borderWidth='1px'>
                                <Box overflow={`hidden`} h={`45%`} w={`100%`}>
                                    <Image src={urlFor(each?.posts[0]?.image).url()} width={`auto`} h={`auto`} fallbackSrc={`https://via.placeholder.com/200`} />
                                </Box>

                                <Box bgColor={`white`}>
                                    <Box fontWeight='semibold' as='h3' lineHeight='tight'  bgColor={`#287b4f`} color={`white`} p={5}>
                                        <Heading as='h4' size='md'>
                                            <Link href={`/events/${each?.posts[0]?.slug?.current}`}
                                                  passHref>{each?.posts[0]?.title}</Link>
                                        </Heading>
                                    </Box>

                                    <Box p={3} >

                                       <Text>{each?.posts[0]?.body[0].children[0].text.substring(0,50) + '...'}</Text>

                                    </Box>
                                    <Button m={`10pt`} onClick={() => router.push(`/events/${each?.posts[0]?.slug?.current}`)} borderColor={` #d6d9dc`} variant='outline' borderRadius={`0px`} bgColor={`white`}>Read
                                        More ...</Button>
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