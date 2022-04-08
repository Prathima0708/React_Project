import React, { useEffect, useState } from 'react'
import MeetUpList from '../components/meetups/MeetUpList'

const DUMMY_DATA=[
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      }
]

export default function Allmeetups() {
  const[isLoading,setIsLoading]=useState(true)
  const [loadedMeetUps,setLoadedMeetUps]=useState([])

  useEffect(()=>{
    fetch('https://section-29-4a8ae-default-rtdb.firebaseio.com/meetups.json').then(response=>{
      return response.json()
     }).then(data=>{
       setIsLoading(false)
       setLoadedMeetUps(data)
     })
  },[])

 

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>

    )
  }
  return (
    <section>
        <h1>Allmeetups</h1>
   <MeetUpList meetups={loadedMeetUps} />
    </section>
  )
}
