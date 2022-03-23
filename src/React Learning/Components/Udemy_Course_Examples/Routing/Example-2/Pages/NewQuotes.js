import QuoteForm from '../Components/Quotes/QuoteForm'
import { useHistory } from 'react-router-dom'
const NewQuotes=()=>{
    const history=useHistory()


    const addQuoteHandler=(quoteData)=>{
        console.log(quoteData)
        history.push('/quotes')
    }
    return(
<QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default NewQuotes