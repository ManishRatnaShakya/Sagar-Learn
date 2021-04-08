import React,{useState} from 'react'
import UserDetails from './UserDetails';
import Posts from './Posts';
function Content(props) {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [usernameData,setUsernameData]=useState();
    const [passwordData,setPasswordData]=useState();
    console.log("data",props.data);
    
    const onSubmit=(e)=>{
        e.preventDefault();
        setUsernameData(username);
        setPasswordData(password);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={(e)=>onSubmit(e)}>Submit</button>
            </form>
            <div>
              <UserDetails
               usernameData={usernameData}
               passwordData={passwordData}
               />
            </div>
            <div >
                {props.data && props.data.filter((data,i)=>i<=10).map((data)=>
                    (<div style={{display:'flex',justifyContent: 'center'}}>
                        <Posts data={data}/>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default Content
