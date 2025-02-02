import React from 'react'

interface CardProps {
    children: React.ReactNode;
}

const Card:React.FC<CardProps> = ({children} ) => {
  return (
    <div className=' rounded-lg shadow-lg p-4 '>
      {children}
    </div>
  )
}

export default Card
