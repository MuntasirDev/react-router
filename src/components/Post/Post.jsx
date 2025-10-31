import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
       navigate(`/posts/${id}`);
    }

    return (
        <div style={{ border: '2px solid gray', margin: '20px', padding: '20px', borderRadius: '10px' }}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
                <button>View Post</button>
            </Link>
            <button onClick={handleNavigate}> Show Details: {id}</button>
            
        </div>
    );
};

export default Post;
