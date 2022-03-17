import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
// import imgr from "./assets/a1.jpg";
const ContactList = () => {

const url="https://randomuser.me/api"
const {isLoading,data,error}=useFetch(url+'?results=10')
// data && console.log(data)
const [conatctList,setConatctList]=useState(null)
const [filterquery,setFilterQuery]=useState(null)

useEffect(()=>{
  if(filterquery)
  {
    const queryString=filterquery.toLowerCase()
    const filteredData=data?.results?.filter(contact=>{
      
      const fullName=`${contact.name.first} ${contact.name.last}`

      if(queryString.length===1){
        const firstLetter=fullName.charAt(0).toLowerCase()
        return firstLetter===queryString
      }
      else{
        return fullName.toLowerCase().includes(queryString)
      }

    })
    setConatctList(filteredData)
  }
  else{
    setConatctList(data?.results)
  }
},[data,filterquery])

conatctList && console.log(conatctList)
  return (
    <div className="">
      <section>
        <form>
          <input
            placeholder="type here to fill..."
            type="text" onChange={event=>setFilterQuery(event.target.value)}
            className="ml-20 mt-5 rounded-md p-2 border-2" 
          />
        </form>
      </section>
      <section className="grid md:grid-cols-4 gap-6 p-10 min-h-0 min-w-full ">
        {conatctList.length<1 &&(
          <h1>No data matches your search</h1>
        )}


        {conatctList?.map((contact,index)=>(
          <figure key={index} className="bg-white min-h-0 min-w-0 rounded-lg shadow-md pt-7 ">
        <img src={contact.picture.large} alt="img" className="w-32 h-32 rounded-full mx-auto" />
        <figcaption className="text-center mt-5 ">

          <p className="text-gray-700 font-semibold text-xl mb-2">
            {contact.name.first} {contact.name.last}
            </p>


          <p className="text-gray-500 ">
           <span className="font-medium">  email </span>
            {contact.email}
            </p>


          <p className="text-gray-500">
          <span className="font-medium"> phone </span>
            {contact.cell}
            </p>


            <p className="text-gray-500">
          <span className="font-medium"> City </span>
          {contact.location.city}
            </p>

      </figcaption>
      </figure>
        ))
      
}
    </section>
    </div>
  );
};
export default ContactList;

