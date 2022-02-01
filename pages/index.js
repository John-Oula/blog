import {Box, Container,Flex, Stack} from "@chakra-ui/react";
import Slider from "../Components/Slider";
import Column from "../Components/Column";
import GridLayout from "../Components/GridLayout";
import Partners from "../Components/Partners";
import React from "react";

import {client} from "../sanity";

export default function Home({navigation, posts, carousel, partners}) {



    return (

        <Container maxW='container.xl' centerContent>
            <Flex flexDirection={`column` } w={["100%","100%","100%","100%"]} >
                <Box w={`100%`} mb={`3%`} display={["none","flex","flex","box","box"]}>
                    <Slider images={carousel} />
                </Box>
                <GridLayout data={posts} />
                <Stack direction={['column', 'row']} spacing='24px'>

                    <Column post={posts} position={6}  />
                    <Column post={posts}  position={7} />
                    <Column post={posts}  position={8} />
                    <Column post={posts}  position={9} />

                </Stack>
                <Partners data={partners}/>

            </Flex>
        </Container>


    )
}

export async function getStaticProps() {


    const partners = await client.fetch(`*[_type == "partners"]`)

    const posts = await client.fetch(`
*[_type == "heading" ] {title,position,
"posts": *[_type == "post" && references(^._id)]{
              title,slug,body,_id,
                  "category":category->title,
                  "image":mainImage,
                        "category_slug":category->slug
                       }}`)
    const carousel = await client.fetch(`*[_type == "imageSlider"]`)
    if (!posts.length) {
        return {
            props: {
                posts: [],
            }
        }
    } else {
        return {
            props: {

                posts: posts,
                carousel: carousel,
                partners: partners,
            }
        }
    }
}