import  "../css/style.css";
import React, {useEffect, useState} from "react";
import CommentForm from "../Comments/CommentForm";
import CommentApi from "../../api/CommentApi";
import CommentCard from "../Comments/CommentCard";

export default function PostCard({ post, onDeleteClick }) {

    const [comments, setComments] = useState([]);
    const [state,setState]=useState(false);

    async function createComment(commentData,id) {
        try {
            const response = await CommentApi.createComment(commentData,id);
            const comment = response.data;
            const newComments = comments.concat(comment);

            setComments(newComments);
        } catch (e) {
            console.error(e);
        }
    }

     async function deleteComment(comment) {
        try {
          await CommentApi.deleteComment(comment.id);
          const newComments = comments.filter((c) => c.id !== comment.id);

          setComments(newComments);
        } catch (e) {
          console.error(e);
        }
      }



    const showForm = (e) => {
        setState(true);
        e.preventDefault()
       };

    useEffect(() => {
        CommentApi.getCommentsById(comments,post.id)
            .then(({ data }) => setComments(data))
            .catch((err) => console.error(err));
    }, [setComments]);

    const CommentsCardArray = comments.map((comment)=>(
        <CommentCard key={comment.id} comment={comment} onDeleteClick={()=> deleteComment(comment)}/>
    ))

  return (

    <div className="card mt-3">
        <div className="p-3 mb-2 bg-dark text-white">
      <div className="card-body" >
        <p>{post.body}</p>


          {!state &&
          <div>
              <button className="button" onClick={onDeleteClick}>
                  Delete
              </button>

             ¨
             <button className="button" onClick={showForm}>
                  Comment
              </button>
          </div>
           }
          {state &&  <CommentForm onSubmit={(commentData) => createComment(commentData,post.id)}/>}
          {CommentsCardArray}

      </div>
    </div>
    </div>

  );
}
