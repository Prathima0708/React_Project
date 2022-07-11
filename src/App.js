
import React, { useEffect, useState } from "react";
import {Routes,Route} from 'react-router-dom'
import AddContact from "./React Learning/Components/Examples/ContactManager/components/AddContact";
import ContactList from "./React Learning/Components/Examples/ContactManager/components/ContactList";

import Header from "./React Learning/Components/Examples/ContactManager/components/Header";




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
  const LOCAL_STORAGE_KEY="contacts"
const [contacts,setContacts]=useState([])
const addContactHandler=(contact)=>{
  console.log(contact)
  setContacts([...contacts,{id:Math. floor(Math. random() * 100),...contact}])
} 

const deleteContactHandler=(id)=>{
const newContactList=contacts.filter((contact)=>{
  return contact.id !==id
})
setContacts(newContactList)
}

    useEffect(()=>{
const retrieveContacts=JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY))
if (retrieveContacts)setContacts(retrieveContacts)
    },[])

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
          },[contacts])

  return(
    <>
 

  {/* <Dashboard /> */}
  {/* <Book/> */}

 

       
          {/* <Route  path="/users/add" element={AddUser} />
          <Route  path="/users/edit/:id" element={EditUser} />
          <Route  path="/users/:id" element={User} />
          <Route element={NotFound} /> */}
          <div className="container">
 <Header/>
<AddContact addContactHandler={addContactHandler}/>
<ContactList contacts={contacts} getContactId={deleteContactHandler}/>
</div>
  </>
  )
}

export default App
