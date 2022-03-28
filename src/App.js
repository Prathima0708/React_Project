import React, { Fragment, useCallback, useContext, useEffect, useState } from "react";
// import "./App.css";
import './React Learning/Components/Udemy_Course_Examples/WorkingWithForms/style.css'
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";

// import SimpleInput from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/SimpleInput";
// import BasicForm from "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/BasicForm";
import Cart from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Cart/Cart";


// import Header from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-1/Header/Header"
// import Meals from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Layout/Meals/Meals";
// import CartProvider from "./React Learning/Components/Udemy_Course_Examples/FoodOrder/Store/CartProvider";
// import Counter from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-1/Counter/Counter";
// import Navbar from "./React Learning/Components/Examples/Website/components/Navbar";
import Form from "./React Learning/Components/Examples/Form"
import Card from "./React Learning/Components/Examples/Card"
import HomePage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/HomePage";
import AuthPage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/AuthPage";
import UserProfile from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/profile/UserProfile";
import Layout from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/layout/Layout";
import AuthContext from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/store/auth-context";



const App = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };
 const authCtx=useContext(AuthContext)
  return (
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />

    //   <main>
    //     <Meals />

    //   </main>

    // </CartProvider>
/* <>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/add" element={<AddEdit />} />
  <Route path="/update/:id" element={<AddEdit />} />
  <Route path="/view/:id" element={<View />} />
  <Route path="/about" element={<About />} />
  </Routes>
  </> */


  <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
      {!authCtx.isLoggedIn &&   <Route path='/auth' element={<AuthPage />} /> }
      {authCtx.isLoggedIn &&   <Route path='/profile' element={<UserProfile />} /> }
     {!authCtx.isLoggedIn && <Route path="/" element={<Navigate to='/auth' />} />}
      <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Layout>

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
