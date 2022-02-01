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
    MenuList,
    Text
} from '@chakra-ui/react'

import {ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import {useState} from "react";
import {useRouter} from "next/router";
import {Nav, Navbar} from "react-bootstrap";
import {AiFillHome} from "react-icons/ai";


const NavigationBar = ({nav}) => {
    const [text, setText] = useState('');
    const history = useRouter()


    return (

        <Flex
            // bgColor={`#287b4f`}
            w={`100%`} h={`auto`} boxShadow={`lg`}>

            <Container centerContent maxW={['container.sm', 'container.md', 'container.xl',]}>


                <Flex  display={["none", "none", "flex", "flex", "flex"]} flexDirection={`row`}>
                    <Link href={`/`}>
                        <Flex
                            cursor={`pointer`}
                            fontSize={`sm`}
                            borderRadius={`0px`}
                            // borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`}
                            pl={`5`}
                            pr={`5`} bgColor={`white`} alignItems={'center'} color={`#287b4f`}
                        > <AiFillHome /> </Flex></Link>

                    {
                        nav?.map((each, index) => {
                            return (

                                each?.dropdown ?
                                    <Menu key={each?._id + index.toString()}>
                                        <MenuButton

                                            as={Button} rightIcon={<ChevronDownIcon/>}
                                            fontSize={`sm`}
                                            borderRadius={`0px`}
                                            h={`auto`}
                                            // borderColor={`white`} borderLeftWidth={`0.5px`}
                                            pl={`5`}
                                            pr={`5`} bgColor={`white`} alignItems={'center'} color={`#287b4f`}
                                        >
                                            <Link href={`/${each?.slug.current}`}>{each?.title}</Link>
                                        </MenuButton>
                                        <MenuList>

                                            {
                                                each?.submenu && each?.submenu.map(link => (<MenuItem key={link._id}><Link
                                                    href={`/${each?.slug.current}${ each.single ? '' : '/'+link.slug.current}`}>{link.title}</Link></MenuItem>))
                                            }
                                        </MenuList>
                                    </Menu>
                                    :
                                    <Flex cursor={`pointer`} key={each?._id + index.toString()} fontSize={`sm`}
                                          borderRadius={`0px`}
                                          // borderColor={`white`} borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`}
                                          pl={`5`}
                                          pr={`5`} bgColor={`white`} alignItems={'center'} color={`#287b4f`}>
                                        <Link href={`/${each?.slug.current}`}><Text>{each?.title}</Text></Link>
                                    </Flex>


                            )
                        })
                    }

                    <Flex p={2}>
                        <form  onSubmit={(e) => {
                            e.preventDefault()
                            history.push({pathname: '/search', query: {text: text}})
                        }} w={100} ml={10}>
                            <InputGroup >
                                <InputLeftElement

                                    pointerEvents='none'
                                    children={<SearchIcon color='#287b4f'/>}
                                />
                                <Input onChange={(e) => setText(e.target.value)} color={`#444444`} type='text'
                                       bgColor={`white`} border={`solid`} borderColor={`#287b4f`}
                                       borderWidth={`2px`}/>
                            </InputGroup>

                        </form>
                    </Flex>

                </Flex>
                <Flex display={["flex", "flex", "none", "none", "none"]} flexDirection={`row`}>
                    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
<Nav>
                        {
                            nav?.map((each, index) => {
                                return (


                                        <Menu>

                                            <MenuButton key={each?._id + index.toString()} fontSize={`sm`}
                                                        borderRadius={`0px`} borderColor={`white`}
                                                        borderLeftWidth={`0.5px`} borderRightWidth={`0.5px`}
                                                        pl={`5`}
                                                        pr={`5`}
                                                        // bgColor={`#0c3344`}
                                                        alignItems={'center'}
                                                        color={`#287b4f`}>
                                                <Link href={`/${each?.slug.current}`}>{each?.title}</Link>
                                            </MenuButton>
                                            <MenuList>
                                                each?.dropdown &&

                                                {
                                                    each?.submenu && each?.submenu.map(link => (
                                                        <MenuItem key={link._id}><Link
                                                            href={`/${link.slug.current}`}>{link.title}</Link></MenuItem>))
                                                }


                                            </MenuList>
                                        </Menu>



                                )
                            })
                        }
</Nav>
                        </Navbar.Collapse>

                </Navbar>

                    <Flex p={2}>
                        <form  onSubmit={(e) => {
                            e.preventDefault()
                            history.push({pathname: '/search', query: {text: text}})
                        }} w={100} ml={10}>
                            <InputGroup >
                                <InputLeftElement

                                    pointerEvents='none'
                                    children={<SearchIcon color='#287b4f'/>}
                                />
                                <Input onChange={(e) => setText(e.target.value)} color={`#444444`} type='text'
                                       bgColor={`white`} border={`solid`} borderColor={`#BC1F28`}
                                       borderWidth={`1px`}/>
                            </InputGroup>

                        </form>
                    </Flex>


                </Flex>
            </Container>
        </Flex>


    )
}


export default NavigationBar