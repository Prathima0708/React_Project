
import React from "react";

import { fetchData } from "./React Learning/Components/Examples/Covid19/api";
import styles from './React Learning/Components/Examples/Covid19/App.module.css'
import Cards from "./React Learning/Components/Examples/Covid19/components/Cards/Cards";
import Chart from "./React Learning/Components/Examples/Covid19/components/Chart/Chart";
import CountryPicker from "./React Learning/Components/Examples/Covid19/components/CountryPicker/CountryPicker";

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



class App extends React.Component {
  state={
    data:{},
    country:''
  }

async componentDidMount(){
  const fetchedData=await fetchData()
 this.setState({data:fetchedData})
}

handleCountryChange = async (country) => {
  console.log(country)
  const data = await fetchData(country);

  // this.setState({ data, country: country });
}



  render() {
    const {data}=this.state

    return (
      <div className={styles.container} >
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart/>
      
      </div>
    );
  }
}

export default App;
