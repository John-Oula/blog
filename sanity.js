const BlockContent = require('@sanity/block-content-to-react')
const sanityClient = require('@sanity/client')

const config = {
    projectId: 'y90icmhk',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: '', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
}
export  const client = sanityClient(config)

import imageUrlBuilder from '@sanity/image-url'


const serializers = {
    types: {
        code: (props) => (
            <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
        ),
    },
}


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
    return builder.image(source)
}

export const PortableText = ({data}) => {
    return(
        <BlockContent blocks={data} serializers={serializers} {...config} />
    )
}