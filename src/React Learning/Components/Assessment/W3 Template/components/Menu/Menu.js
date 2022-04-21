import React from 'react'
import im2 from '../assets/party-food-photo.jpg'
import './Menu.css'

// const Menu = () => {
//   return (
//     <div className='row'>
//     <div className='col-md-6  mt-9'>
//     <h1 className='mt-11 tracking-wide ml-80' id="Menu">Our Menu</h1>
//         <br />
        
//         <h3 className='tracking-widest ml-60'>Bread Basket</h3>
       
//         <p className='ml-60 text-gray-500 font-medium'>Assortment of fresh baked fruit breads and muffins 5.50</p>
//         <br />

//         <h3 className='tracking-widest ml-60'>Honey Almond Granola with Fruits</h3>
        
//         <p className='ml-60 text-gray-500 font-medium'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
//         <br />

//         <h3 className='tracking-widest ml-60'>Belgian Waffle</h3>
        
//         <p className='ml-60 text-gray-500 font-medium'>Vanilla flavored batter with malted flour 7.50</p>
//         <br />

//         <h3 className='tracking-widest ml-60'>Scrambled eggs</h3>
        
//         <p className='ml-60 text-gray-500 font-medium'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
//         <br />
        

//         <h3 className='tracking-widest ml-60'>Blueberry Pancakes</h3>
        
//         <p className='ml-60 text-gray-500 font-medium'>With syrup, butter and lots of berries 8.50</p>
//         <br />
    
//     </div>

//     <div className='col-md-6  '>
//     <img src={im2} alt="im1" className=' mt-11  mb-11 h-3/4 menuImage'/>
//     </div>

// </div>
//   )
// }
// export default Menu







const Menu=()=>{
  return(
    <div className='row'>
      <div className='col-md-2'>

      </div>
      <div className='col-md-4'>
      <h1 className='mt-11 tracking-wide ' id="Menu">Our Menu</h1>
       <br />
        
         <h3 className='tracking-widest '>Bread Basket</h3>
       
        <p className=' text-gray-500 font-medium'>Assortment of fresh baked fruit breads and muffins 5.50</p>
         <br />

       <h3 className='tracking-widest '>Honey Almond Granola with Fruits</h3>
        
        <p className=' text-gray-500 font-medium'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
        <br />

        <h3 className='tracking-widest '>Belgian Waffle</h3>
        
        <p className=' text-gray-500 font-medium'>Vanilla flavored batter with malted flour 7.50</p>
        <br />

        <h3 className='tracking-widest '>Scrambled eggs</h3>
        
         <p className=' text-gray-500 font-medium'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
        <br />
        

        <h3 className='tracking-widest'>Blueberry Pancakes</h3>
        
         <p className=' text-gray-500 font-medium'>With syrup, butter and lots of berries 8.50</p>
         <br />
      </div>
      <div className='col-md-4'>
      <img src={im2} alt="im1" className=' mt-11  mb-11 h-3/4 menuImage'/>
      </div>
      <div className='col-md-2'>

      </div>
    </div>
  )
}

export default Menu