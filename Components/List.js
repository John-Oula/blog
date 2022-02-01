import React from 'react';
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import Link from "next/link";
import {TimeIcon} from "@chakra-ui/icons";
import Moment from "react-moment";
import {PortableText, toPlainText} from "../sanity";
import Post from './post';

function List({posts}) {

    return (
        <>
            {
                posts?.map((each, index) => {
                    return (
                        <Post   key={each._id + index.toString()} data={each} />
                    )
                })
            }
        </>
    );
}

export default List;