import React from 'react';

const PostDetail = (props) => {
    const { title, description } = props.post;
    return (
        <div className="container">
            <div class="card w-75 mt-3">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="f" class="btn btn-danger">Delete</a>
                    <a style={{marginLeft : '3%'}} href="f" class="btn btn-primary">Edit</a>
                </div>
            </div>
            
        </div>
    );
};

export default PostDetail;