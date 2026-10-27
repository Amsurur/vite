import { api } from '@/api/auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
const [data,setData] = useState([])
const [search ,setSearch] = useState("")
const [selectCatalog ,setSelectCatalog] = useState("")
const [dataCatalog,setDataCatalog] = useState([])
const [dataProducts,setDataProducts] = useState([])
const [dataProductsTotal,setDataProductsTotal] = useState([])
const [dataProductsLimit,setDataProductsLimit] = useState(5)
const [dataProductsTotalPage,setDataProductsTotalPage] = useState([])
const [dataProductsPage,setDataProductsPage] = useState(1)
const token = localStorage.getItem("token")
 const GetUser =async ()=>{
  try {
      const {data} = await axios.get(api+"/users",{
        headers:{
          Authorization: "Bearer "+ token
        }
      })
      setData(data)
  } catch (error) {
      console.error(error);
      
  }
}
const GetCatalog =async ()=>{
  try {
      const {data} = await axios.get(api+"/catalogs")
      setDataCatalog(data)
  } catch (error) {
      console.error(error);
      
  }
}
const GetProducts =async ()=>{
  try {
      const {data} = await axios.get(api+`/products?limit=${dataProductsLimit}&page=${dataProductsPage}${search?`&search=${search}`:""}${selectCatalog?`&catalogId=${selectCatalog}`:""}`,{
        headers:{
          Authorization:"Bearer "+token
        }
      })
      setDataProducts(data.data)
      setDataProductsTotal(data.total)
      setDataProductsTotalPage(data.totalPages)
      setDataProductsLimit(data.limit)

  } catch (error) {
      console.error(error);
      
  }
}


  useEffect(()=>{
   GetUser()
   GetCatalog()
   
  },[])
  useEffect(()=>{
    GetProducts()
  },[dataProductsLimit,dataProductsPage,search,selectCatalog])
  return (
    <div>
     <div className='border p-5 '>
     <h1 className='text-xl '>Users:</h1>
     <div className='grid grid-cols-4'>
     {
        data.map((e)=>{
          return <div>
            <h1>{e.name}</h1>
          </div>
        })
      }
     </div>
     </div>
     <div className='border p-5 '>
     <h1 className='text-xl '>Catalogs:</h1>
     <div className='grid grid-cols-4'>
     {
        dataCatalog.map((e)=>{
          return <div>
            <h1>{e.name}</h1>
          </div>
        })
      }
     </div>
     </div>
     <div className='border p-5 '>
      <div className='flex gap-5'>

     <h1 className='text-xl'>Products:</h1> 
     <input className='border px-1' type="search"  value={search} onChange={(e)=>setSearch(e.target.value)} />
     <select   onChange={(e)=>setSelectCatalog(e.target.value)} name="" id="">
      
     {
        dataCatalog.map((e)=>{
          return <div>
            <option value={e.id}>{e.name}</option>
          </div>
        })
      }
     </select>
      </div>
     <div className='grid grid-cols-4'>
     {
        dataProducts.map((e)=>{
          return <div className='flex gap-1.5'>
            <p>{e.id}</p>
            <h1>{e.name}</h1>
          </div>
        })
      }
     </div>
     <select onChange={(e)=>setDataProductsLimit(e.target.value)} name="" id="">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
     </select>
      <div className='flex gap-2'>
        {
          Array.from({length:dataProductsTotalPage}).map((e,i)=>{
            const page = i+1
            return <p onClick={()=>setDataProductsPage(page)} className='border p-2 px-4 rounded-xl cursor-pointer hover:bg-amber-50'>{page}</p>
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Home