import React from 'react'

const CardItem = ({ children, imgUri, otherStyle, style, className }) => {
  return (
    <div style={style} className={otherStyle}>
      <img src={imgUri} className={className} alt='pic' />
      <div>{children}</div>
    </div>
  )
}

export default CardItem
