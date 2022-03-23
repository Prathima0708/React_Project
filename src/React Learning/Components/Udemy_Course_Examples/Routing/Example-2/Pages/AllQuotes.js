import QuoteList from "../Components/Quotes/QuoteList"

const DUMMY_QUOTES=[
{id:'q1',author:'Max',text:'Learing React is fun'},
{id:'q2',author:'Milian',text:'Learing Python is fun'},
]


const AllQuotes=()=>{
    return(

       <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes