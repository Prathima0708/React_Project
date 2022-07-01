import { makeStyles } from "@material-ui/styles";
import { Route, Routes } from "react-router-dom";
import Header from "./React Learning/Components/Examples/CryptoHunter/components/Header";
import CoinPage from "./React Learning/Components/Examples/CryptoHunter/pages/CoinPage";
import HomePage from "./React Learning/Components/Examples/CryptoHunter/pages/HomePage";

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

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      // backgroundColor: "#14161a",
      // color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <>
      {/* <Link to="/phoneSignUp">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit" className='w-72'>
              Sign in with Phone
            </Button>
          </div>
        </Link> */}

      {/* <Routes>

          <Route path="/" element={<PhoneSignUp />}/>
        </Routes> */}
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
