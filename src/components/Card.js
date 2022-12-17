import React from 'react'

const Card = ({ lightUp }) => {
  return (
    <div className={lightUp ? 'card lit' : "card"}>
      KK12
    </div>
  )
}

export default Card