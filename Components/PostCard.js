import React from 'react';
import {Box, Button, Heading, Image} from "@chakra-ui/react";

function PostCard(props) {

    const post = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',

        title: 'Modern home in city center in the heart of historic Los Angeles',
        content: '            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deserunt eaque fugit incidunt iste\n' +
            '            modi perferendis quae saepe sint. Autem cumque doloremque esse excepturi incidunt magni nemo praesentium\n' +
            '            voluptatibus.',

    }

    return (
        <>

            <Box maxW='xl'  borderWidth='1px' overflow='hidden'>
                <Image src={post.imageUrl} alt={post.imageAlt}/>

                <Box bgColor={`white`}>
                    <Box fontWeight='semibold' as='h3' lineHeight='tight'  bgColor={`#0c3344`} color={`white`} p={5}>
                        <Heading as='h4' size='md'>
                            {post.title}
                        </Heading>
                    </Box>

                    <Box p={3} >
                        {post.content}

                    </Box>
                    <Button  borderColor={` #d6d9dc`} variant='outline' borderRadius={`0px`} bgColor={`white`}>Read More ...</Button>

                </Box>
            </Box>

        </>


    );
}

export default PostCard;