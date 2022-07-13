import React from 'react'

interface CardProps {
    image: string,
    head: string,
    short1: string,
    short2: string
}

export default function Card(props:CardProps) {
  return (
    <div className='mt-20 flex flex-col gap-3'>
            <div>
                <img src={props.image} alt='robot' />
            </div>
            <div className='flex flex-col justify-center items-center text-center mt-4'>
                <p className='text-white font-bold text-2xl'>{props.head}</p>
                <p className='text-white text-2xl'>{props.short1}</p>
                <p className='text-white text-2xl'>{props.short2}</p>
            </div>
        
    </div>
  )
}
