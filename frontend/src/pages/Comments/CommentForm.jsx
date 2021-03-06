// NPM Packages
import React from "react";

export default function CommentForm({ onSubmit }) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({ body: body });

        // Clear the input field
        setBody("");
    };

    return (
        <div className="card">
            <div className="p-3 mb-2 bg-info text-white">
            <div className="card-body">
                <div>
                    <div className="form-group">
            <textarea
                className="form-control"
                placeholder="Enter your comment.."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary ml-0" onClick={handleSubmit}>
                            Comment
                        </button>
                    </div>


                </div>

                </div>

            </div>
        </div>
    


            );
        }


