import React from 'react'

//We define styling properties in container like height, width, etc and we display other properties as it is
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4 '>{children}</div>;
  
}

export default Container