import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProductDetails = () =>{

    const [data, setData] = useState(null);
    const { proid }  = useParams()
 
  useEffect(()=>{
    fetchData();
  })

  const fetchData = async () =>{
    const data = await fetch(`https://fakestoreapi.com/products/${proid}`);
    const json = await data.json();
    console.log(json);
    setData(json)
  }

    return (
        <div className="sm:flex w-3/4 h-full sm:ml-40 border-solid border-2">
          {data ?
         ( <><div>
          <img className="w-full h-3/4 " src={data?.image} alt="" />  
        </div>
        <div className="ml-8">
            <h1 className="text-4xl">{data.title}</h1><br />
            <p className="text-4xl text-yellow-400">{data?.rating?.rate} &#9734; {data?.rating?.count} Ratings</p><br />
            <p className="text-4xl font-bold">₹ {data?.price} </p><br />
            <p>{data?.description}</p>
        </div></>):( <h1>product loading....</h1>)
        }
            
        </div>
    )
}

export default ProductDetails;