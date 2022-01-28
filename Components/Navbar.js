import {
    Button,
    Container,
    Flex, FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Text
} from '@chakra-ui/react'

import {ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import {client} from "../sanity";
import {useContext, useState} from "react";
import SearchContext from "../contexts/SearchContext";



const Navbar = ({nav}) => {

    const {searchResults,setSearchResults,searching,setSearching} = useContext(SearchContext)

    const textSearch = async (text) =>
    {
        const query = `*[_type == "post"&& title match "${text.target.value}*"]`;
        setSearching(true)

        await client.fetch(query)
            .then((response) => {
                setSearchResults(response)
                setSearching(false)
            })
            .catch(error => {
                console.log(error)
                setSearching(false)
            })
        // console.log(text.target.value)
        // console.log(results)

    }

    return (

        <Flex bgColor={`#0c3344`} width={`auto`}>

            <Container centerContent maxW='container.xl'>


                <Flex flexDirection={`row`}>

                    {
                        nav?.map((each, index) => {
                            return (

                                each.dropdown ?
                                    <Menu key={each._id + index.toString()}>
                                        <MenuButton

                                            as={Button} rightIcon={<ChevronDownIcon/>}
                                            fontSize={`sm`}
                                            borderRadius={`0px`}
                                            borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`}
                                            pl={`5`}
                                            pr={`5`} bgColor={`#0c3344`} alignItems={'center'} color={`white`}
                                        >
                                            <Link href={`/${each.slug.current}`}>{each.title}</Link>
                                        </MenuButton>
                                        <MenuList>

                                            {
                                                each.submenu && each.submenu.map( link => (<MenuItem key={link._id }><Link href={`/${link.slug.current}`}>{link.title}</Link></MenuItem>) )
                                            }



                                        </MenuList>
                                    </Menu>
                                    :
                                    <Flex cursor={`pointer`} key={each._id + index.toString()} fontSize={`sm`}
                                          borderRadius={`0px`}
                                          borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`}
                                          pl={`5`}
                                          pr={`5`} bgColor={`#0c3344`} alignItems={'center'} color={`white`}>
                                        <Link href={ `/${each.slug.current}`}><Text>{each.title}</Text></Link>
                                    </Flex>




                            )
                        })
                    }

                    <FormControl w={100} ml={10}>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='#BC1F28'/>}
                            />
                            <Input onChange={ textSearch} color={`#444444`} type='text' bgColor={`white`} border={`solid`} borderColor={`#BC1F28`}
                                   borderWidth={`1px`}/>
                        </InputGroup>
                    </FormControl>

                </Flex>
            </Container>
        </Flex>


    )
}


export default Navbar