import React from 'react';
import {Box, Center, Divider, Flex, Stack, Text} from "@chakra-ui/react";

function Footer() {
    return (
        <Flex  flexDirection={`column`} bg={`blue.300`} width={`100%`} p={2}>
            <Box p={1}>
                <Center flexDirection={`column`}>
                    <Stack  color={`white`} direction={['column', 'row']} spacing='4px'>
                        <Text fontSize={`sm`} p={1}> Privacy</Text>
                        <Divider orientation='vertical' />
                        <Text fontSize={`sm`} p={1}> Privacy</Text>
                        <Divider orientation='vertical' />
                        <Text fontSize={`sm`} p={1}> Privacy</Text>
                        <Divider orientation='vertical' />
                        <Text fontSize={`sm`} p={1}> Privacy</Text>
                        <Divider orientation='vertical' />




                    </Stack>

                    <Text  fontSize={`xs`}>
                        Copyright © AG CAREER HUB: Africa Germany Career Hub. All Rights Reserved.
                    </Text>
                </Center>
            </Box>
            <Box></Box>
        </Flex>
    );
}

export default Footer;