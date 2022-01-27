import {
    Button,
    Container,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react'

import {ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'


const Navbar = ({nav}) => {
    
    return(

        <Flex bgColor={`#0c3344`} width={`auto`} >

            <Container centerContent  maxW='container.xl'  >


            <Flex flexDirection={`row`}>

                {
                    nav?.map((each,index) =>{
                        return(

                                <Menu key={each._id + index.toString() }>
                                    <MenuButton

                                        as={Button} rightIcon={<ChevronDownIcon />}
                                        fontSize={`sm`}
                                        borderRadius={`0px`}
                                        borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`} pl={`5`} pr={`5`} bgColor={`#0c3344`}  alignItems={'center'} color={`white`}
                                    
                                        
                                    >{each.title}</MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create am Copy</MenuItem>

                                    </MenuList>
                                </Menu>

                        )
                    })
                }

                <InputGroup w={100} ml={10}>
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