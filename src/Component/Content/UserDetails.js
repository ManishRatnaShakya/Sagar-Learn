import React from 'react'
import Username from './Username';
import Password from './Password';
function UserDetails(p) {
    console.log("props",p)
    return (
        <div>
              Username:<Username username={p.usernameData}/>
                <br/>
                Password:<Password password={p.passwordData}/>
        </div>
    )
}

export default UserDetails
