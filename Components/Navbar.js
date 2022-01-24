import  Link  from 'next/link';
import client from '../sanity'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
    Spacer,
    Flex,
    MenuItemOption,
    UnorderedList, ListIcon, ListItem, Button, FormControl, Input, InputLeftElement, InputGroup, Container
} from '@chakra-ui/react'

import {CheckCircleIcon, SearchIcon} from '@chakra-ui/icons'


const Navbar = ({nav}) => {
    
    return(

        <Flex bgColor={`#0c3344`} width={`auto`} >
            <Container centerContent  maxW='container.xl'  >


            <Flex flexDirection={`row`}>
                {
                    nav?.map((each) =>{
                        return(

                            <Flex   borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`} pl={`7`} pr={`7`} bgColor={`#0c3344`} justifyContent={`center`} alignItems={'center'} color={`white`}>

                                <Box p={2}>
                                    <CheckCircleIcon />
                                </Box>
                                <Box  >
                                    <Link href={'#'} fontSize={`sm`}>{each.title}</Link>
                                </Box>

                            </Flex>
                        )
                    })
                }

                <InputGroup ml={10}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon  color='#BC1F28' />}
                    />
                    <Input color={`#444444`} type='text' bgColor={`white`}  border={`solid`} borderColor={`#BC1F28`} borderWidth={`1px`} />
                </InputGroup>
            </Flex>
            </Container>
        </Flex>


)
}



export default Navbar