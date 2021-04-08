import React from 'react'
import './posts.css'
function Posts(props) {
    return (
        <div className="posts">
            <h1>#{props.data.id}  {props.data.title}</h1>
            <p>{props.data.body}</p>
        </div>
    )
}

export default Posts
