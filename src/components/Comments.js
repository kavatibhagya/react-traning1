import React from 'react';
import './Comments.css'

  function Comment(props) {
        return (
            <div className="comments">
                <h1>Name: {props.name}</h1>
                <p className="email">Email: {props.email}</p>
                <p className="email">Author:{props.author}</p>
            </div>
        )
    }

export default Comment;
 