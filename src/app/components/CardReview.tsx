import React from 'react'

function CardReview(props){

  return (
    <div className = 'card bg-neutral-50'>
      
      <img className='cardImage'src = 'https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_1280.png'></img>
      <h2 className = 'cardName font-bold py-2 z-50'>{props.name}</h2>
      <p className = 'cardDescription py-2 z-50'>{props.description}</p>

    </div>
    
    
  )
}

CardReview.defaultProps = {
  name: "Anonymous Customer",
  description: "I love the patries so much! They are so delicous and so affordable. Will be going again"
}

export default CardReview