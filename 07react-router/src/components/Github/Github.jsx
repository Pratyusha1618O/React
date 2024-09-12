import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/Pratyusha1618O')
    //   .then(response => response.json())
    //   .then(data => {
    //     // console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="pic" width={300} className='rounded-full'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response =  await fetch('https://api.github.com/users/Pratyusha1618O');
    return response.json();
}
