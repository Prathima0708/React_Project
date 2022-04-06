import React, { useContext, useState } from "react";
import "./App.css";
import "./React Learning/Components/Udemy_Course_Examples/WorkingWithForms/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Transition from "react-transition-group/Transition";

// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Form from "./React Learning/Components/Examples/Form";
import Card from "./React Learning/Components/Examples/Card";
import Ingredients from "./React Learning/Components/Udemy_Course_Examples/Section28/components/Ingredients/Ingredients";
import Auth from "./React Learning/Components/Udemy_Course_Examples/Section28/components/Auth";
import { AuthContext } from "./React Learning/Components/Udemy_Course_Examples/Section28/components/context/auth-context";

const App = (props) => {
// const [cartIsShown, setCartIsShown] = useState(false);

// const showCartHandler = () => {
//   setCartIsShown(true);
// };
// const hideCartHandler = () => {
//   setCartIsShown(false);
// };
//  const authCtx=useContext(AuthContext)

const authCtx=useContext(AuthContext)
let content=<Auth />
if(authCtx.isAuth){
content=<Ingredients />
}

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
  
{content}
   </div>



  );
};

export default App;










//animating react apps
// class App extends Component {
//   state = {
//     modalIsOpen: false,
//     showBlock: false,
//   };

//   showModal = () => {
//     this.setState({ modalIsOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ modalIsOpen: false });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <button
//           onClick={() =>
//             this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
//           }
//         >
//           Toggle
//         </button>
//         <br></br>
//         <Transition
//           in={this.state.showBlock}
//           timeout={1000}
//           mountOnEnter
//           unmountOnExit
//           onEnter={()=>console.log('On enter')}
//           onEntering={()=>console.log('On entering')}
//           onEntered={()=>console.log('on entered')}
//           onExit={()=>console.log('on exit')}
//           onExiting={()=>console.log('on exiting')}
//           onExited={()=>console.log('on exited')}
//         >
//           {(state) => (
//             <p>
//               <div
//                 style={{
//                   backgroundColor: "red",
//                   width: 100,
//                   height: 100,
//                   margin: "auto",
//                   transition: "opacity 1s ease-out",
//                   opacity: state === "exiting" ? 0 : 1,
//                 }}
//               ></div>
//             </p>
//           )}
//         </Transition>

//         <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

//         {this.state.modalIsOpen ? (
//           <Backdrop show={this.state.modalIsOpen} />
//         ) : null}
//         <button className="Button" onClick={this.showModal}>
//           Open Modal
//         </button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }

// export default App;























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
