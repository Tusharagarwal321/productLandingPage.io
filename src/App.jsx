import { useEffect, useState} from 'react'
import './App.css'
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';


function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
 
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setData(json)
  }

  return (
    <div>
      <div className='flex justify-center '>
      <input className=' h-10 border-solid border-2 rounded' type="text" placeholder='Search by name' value={search} onChange={(e)=>{
         setSearch(e.target.value)
      }} />
      <button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{
        const filterdData = data.filter((data)=>(
          data.title==search
        ))
        setData(filterdData)
      }}>Search</button>
      </div> 
      <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8'>
      {data.map((item)=>(
         <Link key={item.id} to={'/productdetails/'+ item.id}  className='w-full '>
         <div className='w-full '>
           <img className='w-full h-56  ' src={item.image} alt="product-image" />
         </div>
         <p>{item.category}</p>
         <h1 className='text-2xl font-bold'> ₹ {item.price}</h1>
         <p className='text-2xl'>{item.rating.rate} &#9734;</p>
         <h2>{item.title}</h2>
       </Link>
      ))}
      </div>
      
    </div>
  )
}

export default App

