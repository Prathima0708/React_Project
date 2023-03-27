// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import AddContact from "./React Learning/Components/Examples/ContactManager/components/AddContact";
// import ContactList from "./React Learning/Components/Examples/ContactManager/components/ContactList";

// import Header from "./React Learning/Components/Examples/ContactManager/components/Header";

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path='/' element={  <HomePage />}>

//         </Route>
//         <Route path='/auth' element={<AuthPage />}>

//         </Route>
//         <Route path='/profile' element={  <UserProfile />}>

//         </Route>
//       </Routes>
//     </Layout>
//   );
// }

// export default App;

// function App() {
//   const useStyles = makeStyles(() => ({
//     App: {
//       // backgroundColor: "#14161a",
//       // color: "white",
//       minHeight: "100vh",
//     },
//   }));

//   const classes = useStyles();
//   return (
//     <>

//       <div className={classes.App}>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/coins/:id" element={<CoinPage />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

// class App extends React.Component {
//   state={
//     data:{},
//     country:''
//   }

// async componentDidMount(){
//   const fetchedData=await fetchData()
//  this.setState({data:fetchedData})
// }

// handleCountryChange = async (country) => {

//   const fetchedData = await fetchData(country);

//   this.setState({ data:fetchedData,country:country });
// }

// this.setState({ data, country: country });

//   render() {
//     const {data,country}=this.state

//     return (
//       <div className={styles.container} >
//         <Cards data={data}/>
//         <CountryPicker handleCountryChange={this.handleCountryChange}/>
//         <Chart data={data} country={country}/>

//       </div>
//     );
//   }
// }

// export default App;

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState([]);
//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([
//       ...contacts,
//       { id: Math.floor(Math.random() * 100), ...contact },
//     ]);
//   };

//   const deleteContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });
//     setContacts(newContactList);
//   };

//   useEffect(() => {
//     const retrieveContacts = JSON.parse(
//       localStorage.getItem(LOCAL_STORAGE_KEY)
//     );
//     if (retrieveContacts) setContacts(retrieveContacts);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <>
//       {/* <Dashboard /> */}
//       {/* <Book/> */}

//       {/* <Route  path="/users/add" element={AddUser} />
//           <Route  path="/users/edit/:id" element={EditUser} />
//           <Route  path="/users/:id" element={User} />
//           <Route element={NotFound} /> */}
//       <div className="container">
//         <Header />
//         <AddContact addContactHandler={addContactHandler} />
//         <ContactList contacts={contacts} getContactId={deleteContactHandler} />
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { Link, Route, Router, Routes } from "react-router-dom";
// import Book from "./React Learning/Components/Examples/RoutingPractice/pages/Book";
// import BookList from "./React Learning/Components/Examples/RoutingPractice/pages/BookList";
// import Home from "./React Learning/Components/Examples/RoutingPractice/pages/Home";
// import NewBook from "./React Learning/Components/Examples/RoutingPractice/pages/NewBook";
// import NotFound from "./React Learning/Components/Examples/RoutingPractice/pages/NotFound";
// import ReactPlayer from "react-player";

// //https://youtu.be/6YQKb6-8sOI
// function App() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/books">
//           <Route index />
//           <Route path=":id" element={<Book />} />
//         </Route>
//         {/* <Route path="/books" element={<BookList />} />
//         <Route path="/books/:id" element={<Book />} />
//         <Route path="/books/new" element={<NewBook />} /> */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <ReactPlayer
//         //  className="react-player"
//         url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//         controls={true}
//         // width="100%"
//         // height="100%"
//       />
//     </>
//   );
// }
// export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./React Learning/Components/Examples/ProtectedRoutes/components/Admin";
import { AuthProvider } from "./React Learning/Components/Examples/ProtectedRoutes/components/auth";
import { FeaturedProducts } from "./React Learning/Components/Examples/ProtectedRoutes/components/FeaturedProducts";
import { Home } from "./React Learning/Components/Examples/ProtectedRoutes/components/Home";
import { Login } from "./React Learning/Components/Examples/ProtectedRoutes/components/Login";
import { Navbar } from "./React Learning/Components/Examples/ProtectedRoutes/components/Navbar";
import { NewProducts } from "./React Learning/Components/Examples/ProtectedRoutes/components/NewProducts";
import { NoMatch } from "./React Learning/Components/Examples/ProtectedRoutes/components/NoMatch";
import { OrderSummary } from "./React Learning/Components/Examples/ProtectedRoutes/components/OrderSummary";
import { Products } from "./React Learning/Components/Examples/ProtectedRoutes/components/Products";
import { Profile } from "./React Learning/Components/Examples/ProtectedRoutes/components/Profile";
import { RequireAuth } from "./React Learning/Components/Examples/ProtectedRoutes/components/RequireAuth";
import { UserDetails } from "./React Learning/Components/Examples/ProtectedRoutes/components/UserDetails";
import { Users } from "./React Learning/Components/Examples/ProtectedRoutes/components/Users";
import Carousel from "react-bootstrap/Carousel";
import { GoogleApiWrapper } from "google-maps-react";
import { Map, InfoWindow, Marker } from "google-maps-react";
import Contactus from "./React Learning/Components/Examples/Email/Contactus";
import SMTP from "./React Learning/Components/Examples/Email/SMTP";
import Download from "./React Learning/Components/Examples/Download/Download";
import Postreq from "./React Learning/Components/Examples/PacificmanpowerPractice/CheckBackend/Postreq";
import FileUpload from "./React Learning/Components/Examples/PacificmanpowerPractice/CheckBackend/FileUpload";
import EditDel from "./React Learning/Components/Examples/PacificmanpowerPractice/CheckBackend/EditDel";

const LazyAbout = React.lazy(() =>
  import(
    "../src/React Learning/Components/Examples/ProtectedRoutes/components/About"
  )
);

function App(props) {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 12.9141,
    lng: 74.856,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  const [isLoginForm, setIsLoginForm] = useState(true);

  function toggleForm() {
    setIsLoginForm(!isLoginForm);
  }

  return (
    <>
      {/* <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider> */}
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffood.html&psig=AOvVaw1NNz7wsEg3Oz8Zj_5BrtYu&ust=1679119752488000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiRxtWm4v0CFQAAAAAdAAAAABAE"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      {/* <Map google={props.google} initialCenter={currentLocation} zoom={14} /> */}
      <FileUpload />
      {/* <SMTP /> */}
      {/* <Download /> */}
      {/* <Postreq />
      <FileUpload /> */}

      {/* 
    <div className="App"> */}
      {/* <h1>{isLoginForm ? "Login" : "Signup"}</h1>
      <Postreq isLoginForm={isLoginForm} toggleForm={toggleForm} /> */}
      {/* <EditDel/> */}

      {/* </div> */}
    </>
  );
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCorsWX6UsRet46O-a9zWvYY6QmC87yeFA",
// })(App);
