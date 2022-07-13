import React from 'react'

class AddContact extends React.Component{
    state={
        name:"",
        email:""
    }

    
    add=(e)=>{
        e.preventDefault()
        if(this.state.name==="" && this.state.email===""){
            alert("All fileds are mandatory")
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""})
        console.log(this.state)
    }

render(){
    return(
        <div >
        <h2>Add Contact</h2>
        <form onSubmit={this.add} >
          <div className='font-bold ' >
            <label className='block mb-2'>Name</label>
            <input className='h-9 mb-2 border-2'
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e)=>this.setState({name:e.target.value})}
              value={this.state.name}
            />
          </div>
          <div className='font-bold mb-2 ' >
            <label  className='block mb-2'>Email</label>
            <input className='h-9 border-2'
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e)=>this.setState({email:e.target.value})}
              value={this.state.email}
             
            />
          </div>
          <button className='bg-blue-300 w-24 h-11 rounded-md font-bold text-lg'>Add</button>
        </form>
      </div>
    )
}
}

export default AddContact