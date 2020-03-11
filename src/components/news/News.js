import React from 'react';
import Heading from "../layout/Heading";
import NewsList from './NewsList';


export function News() {
    return ( 
            <div>
                <Heading content ="News"/>
                <NewsList/>
            </div>
    );
}

export default News;