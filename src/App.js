import React, { useCallback, useEffect, useState } from "react";
// import "./App.css";
import './React Learning/Components/Udemy_Course_Examples/WorkingWithForms/style.css'
// import SimpleInput from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/SimpleInput";
// import BasicForm from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/BasicForm";
import Cart from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Cart/Cart";
import Header from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Header/Header";
import Meals from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Meals/Meals";
import CartProvider from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Store/CartProvider";
// import RollDice from "./React Learning/Components/Examples/DiceGame/RollDice";

const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
        
      </main>
      
    </CartProvider>

   
  
   
  );
};

export default App;































// const App = (props) => {

//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error,setError]=useState(null)

//     const fetchMoviesHandler=useCallback(async()=> {
//       setIsLoading(true);
//       setError(null)
//       try{
//         const response = await fetch('https://swapi.dev/api/films/')

//         if(!response.ok)
//         {
//           throw new Error('Something went Wrong...')
//         }

//         const data = await response.json();

//         const transformedMovies = data.results.map((movieData) => {
//           return {
//             id: movieData.episode_id,
//             title: movieData.title,
//             openingText: movieData.opening_crawl,
//             releaseDate: movieData.release_date,
//           };
//         });
//         setMovies(transformedMovies);

//       }
//       catch(error){
//         setError(error.message)
//       }
//       setIsLoading(false);
//     },[])

//     useEffect(()=>{
//       fetchMoviesHandler()
//     },[fetchMoviesHandler])

//     let content=<p>No Movies found.</p>

//     if(movies.length>0){
//       content=<MovieList movies={movies} />
//     }
//     if(error)
//     {
//       content=<p>Something went Wrong</p>
//     }
//     if(isLoading)
//     {
//       content=<p>Loading...</p>
//     }

//     return (

//       <React.Fragment>
//         <section>
//           <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//         </section>
//         <section>
//           {content}
//         </section>
//       </React.Fragment>

//     );
//   };

//   export default App;
