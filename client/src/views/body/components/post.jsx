import React from "react";
import '../../../styles/post.scss'

export default function Post (props) {

    return (
        <div className='container_post'>
            <a href='#' className='a'>
                <div className='container'>
                    <img alt='Imagen' className='img' />
                    <p className='title'>titulo</p>
                </div>
            </a>
        </div>
    )
}