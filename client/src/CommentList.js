import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    console.log(res.data)
    setComments(res.data);
  }

  useEffect(() => {
    fetchComments();
  }, [])

  return (
    <div>
        <div>Post Comments</div>
      {comments.map((comment) => {
        return (
            <div 
            key={comment.id}
            style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", marginTop: "5px"}}
            >
            {comment.content}
            </div>
        )
      })}
    </div>
  );
};

export default CommentCreate;