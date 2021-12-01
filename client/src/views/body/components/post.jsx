import React from "react";
import '../../../styles/post.scss'

export default function Post (props) {

    const {name, image } = props;

    return (
        <div className='container_post'>
            <a href='#' className='a'>
                <div className='container'>
                    <img src={image} alt={image} className='img' />
                    <p className='title'>{name}</p>
                </div>
            </a>
        </div>
    )
}