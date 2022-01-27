import {Grid, GridItem} from '@chakra-ui/react'
import React from "react";


const NestedLayout = ({children}) => (
    <>
        <>

            <Grid
                h='fit-content'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                w={`inherit`}
            >
                <GridItem  colSpan={4}  >

                </GridItem>
                <GridItem colSpan={2}  >

                </GridItem>

            </Grid>


        </>
    </>
)

export default NestedLayout