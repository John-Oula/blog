import React, {useEffect, useState} from 'react';
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import {client} from "../sanity";

function Column({position}) {
    const query = `
*[_type == "post" && defined(heading-> position)] {
  title,mainImage,body,_id,
 "category: ": heading->title,
   "image": mainImage,
  "slug: ": slug,
  "position": heading ->position
}`
    const [post,setPost] = useState([]);
    useEffect(() =>{

        client.fetch(query)
            .then((res) =>{
                console.log(res)
              setPost(res)
            })
            .catch(error =>{
                console.log(error)
            })

    },[])



    return (

        <>

          
                <Flex ml={4} height={`fit-content`} maxWidth={250} width={`fit-content`}
                   border={`solid`} borderWidth={`1px`}
                   borderColor={` #d6d9dc`} flexDirection={`column`}>
                <Box color={`white`}
                     bgColor={ "#0c3344"}>
                    <Heading as='h4' size='md' p={5}
                             color={ `white`}>
                        {post != undefined && post[0]?.category}
                    </Heading>
                </Box>

                {post?.map((each,index) => {
                    if(each.position === position){
                        return (
                            <Box key={each._id + index.toString()} overflowWrap={`break-word`} borderTopWidth={`1px`} borderColor={` #d6d9dc`}
                                 color={`#800000`}>
                                <Text p={3}>
                                    {each?.title}
                                </Text>
                            </Box>
                        )
                    }
                    else null
                })
                }
            </Flex>
   
            

      
        </>



    );
}

export default Column;