import React from 'react'

const Header = ({ category, title}) => {
  return (
    <div className='header-wrapper flex justify-center'>
      <h2 className='headline'>
        {category}
        <span className='block intro_title max-w'>{title}</span>
      </h2>
    </div>
  )
}

export default Header