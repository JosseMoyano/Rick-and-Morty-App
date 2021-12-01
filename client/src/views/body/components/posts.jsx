import React from "react";
import Post from "./post";
import '../../../styles/posts.scss'

export default function Posts (props) {

    const { characters } = props;

    return (
        <>
            {
                characters ? (
                    characters.map(c => (
                        <div className='container_posts' key={c.id}>
                            <Post name={c.name} image={c.image} />
                        </div>

                ))) : <p>cargando...</p>
            }
        </>
    )
}