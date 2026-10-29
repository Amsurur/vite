// import React from 'react'
import Button from './components/Button'

const App = () => {
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
