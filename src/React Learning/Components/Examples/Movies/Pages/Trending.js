import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import SingleContent from '../components/SingleContent';

const Trending = () => {
const [content, setContent] = useState([])
  const fetchTrending=async()=>{
    // const data=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`).then(response=>{
    //   console.log(response.results)
    // })
    const {data}=await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=e6ab9cb5f394d693d47a56721ddcd9a5')
    console.log(data.results)
    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div className='pageTitle'>
    <div className='trending'>
      {content && content.map((c)=>    <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />)}
    </div>
      
    </div>
  )
}

export default Trending
