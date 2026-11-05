import React from 'react'

const Card1 = (props) => {
  console.log(props.user,props.age)
  return (
     <div className='card'>
        <img src={props.img}></img>
        <h1>{props.user} {props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sequi?</p>
        <button>view Profile</button>
        </div> 
  )
}

export default Card1
