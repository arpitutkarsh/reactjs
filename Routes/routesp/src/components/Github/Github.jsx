import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(0)
    useEffect(() => {
        fetch('https://api.github.com/users/satyam')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
    }, [])
  return (
    <div className='bg-gray-500 text-red-300 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="gitpic" width={300} />
    </div>
  )
}

export default Github