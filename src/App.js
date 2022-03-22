import React, { Fragment, useCallback, useEffect, useState } from "react";
// import "./App.css";
// import './React Learning/Components/Udemy_Course_Examples/WorkingWithForms/style.css'
import { Route, Switch,Redirect } from "react-router-dom";

// import SimpleInput from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/SimpleInput";
// import BasicForm from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/BasicForm";
import Cart from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Cart/Cart";
import Layout from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Layout/Layout";

// import Header from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-1/Header/Header"
// import Meals from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Meals/Meals";
// import CartProvider from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Store/CartProvider";
// import Counter from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-1/Counter/Counter";
// import Navbar from "./React Learning/Components/Examples/Website/components/Navbar";
// import Form from "./React Learning/Components/Examples/Form"
// import Card from "./React Learning/Components/Examples/Card"
import { useSelector } from "react-redux";
import Game from "./React Learning/Components/Examples/Tic Tac Toe/Game";
import Welcome from "./React Learning/Components/Udemy_Course_Examples/Routing/Pages/Welcome";
import Products from "./React Learning/Components/Udemy_Course_Examples/Routing/Pages/Products";
import MainHeader from "./React Learning/Components/Udemy_Course_Examples/Routing/Components/MainHeader";
import ProductDetail from "./React Learning/Components/Udemy_Course_Examples/Routing/Pages/ProductDetail";

const App = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />

    //   <main>
    //     <Meals />

    //   </main>

    // </CartProvider>
    <div>
      <Game />
   
    </div>
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
