import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCharacter, getCharacter } from "../../../redux/actions";

export default function CardIMG (props){

    const { resident } = props
    const dispatch = useDispatch();
    const character = useSelector(state => state.character)
    
    useEffect(() => {
        dispatch(getCharacter(resident))
        return () => {
            dispatch(cleanCharacter())
        }
    }, [dispatch, resident])

    // let hash = {};
    // character = character.filter(o => hash[o.id] ? false : hash[o.id] = true);

    console.log('character: ', character)
    
    return (
        <>
        {
            character ? character.map(c => (
                <div>
                    <img src={c.image} alt='resident' />
                    <p>{c.name}</p>
                </div>
            )):<p>cargando...</p>
        }
        </>
    )
}