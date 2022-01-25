import React from 'react';
import {Carousel} from "react-bootstrap";

import {Image} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {urlFor} from '../sanity'

function Slider({images}) {


    return (

            <Carousel >
                {
                    images[0].carousel.map((each,index) =>{
                        return(
                            <Carousel.Item key={index}>
                                <Image src={urlFor(each.image).url()} width={`1200px`} h={`400px`} />

                            </Carousel.Item>
                        )
                    })
                }


            </Carousel>

    );
}

export default Slider;