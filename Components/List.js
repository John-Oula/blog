import React from 'react';
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