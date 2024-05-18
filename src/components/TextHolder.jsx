import React from 'react'
import Typewriter from 'typewriter-effect'

const TextHolder = ({header, subtext}) =>
{
    return(
        <div className='textHolder'>
            <h1><Typewriter onInit={(typewriter) =>{typewriter.typeString("Hi, I'm Daniel").start()}}/></h1>
            <p>{subtext}</p>
        </div>
    );
}

export default TextHolder