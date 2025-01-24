import getBlog from '@/lib/getBlog';
import React from 'react';

const page = async({params}) => {
    const {id} = params
    const blog = await getBlog(id)
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl'>{blog.title}</h2>
            <p className='mt-6'>{blog.body}</p>
        </div>
    );
};

export default page;