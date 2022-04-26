// import React, { useCallback, useMemo, useState } from "react";
// import { Route, Routes ,Navigate} from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import "./App.css";

// import Navbar from "./React Learning/Components/Examples/Portfolio/components/Navbar/Navbar"
// import Intro from "./React Learning/Components/Examples/Portfolio/components/Intro/Intro"
// import Services from "./React Learning/Components/Examples/Portfolio/components/Services/Services";
// import Experience from "./React Learning/Components/Examples/Portfolio/components/Experiences/Experience";
// import Works from "./React Learning/Components/Examples/Portfolio/components/Works/Works";
// import Portfolio from "./React Learning/Components/Examples/Portfolio/components/Portfolio/Portfolio";
// import Slider from "./React Learning/Components/Examples/Portfolio/components/slider/Slider";

import Layout from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Layout/Layout";
import Cart from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Cart/Cart";
import Products from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/Store/ui-slice";
import Notification from "./React Learning/Components/Udemy_Course_Examples/Redux/Example-2/UI/Notification";

// import Form from "./React Learning/Components/Examples/Form";
// import Card from "./React Learning/Components/Examples/Card";

// const App = (props) => {
// const [cartIsShown, setCartIsShown] = useState(false);

// const showCartHandler = () => {
//   setCartIsShown(true);
// };
// const hideCartHandler = () => {
//   setCartIsShown(false);
// };

// const [id,setId]=useState(1)

// return (

// <CartProvider>
//   {cartIsShown && <Cart onClose={hideCartHandler} />}
//   <Header onShowCart={showCartHandler} />
//   <main>
//     <Meals />
//   </main>
// </CartProvider>

//  <>
//    <MainNavigation />
//    <MainImage />
// <About />
// <Menu />
//    <Contact />

//    </>

/* <>
<Header />

</> */

/* <div>
<Layout>
      <Routes>
        <Route path='/' element={ <AllMeetupsPage />}/> 
         
        
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        
        <Route path='/favorites' element={<FavoritesPage />}/>
          
       
      </Routes>
    </Layout>


</div> */

//  <div >
// <Navbar />
// <Intro />
// <Services />
//  </div>

//   );
// };

// export default App;


let initial=true

const App = () => {
  const dispatch=useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification=useSelector((state)=>state.ui.notification)
  useEffect(() => {
    const sendCartData= async ()=>{
dispatch(uiActions.showNotification({
  status:'pending',
  title:'Sending...',
  message:'Sending Cart data'
}))
  const response=  await  fetch(
        "https://advanced-redux-fbab5-default-rtdb.firebaseio.com/cart.json",
        { method: 'PUT', body: JSON.stringify(cart), }
      );
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      // const responseData=response.json() //while sending cart data no need to get response data
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!...',
        message:'Sent Cart data successfully'
      }))
    }


    if(initial){
      initial=false
      return
    }

    sendCartData().catch(error=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!...',
        message:'Something went wrong '
      }))
    })
    
  }, [cart,dispatch]);
  // const [id,setId]=useState(1)
  return (
    <>


      {/* <Header />
<Auth />
  <Counter /> */}

{notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
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
