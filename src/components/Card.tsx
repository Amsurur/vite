// import React from 'react'

const Card = (props:{name:string,image:string}) => {
  const {name,image} = props
  return (
    <div>
    <h1>{name}</h1>
    <img src={image} alt="" />
  </div>
    
  )
}

export default Card