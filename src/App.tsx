import React, { useState } from 'react'
import Modal from './Modal'

const App = () => {
  const [data,setData] = useState([{
    id:1,
    name:"Fasehuddin",
    age:"19",
    status:false
  },{
    id:2,
    name:"Muhammad",
    age:16,
    status:false

  }])
  const [openAdd,setOpenAdd] = useState(false)
  const [openEdit,setOpenEdit] = useState(false)
  const [elemEdit,setElemEdit] = useState(null)
  

  const handleSubmitAdd =(event)=>{
event.preventDefault()
const newUser ={
  id:Date.now(),
  name:event.target.name.value,
  age:event.target.age.value,
  status:false
}
setData((prev)=>[...prev,newUser])
setOpenAdd((prev)=>!prev)
  }

  const handleSubmitEdit =(event)=>{
    event.preventDefault()
   
  setData((prev)=>prev.map((e)=>e.id == elemEdit.id?elemEdit:e))
  setOpenEdit((prev)=>!prev)
    }
  const handleDelete=(id)=>{
    setData((prev)=>prev.filter((e)=>e.id!=id))
  }
  const handleEdit=(e)=>{
    setOpenEdit(true)
    setElemEdit(e)
  }
  return (
    <div>
      <button onClick={()=>setOpenAdd((prev)=>!prev)}>Add+</button>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", margin:"10px"}}>
         {
        data.map((e)=>{
          return <div style={{border:"1px solid grey", padding:'10px', fontSize:"50px"}}>
            <h1>Name:{e.name}</h1>
            <p>Age: {e.age}</p>
            <button className='p-5' onClick={()=>handleEdit(e)}>edit</button>
            <button onClick={()=>handleDelete(e.id)}>delete</button>
          </div>
        })
      }
      </div>
<Modal open={openAdd} setOpen={setOpenAdd} title="Add">
<form  onSubmit={handleSubmitAdd} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
  <input name='name' placeholder='name' className='border border-grey p-[10px] rounded-lg' type="text" />
  <input name='age' placeholder='age' className='border border-grey p-[10px] rounded-lg' type="text" />
  <button className='border border-green-400 p-[10px] rounded-2xl text-green-500  text-xl' type='submit'>Save</button>
</form>
</Modal>
<Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
<form  onSubmit={handleSubmitEdit} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
  <input value={elemEdit?.name} onChange={(e)=>setElemEdit((prev)=>({...prev,name:e.target.value}))} name='name' placeholder='name' className='border border-grey p-[10px] rounded-lg' type="text" />
  <input value={elemEdit?.age} onChange={(e)=>setElemEdit((prev)=>({...prev,age:e.target.value}))} name='age' placeholder='age' className='border border-grey p-[10px] rounded-lg' type="text" />
  <button className='border border-green-400 p-[10px] rounded-2xl text-green-500  text-xl' type='submit'>Save</button>
</form>
</Modal>
     
     
    </div>
  )
}

export default App