
const Modal = ({open,setOpen,title, children}) => {
  return (
    
        open?(
        <div style={{position:"absolute",background:"rgba(214, 214, 215, 0.526)", width:"100%",height:"100%", top:0, }}>
        <div style={{background:"white", width:"800px", height:"500px", margin:"150px auto 0 auto "}}>
          <div style={{display:'flex', justifyContent:'space-between', padding:"15px", fontSize:"30px"}}>
            <h1>{title} User</h1>
            <button onClick={()=>setOpen((prev)=>!prev)} style={{cursor:"pointer", color:"red"}}>X</button>
          </div>
{children}
        </div>
      </div>)
      :null
      
  )
}

export default Modal