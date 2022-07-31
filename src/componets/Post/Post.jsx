import React from "react"
import './styles.css';

function Post({id, title, body, users}) {

    console.log("user", users);
    return (
        <>
            <div className="card">
                Title: {title}
                <span> body: {body}</span>
                <span> user:  {users.id == id ? users.name : null}</span>
               
            </div>
        </>

    )
}


export { Post }