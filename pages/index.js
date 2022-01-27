import Head from 'next/head'
import Image from 'next/image'
import {Box, Container, Stack} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Column from "../Components/Column";
import GridLayout from "../Components/GridLayout";
import Partners from "../Components/Partners";
import React from "react";

import {client} from "../sanity";

export default function Home({navigation, posts, carousel, partners}) {

    return (
        <Box>

            <Container maxW='container.xl' centerContent>
                <Slider images={carousel} />
                <GridLayout data={posts} />
                <Stack direction={['column', 'row']} spacing='24px'>
                    <Column />
                    <Column />
                    <Column />
                    <Column />


                </Stack>
                <Partners data={partners}/>

            </Container>


        </Box>
    )
}

export async function getStaticProps() {


    const partners = await client.fetch(`*[_type == "partners"]`)

    const posts = await client.fetch(`
*[_type == "post" && defined(heading-> position)] {
  title,mainImage,body,_id,
 "category: ": heading->title,
   "image": mainImage,
  "slug: ": slug,
  "position": heading ->position
}`)
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