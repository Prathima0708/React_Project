
import React from "react";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./React Learning/Components/Examples/Bootstrap/components/Navbar";
import About from "./React Learning/Components/Examples/Bootstrap/pages/About";
import Contact from "./React Learning/Components/Examples/Bootstrap/pages/Contact";
import Home from "./React Learning/Components/Examples/Bootstrap/pages/Home";

import { fetchData } from "./React Learning/Components/Examples/Covid19/api";
import styles from './React Learning/Components/Examples/Covid19/App.module.css'
import Cards from "./React Learning/Components/Examples/Covid19/components/Cards/Cards";
import Chart from "./React Learning/Components/Examples/Covid19/components/Chart/Chart";
import CountryPicker from "./React Learning/Components/Examples/Covid19/components/CountryPicker/CountryPicker";
import Dashboard from "./React Learning/Components/Examples/CRUD/pages/Dashboard";

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


function App(){
  return(
    <>
    {/* <Navbar/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>
  </Routes> */}

  <Dashboard />
  </>
  )
}

export default App
