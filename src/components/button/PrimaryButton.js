import React from 'react'

const PrimaryButton = ({ children, otherStyle, style }) => {
  return (
    <button
      style={style}
      className={`w-32 text-white h-12 font-bold rounded-xl px-2 ${otherStyle}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
