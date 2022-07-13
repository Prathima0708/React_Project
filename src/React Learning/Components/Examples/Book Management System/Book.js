import { Box, TextField ,Button,Table} from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const bookObject={
    bookName:'',
    authorName:'',
    description:''

}
const Book = () => {
    const [modal,setModal]=useState(bookObject)
    const [bookList,setBookList]=useState([])
    const [edit,setEdit]=useState(false)
    const changeHandler=(e)=>{
       const value=e.target.value
       setModal(modal=>({
        ...modal,
        [e.target.name]:value
       }))
    }
    console.log(modal)

    const addBook=()=>{
        if (edit){

            const updateBookList=bookList.map((row)=>row.id===modal.id?modal:row)
            setBookList(updateBookList)
            setEdit(false)
            setModal(bookObject)
        }else{
let listItems=bookList
const item={
    id:bookList.length,
    ...modal

}
listItems=[...bookList,item]
setBookList(listItems)
clearData()
    }
}
    const clearData=()=>{
        setModal(bookObject)
    }
const deleteRow=(id)=>{
const filtered=bookList.filter(item=>item.id !== id)
setBookList(filtered)
}
const editRow=(data)=>{
setModal(data)
setEdit(true)
}
  return (
    <>
    <Box sx={{m:2,p:2,border:'1px solid grey'}}>
        <TextField label='Book Name' name='bookName' variant='outlined' onChange={changeHandler} fullWidth sx={{mr:2,mb:2}} value={modal.bookName}/>
        <TextField label='Book Author' name='authorName' variant='outlined' onChange={changeHandler} fullWidth sx={{mr:2,mb:2}} value={modal.authorName}/>
        <TextField label='Description' name='description' variant='outlined' onChange={changeHandler} fullWidth sx={{mr:2,mb:2}} value={modal.description}/>
        <Box textAlign='center'>
            <Button variant='contained' color='success' onClick={addBook}>{edit ? 'Update':'Submit'}</Button>
            <Button variant='contained' sx={{ml:3}} onClick={clearData}>Clear</Button>
        </Box>
    </Box >
    <Box sx={{m:2,p:2,border:'1px solid grey'}}>
    <Table style={{width:'100%'}}>
<tr style={{background:'grey'}}>
    <th style={{textAlign:'left'}}>Book Name</th>
    <th style={{textAlign:'left'}}>Author Name</th>
    <th style={{textAlign:'left'}}>Description</th>
    <th style={{textAlign:'left'}}>Actions</th>
</tr>
{bookList && bookList.map((row,index)=>(
<tr>
    <td>{row.bookName}</td>
    <td>{row.authorName}</td>
    <td>{row.description}</td>
    <td> <EditIcon style={{color:'green',cursor:'pointer'}} onClick={()=>editRow(row)}/> <DeleteForeverIcon style={{color:'red',cursor:'pointer'}} onClick={()=>deleteRow(row.id)}/>  </td>
</tr>
))}
    </Table>
    </Box>
    </>
  )
}

export default Book