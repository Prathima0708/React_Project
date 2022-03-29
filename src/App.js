import React, {  useContext } from "react";
import "./App.css";
import './React Learning/Components/Udemy_Course_Examples/WorkingWithForms/style.css'
import {  Navigate, Route, Routes } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Home } from "./React Learning/Components/Examples/ContactApp/components/pages/Home";
import { About } from "./React Learning/Components/Examples/ContactApp/components/pages/About";
import { Contact } from "./React Learning/Components/Examples/ContactApp/components/pages/Contact";
import  Navbar  from "./React Learning/Components/Examples/ContactApp/components/Layout/Navbar";

// import Form from "./React Learning/Components/Examples/Form"
// import Card from "./React Learning/Components/Examples/Card"
// import HomePage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/HomePage";
// import AuthPage from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/pages/AuthPage";
// import UserProfile from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/profile/UserProfile";
// import Layout from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/components/layout/Layout";
// import AuthContext from "./React Learning/Components/Udemy_Course_Examples/Authentication Section/store/auth-context";



const App = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };
//  const authCtx=useContext(AuthContext)
  return (
    // <CartProvider>
    //   {cartIsShown && <Cart onClose={hideCartHandler} />}
    //   <Header onShowCart={showCartHandler} />

    //   <main>
    //     <Meals />

    //   </main>

    // </CartProvider>


  // <Layout>
  //     <Routes>
  //       <Route path='/' element={<HomePage />} />
  //     {!authCtx.isLoggedIn &&   <Route path='/auth' element={<AuthPage />} /> }
  //     {authCtx.isLoggedIn &&   <Route path='/profile' element={<UserProfile />} /> }
  //    {!authCtx.isLoggedIn && <Route path="*" element={<Navigate to='/auth' />} />}
  //     {/* <Route path="*" element={<Navigate to='/' />} /> */}
  //     </Routes>
  //   </Layout>


  <div>
    <Routes>

    <Route path="/" element={<Navbar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
    
  
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
