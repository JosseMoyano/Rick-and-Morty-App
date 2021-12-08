import React from "react";
import '../../../styles/post.scss'

export default function Post (props) {

    const {name, image } = props;

    return (
        // <div className='container_post'>
                <div className='container'>
                    <div className='div_image'>
                    <img src={image} alt={image} className='img' />
                    </div>
                    <p className='title'>{name}</p>
                </div>
        // </div>
    )
} 