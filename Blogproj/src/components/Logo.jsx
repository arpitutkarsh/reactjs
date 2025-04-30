import React from 'react'

function Logo({width = '10%'}) {
  return (
    <div className='flex justify-center items-center rounded-550px bg-gray-500'>
      <img
      src='https://tse2.mm.bing.net/th?id=OIP.E4CHEikMff94fqUJrY8l4wAAAA&pid=Api&P=0&h=180'
      
      alt='logo'
      style={{width: width}}
      />
    </div>
  )
}

export default Logo