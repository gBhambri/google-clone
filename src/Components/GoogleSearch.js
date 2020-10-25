import { useEffect } from 'react'
import API_KEY from '../Keys/Keys'
import { useState } from 'react'
const CONTEXT_KEY='ba299f5d4fe5d8da5'
const GoogleSearch=(term)=> {
    const [data,setData]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res=>res.json())
            .then(result=>{
                setData(result)
            })
            .catch(error=>console.log(error))
        }
        fetchData()
    },[term])
    return {data}
}

export default GoogleSearch
