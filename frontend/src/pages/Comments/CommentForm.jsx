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
                <h4 className="card-title">Comment What's on your mind?</h4>
                <div>
                    <div className="form-group">
            <textarea
                className="form-control"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
                    </div>

                    <div className="form-group">
                        <button className="button" onClick={handleSubmit}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
