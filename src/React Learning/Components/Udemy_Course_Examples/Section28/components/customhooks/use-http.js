import { useCallback, useReducer } from "react"


const httpReducer=(currHttpState,action)=>{
    switch(action.type){
      case 'SEND':
        return {loading:true,error:null,data:null}
        case 'RESPONSE':
          return {...currHttpState,loading:false,data:action.responseData}
          case 'ERROR':
            return {loading:false,error:action.errorMessage}
            case 'CLEAR':
              return {...currHttpState,error:null}
            default:
              throw new Error('Should not be reached here')
    }
  }


const useHttp=()=>{
    const [httpState,dispatchHttp]=useReducer(httpReducer,{loading:false ,error:null,data:null,extra:null})

    const sendRequest=useCallback((url,method,body)=>{
        dispatchHttp({type:'SEND'})
        fetch(
            url,
            {
              method: method,
              body:body,
              headers:{
                  'Content-Type':'application/json'
              }
              
            }
          ).then(response=>{
           return response.json()
          
          }).then(responseData=>{
              dispatchHttp({type:'RESPONSE',responseData:responseData})
          })
          .catch(error=>{
            // setError(error.message)
            // setIsLoading(false)
            dispatchHttp({type:'ERROR',errorMessage:error.message})
          })
    },[])

    return {
        isLoading:httpState.loading,
        data:httpState.data,
        error:httpState.error,
        sendRequest:sendRequest
    }
   

}

export default useHttp