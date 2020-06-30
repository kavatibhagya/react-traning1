import React from 'react';
import './Comments.css'

  function Comment(props) {
        return (
            <div className="comments">
                <h1>{props.name}</h1>
                <p className="email">{props.email}</p>
            </div>
        )
    }

export default Comment;
 