import React,{useState,useEffect} from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Content from '../../Component/Content/Content';
import Footer from '../../Component/Footer/Footer';
function Homepage() { 
    const [data,setData]=useState();
    const  getDataAPI =async()=>{
        try{
        const data =await fetch('https://jsonplaceholder.typicode.com/posts',
        {method:'GET'});
        const response= await data.json();
        
        setData(response);
        
     
        }
        catch(err){
            console.log("err",err)
        }
    }
    useEffect(() => {
        getDataAPI();
        
    }, []);
    return (
        <div>
            <Navbar/>
            <Content data={data}/>
            <Footer/>

        </div>
    )
}

export default Homepage
